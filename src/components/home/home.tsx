import React, { useState } from "react";
import styles from './home.module.css'
import titleflash from './img/flash.svg'
import pizza from './img/pizza.svg'
import pizzavideo from './img/pizzavideo.svg'

interface item {
        id: number
        name: string
    }

function Home() {
    const [active, setActive] = useState<number>(0)
    const btnitems: item[] = [
        {id: 0, name: 'To order',},
        {id: 1, name: 'Pizza-Menu',}
    ]

    return (
        <div className={styles.container}>
            <div className={styles.titlecon}>
                <h1 className={styles.title}>
                    The Fastest Pizza <img src={titleflash} alt="" /> Delivery
                </h1>
                <p className={styles.undertitle}>We will deliver juicy pizza for your family in 30 minutes, if the courier is late - pizza is free!</p>
                <p className={styles.underp}>
                    Cooking process:
                </p>
                <img src={pizzavideo} alt="" />
                <div className={styles.conundervideo}>
                    {btnitems.map((items, i) => (
                        <button
                        key={items.id}
                        className={`${styles.btnp} ${active === i ? styles.activebtn : ''}`}
                        onClick={() => setActive(i)}
                        >
                            {items.name}
                        </button>
                    ))}   
                </div>
                
            </div>
            <div className={styles.imgneartitle}>
                <img src={pizza} alt='' />
            </div>
             
        </div>
    )
}

export default Home