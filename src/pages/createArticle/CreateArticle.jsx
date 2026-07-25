import styles from "./CreateArticles.module.css";

import Footer from "../../components/footer/Footer";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import Menu from "../../components/header/Menu";
import Input from "../../components/input/Input";
import Loading from "../../components/loading/Loading";
import axios from "axios";
import BackButton from "../../components/backButton/BackButton";


function CreateArticle() {

    const { menuConfigs, footerConfigs } = useContext(DataContext);

    const [articleConfigs, setArticleConfigs] = useState([]);

    const [dataForPost, setDataForPost] = useState({
        image: null,
        title: "",
        reading: "",
        text: ""
    })

    const [error, setError] = useState("");

    useEffect(() => {
        async function getDatas() {
            try {

                const articlesRes = await axios.get("http://localhost:3000/createArticleConfigs")

                setArticleConfigs(articlesRes.data);
            } catch (error) {
                console.error(error)
            }
        }

        getDatas();
    }, [])


    const images = [
        "/images/img1.jpg",
        "/images/img2.jpg",
        "/images/img3.jpg",
        "/images/img4.jpg",
        "/images/img5.jpg",
    ];


    if (!menuConfigs || !footerConfigs) {
        return <Loading />
    }

    const inputsHandler = (e) => {
        setDataForPost((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const selectImage = (image) => {
        setDataForPost((prev) => ({
            ...prev,
            image: image,
        }));
    };

    const submit = () => {
        console.log(dataForPost)

        if (!dataForPost.title.trim() || !dataForPost.image || !dataForPost.text.trim() || Number(dataForPost.reading) <= 0) {
            setError("لطفاً همه فیلدها را پر کنید.");

            setTimeout(() => {
                setError("");
            }, 3000);

        } else {

            postDatas();

        }

        setDataForPost({
            image: null,
            title: "",
            reading: "",
            text: ""
        });

    }

    async function postDatas() {
        try {

            await axios.post("http://localhost:3000/articles", dataForPost)

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Menu title={menuConfigs.title} subtitle={menuConfigs.subtitle} />

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.container}>
                {articleConfigs.map(data => <Input key={data.id} configs={data} handler={inputsHandler} value={dataForPost[data.name]} />)}
                <div className={styles.images}>
                    <h3>انتخاب عکس:</h3>
                    {images.map((image) => (
                        <button
                            key={image}
                            type="button"
                            className={styles.imageButton}
                            onClick={() => selectImage(image)}
                        >
                            <img
                                src={image}
                                alt=""
                                className={`${styles.image} ${dataForPost.image === image ? styles.select : ""}`}
                            />
                        </button>
                    ))}
                </div>
                <button className={styles.submitButton} onClick={submit}>ثبت اطلاعات</button>
                <BackButton />
            </div>
            <Footer footerConfigs={footerConfigs} />
        </>
    );
}

export default CreateArticle;