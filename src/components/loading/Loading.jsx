import styles from "./Loading.module.css";


function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loading}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Loading;