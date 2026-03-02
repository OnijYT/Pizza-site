import React from "react";
import styles from "./events.module.css"
import Eventscart from "./eventscart/eventscart";
import p1 from './img/Rectangle 10.svg'
import p2 from './img/Rectangle 11.svg'
import p3 from './img/alex-haney-CAhjZmVk5H4-unsplash 1.svg'
import p4 from './img/Rectangle 9.png'
import p5 from './img/p1.svg'
import p6 from './img/p2.svg'
import p7 from './img/p3.svg'



function Events() {
    const eventscarts = [
        {id: 0, img: p1, title: "HOW WE COOKING", buton: "More"},
        {id: 1, img: p2, title: "OUR BLOG", buton: "More"},
    ]

    const eventscarts2 = [
        {id: 0, img: p3, title: "TWO PIZZA FOR 1 PRICE", buton: "More"},
        {id: 1, img: p4, title: "KITCHEN TOUR", buton: "More"},
    ]

    const eventscarts3 = [
        {id: 0, img: p5, title: "FREE COFFEE FOR 3 PIZZA", buton: "More"},
        {id: 1, img: p6, title: "OUR INSTAGRAM", buton: "More"},
        {id: 2, img: p7, title: "WHERE ARE YOU CHOOSE US?", buton: "More"}
        
    ]

    return (
    <div className={styles.container}>
        <div className={styles.containereventscart}>
            {eventscarts.map((obj) => (
                <Eventscart
                    key={obj.id}
                    title={obj.title}
                    buton={obj.buton}
                    img={obj.img}
                />
            ))}
            <div className={styles.eventstitle}>
                <h1 className={styles.eventsrightitle}>Events</h1>
                <span>There are regular events in our pizzeria that will allow you to eat delicious food for a lower price!</span>
            </div>
            
        </div>
        <div className={styles.containereventscartcenter}>
            {eventscarts2.map((obj) => (
                <Eventscart
                    key={obj.id}
                    title={obj.title}
                    buton={obj.buton}
                    img={obj.img}
                />
            ))}
        </div>
         <div className={styles.containereventscartbottom}>
            {eventscarts3.map((obj) => (
                <Eventscart
                    key={obj.id}
                    title={obj.title}
                    buton={obj.buton}
                    img={obj.img}
                />  
            ))}
        </div>
    </div>
    )
}

export default Events