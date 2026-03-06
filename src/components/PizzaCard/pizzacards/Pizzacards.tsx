import styles from './pizzacards.module.css'
import React, { useState } from 'react'
import { useCart } from '../../../context/CartContext'


interface props {
    description: string
    img: string
    price: number[]
    title: string
    sizes: string[]
    id: number
}

const Pizzacards: React.FC<props> = ({id, description, img, price, title, sizes}) => {

    const [activesize, setActivesize] = useState<number>(0)

    const [count, setCount] = useState<number>(1)

    const totalprice = (price[activesize] * count).toFixed(2)

    const pluscount = () => setCount(prev => prev + 1)
    const minuscount = () => {
        if (count > 1 ) setCount(prev => prev - 1)
    }

    const { addtocart } = useCart()

    const onclickbtn = () => {
        const item = {
            id,
            title,
            price: price[activesize],
            size: sizes[activesize],
            count,
            img,
        }

        addtocart(item)

        alert(`Addet to cart: ${title} (${sizes[activesize]}cm)`)
    }


    return (
        <div className={styles.containercards}>
            <div className={styles.imgontitle}>
                <img className={styles.imgpizza} src={img} alt={title} />
            </div>
            <div className={styles.cards}>
                <h2 className={styles.titlecard}>
                    {title}
                </h2>
            </div>
            <div className={styles.undertitle}>
                <p className={styles.undtitp}>
                    {description}
                </p>
            </div>
            <div className={styles.sizes}>
                {sizes.map((size, index) => (
                    <button
                    key={index}
                    className={`${styles.sizebtn} ${activesize === index ? styles.sizeactivebtn : ''}`}
                    onClick={() => setActivesize(index)}
                    >{size}</button>
                ))}
            </div>
            <div className={styles.ingridents}>
                <button className={styles.btningridents}>+ Ingridients</button>
            </div>
            <div className={styles.priceflex}>
                <span className={styles.orgprice}>{totalprice} $</span>
                <div className={styles.counter}>
                    <button onClick={minuscount}>-</button>
                    <span>{count}</span>
                    <button onClick={pluscount}>+</button>
                </div>
            </div>
            <div className={styles.order}>
                <button onClick={onclickbtn} className={styles.ordern}>Order Now</button>
            </div>
        </div>
    )
}

export default Pizzacards