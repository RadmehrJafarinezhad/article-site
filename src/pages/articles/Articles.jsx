import styles from "./Articles.module.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/loading/Loading";
import { useNavigate, useParams } from "react-router";
import Menu from "../../components/header/Menu";
import Footer from "../../components/footer/Footer";
import { DataContext } from "../../App";
import { Clock, ArrowBigLeft} from "lucide-react";
import BackButton from "../../components/backButton/BackButton";

function Article() {

    const { id } = useParams();
    const navigate = useNavigate();
    const { menuConfigs, footerConfigs } = useContext(DataContext);
    const [article, setArticle] = useState(null);

    useEffect(() => {
        async function getArticle() {
            const res = await axios.get(
                `http://localhost:3000/articles/${id}`
            );

            console.log(article);
            setArticle(res.data);

        }

        getArticle();
    }, [id]);



    if (!menuConfigs || !footerConfigs || !article) {
        return <Loading />;
    }


    return (
        <>
            <Menu title={menuConfigs.title} subtitle={menuConfigs.subtitle} />
            <div className={styles.container}>
                <h1 className={styles.title}>{article.title}</h1>
                <div className={styles.meta}>
                    <span className={styles.readingTime}> <Clock /> {article.reading} دقیقه</span>
                </div>
                <img src={article.image} alt={article.title} className={styles.image} />
                <p className={styles.text}>{article.text}</p>
                <BackButton />
            </div>
            <Footer footerConfigs={footerConfigs} />
        </>
    );
}

export default Article;