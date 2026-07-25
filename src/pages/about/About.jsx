import Menu from "../../components/header/Menu";
import Footer from "../../components/footer/Footer";
import styles from "./About.module.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import Loading from "../../components/loading/Loading";
import Card from "../../components/card/card";
import axios from "axios";
import BackButton from "../../components/backButton/BackButton";

function About({ children }) {

    const [cardConfigs, setCardConfigs] = useState([]);

    useEffect(() => {
        async function getDatas() {
            try {

                const aboutUsRes = await axios.get("http://localhost:3000/aboutUs")

                setCardConfigs(aboutUsRes.data);
            } catch (error) {
                console.error(error)
            }
        }

        getDatas();
    },[])


    const {menuConfigs, footerConfigs} = useContext(DataContext);
    if (!menuConfigs || !footerConfigs) {
        return <Loading/>
    }

    return (
        <div>
            <Menu title={menuConfigs.title} subtitle={menuConfigs.subtitle} />
            <div className={styles.container}>
                <h1>درباره ما</h1>
                <br />
                <p>رادمهر بلاگ با هدف آموزش، یادگیری و به‌اشتراک‌گذاری دانش در زمینه برنامه‌نویسی، طراحی وب، هوش مصنوعی و فناوری‌های نوین ایجاد شده است. در این وب‌سایت تلاش می‌شود مطالب آموزشی به زبانی ساده، کاربردی و همراه با مثال‌های عملی ارائه شوند تا علاقه‌مندان بتوانند مسیر یادگیری خود را با اطمینان بیشتری ادامه دهند. از آموزش مفاهیم پایه گرفته تا پروژه‌های عملی، بررسی ابزارهای جدید، معرفی کتاب‌ها و منابع آموزشی و نکات مربوط به توسعه نرم‌افزار، همگی با هدف ارتقای دانش برنامه‌نویسان و علاقه‌مندان به دنیای فناوری منتشر می‌شوند. اعتقاد ما بر این است که یادگیری برنامه‌نویسی تنها به حفظ کردن دستورات محدود نمی‌شود، بلکه با تمرین، تجربه و ساخت پروژه‌های واقعی معنا پیدا می‌کند. به همین دلیل، بخش زیادی از مطالب این وبلاگ بر حل مسئله، توسعه پروژه‌های کاربردی و آشنایی با استانداردهای روز صنعت نرم‌افزار تمرکز دارد. امیدواریم رادمهر بلاگ بتواند منبعی مفید برای دانش‌آموزان، دانشجویان و تمامی افرادی باشد که علاقه‌مند به رشد و پیشرفت در مسیر برنامه‌نویسی و فناوری هستند.
                </p>
                <div className={styles.cardsContainer}>
                    {cardConfigs.map(items => (
                        <Card key={items.id} card={items} />
                    ))}
                </div>
                <BackButton />
            </div>
            <Footer footerConfigs={footerConfigs} />
        </div>
    );
}

export default About;
