import React, { useState } from "react";
import styles from './menu.module.css'
import Pizzacards from "./pizzacards/Pizzacards";
import p1 from './pizzacards/img/p1.svg'
import p2 from './pizzacards/img/p2.svg'
import p3 from './pizzacards/img/p3.svg'
import p4 from './pizzacards/img/p4.svg'
import p5 from './img/Group 54.svg'


interface item {
    id: number
    name: string
    href: string
}


function Menu() {

    const [active, setActive] = useState<number>(0)

    const btnname: item[] = [
        {id: 0, name: 'Show All', href: ''},
        {id: 1, name: 'Meat', href: ''},
        {id: 2, name: 'Vegetarian', href: ''},
        {id: 3, name: 'Sea product', href: ''},
        {id: 4, name: 'Mushroom', href: ''}
    ]

    const pizzas = [
        {id: 0,title: 'Italian', description: 'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...', sizes:[22, 28, 33], price: [8.35, 10.50, 12.90], img:p1},
        {id: 1,title: 'Venecia', description: 'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...', sizes:[22, 28, 33], price: [7.35, 10.50, 12.90], img:p2},
        {id: 2,title: 'Meat', description: 'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...', sizes:[22, 28, 33], price: [9.35, 10.50, 13.90], img:p3},
        {id: 3,title: 'Cheese', description: 'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...', sizes:[22, 28, 33], price: [8.35, 10.50, 13.90], img:p4},
    ]

    const pizzascard2 = [
        {id: 4,title: 'Argentina', description: 'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...', prices: [8.35, 10.50, 12.90], price: 7.35, img:p4},
        {id: 5,title: 'Gribnaya', description: 'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...', sizes:[22, 28, 33], price: [7.35, 10.50, 12.90], img:p4},
        {id: 6,title: 'Tomato', description: 'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...', sizes:[22, 28, 33], price: [9.35, 10.50, 13.90], img:p4},
        {id: 7,title: 'Italian x2', description: 'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...', sizes:[22, 28, 33], price: [8.35, 10.50, 13.90], img:p4},
    ]

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Menu</h1>
                <div className={styles.undertitlebtn}>
                    {btnname.map((items, index) => (
                        <button
                        key={items.id}
                        className={`${styles.searchbtn} ${active === index ? styles.btnactive : ''}`}
                        onClick={() => setActive(index)}
                        >{items.name}</button>
                    ))}
                </div>
                <div className={styles.containerpizzacardcontainer}>
                    {pizzas.map((obj) => (
                        <Pizzacards
                            key={obj.id}
                            title={obj.title}
                            description={obj.description}
                            sizes={obj.sizes}
                            img={obj.img}
                            price={obj.price}
                        />
                    ))}
                </div>
                <div className={styles.imgpizzab}>
                    <img src={p5} alt="" />
                </div>
                <div className={styles.containerpizzacardcontainer2}>
                    {pizzas.map((obj) => (
                        <Pizzacards
                            key={obj.id}
                            title={obj.title}
                            description={obj.description}
                            sizes={obj.sizes}
                            img={obj.img}
                            price={obj.price}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Menu