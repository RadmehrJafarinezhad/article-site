import styles from "./Card.module.css";
import * as Icons from "lucide-react"

function Card({ card }) {

    const Icon = Icons[card.image];


    return (
        <div className={`${styles.container} ${card.status ? styles.withGap : styles.withoutGap}`}>
            {card.status ? (
                <Icon size={50} />
            ) : (<img className={styles.image} src={card?.image} alt="img1" />)}
            <h3>{card?.title}</h3>
            {card.reading && (<p>مدت زمان خواندن: {card?.reading} دقیقه</p>)}
            {card.info && (<p>{card.info}</p>)}
        </div>
    );
}

export default Card;