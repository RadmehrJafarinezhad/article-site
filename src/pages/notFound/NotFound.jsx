import styles from "./NotFound.module.css";
import { Link} from "react-router";
import { ArrowBigLeft, TriangleAlert } from "lucide-react";
import { useContext } from "react";
import { DataContext } from "../../App";
import Footer from "../../components/footer/Footer";
import Menu from "../../components/header/Menu";
import Loading from "../../components/loading/Loading";
import BackButton from "../../components/backButton/BackButton";

function NotFound() {

    const { menuConfigs, footerConfigs } = useContext(DataContext);

    if (!menuConfigs || !footerConfigs) {
        return <Loading />
    }

    return (
        <>
            <Menu title={menuConfigs.title} subtitle={menuConfigs.subtitle} />
            <div className={styles.container}>
                <TriangleAlert size={80} color="#f59e0b" />

                <h1>404</h1>

                <p>صفحه مورد نظر پیدا نشد.</p>
                <BackButton />
            </div>
            <Footer footerConfigs={footerConfigs} />
        </>
    );
}

export default NotFound;