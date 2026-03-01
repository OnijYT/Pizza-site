import React from "react";
import styles from "./events.module.css"
import Eventscart from "./eventscart/eventscart";
import p1 from './img/Rectangle 10.svg'
import p2 from './img/Rectangle 11.svg'

function Events() {
    const eventscarts = [
        {id: 0, img: p1, title: "HOW WE COOKING", buton: "More"},
        {id: 1, img: p2, title: "OUR BLOG", buton: "More"}
    ]

    return (
    <div className={styles.container}>
        <div className={styles.containereventscart}>
            {eventscarts.map((obj) => (
                <Eventscart
                    key={obj.id}
                    title={obj.title}
                    buton={obj.buton}
                />
            ))}
        </div>
    </div>
    )
}

export default Events