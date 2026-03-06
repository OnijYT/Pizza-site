import styles from './header.module.css'
import React, { useEffect, useState } from 'react'
import logo from './img/pizzashop.svg'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

interface itemsh {
    id: number
    name: string
    href: string
}

const Header = () => {
    const [active, setActive] = useState<number>(0)

    const menuitems: itemsh[] = [
        { id: 0, name: 'Home', href: '#home' },
        { id: 1, name: 'Menu', href: '#menu'},
        { id: 2, name: 'Events', href: '#events'},
        { id: 3, name: 'About us', href: '#about'},
    ]

    const {items, totalprice} = useCart()

    const [isscroll, setIsscroll] = useState(false)

    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY > 50) {
                setIsscroll(true)
            }
            else {
                setIsscroll(false)
            }
        }

        window.addEventListener('scroll', handlescroll);
        return () => window.removeEventListener('scroll', handlescroll)
    }, [])

    const [isopen, setisopen] = useState(false)

    return (
        <header className={isscroll ? styles["header-small"] : styles["header-big"]}>
            <div className={styles.container}>
                <a href="#home"><img src={logo} alt="logo" className={styles.logo}/></a>
                <nav className={styles.nav}>
                    <ul className={styles.header__list}>
                        {menuitems.map((items, index) => (
                            <li key={items.id}>
                                <a href={items.href}
                                className={active === index ? styles.active : ''}
                                onClick={() => setActive(index)}
                                >
                                    {items.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button onClick={() => setisopen(true)} className={styles.btn}>Log in</button>

                {isopen && (
                    <div className={styles.modaloverlay} onClick={() => setisopen(false)}>
                        <div className={styles.modalcontent} onClick={(e) => e.stopPropagation()}>
                            <div className={styles.titlelogin}><h2>Log in</h2></div>
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <button className={styles.Loginsub}>Log in</button>
                            <button className={styles.close} onClick={() => setisopen(false)}>✕</button>
                        </div>
                    </div>
                )}

                <Link to="/cart" className={styles.cartBtn}>
                    <span>{totalprice.toFixed(2)} $</span>
                    <div className={styles.delimiter}></div>
                    <span>🛒 {items.length}</span>
                </Link>
            </div>
        </header>
    )
}

export default Header