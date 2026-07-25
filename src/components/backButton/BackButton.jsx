import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";
import { ArrowBigLeft } from "lucide-react";

function BackButton() {

    const navigate = useNavigate();
    return (
        <button className={styles.backButton} onClick={() => navigate("/")}>
            <ArrowBigLeft /> بازگشت
        </button>
    );
}

export default BackButton;