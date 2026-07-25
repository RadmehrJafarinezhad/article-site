import styles from "./Home.module.css";
import Menu from "../../components/header/Menu";
import Footer from "../../components/footer/Footer";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ArticleContainer from "../../components/ArticleContainer/ArticleContainer";
import { DataContext } from "../../App";
import Card from "../../components/card/card";
import Loading from "../../components/loading/Loading";
import { Link } from "react-router-dom"


function Home() {

    const { menuConfigs, footerConfigs } = useContext(DataContext)
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function getDatas() {
            try {

                const articlesRes = await axios.get("http://localhost:3000/articles")

                setArticles(articlesRes.data);
            } catch (error) {
                console.error(error)
            }
        }

        getDatas();
    }, []);
    if (!menuConfigs || !footerConfigs) {
        return <Loading />
    }

    return (
        <div>
            <Menu title={menuConfigs.title} subtitle={menuConfigs.subtitle} />
            <ArticleContainer>
                {articles.map(data => (
                    <Link key={data.id} to={`/article/${data.id}`} className={styles.cardLink}>
                        <Card card={data} />
                    </Link>))}
            </ArticleContainer>
            <Footer footerConfigs={footerConfigs} />
        </div>
    );
}

export default Home;
