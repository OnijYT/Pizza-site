import React from "react";
import styles from "./eventscart.module.css"

interface props {
    img: string
    title: string
    buton: string
}

const Eventscart: React.FC<props> = ({img, title, buton}) => {

    return(
        <div className={styles.eventscarrtimg}>
            <img src={img} alt={title} />
            <div className={styles.eventstitle}>
                <h2 className={styles.eventscarttitle}>{title}</h2>
                <button className={styles.eventscartbtn}>{buton}</button>
            </div>
        </div>
    )
}

export default Eventscart