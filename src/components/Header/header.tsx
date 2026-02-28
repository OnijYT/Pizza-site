import styles from './header.module.css'
import React, { useState } from 'react'
import logo from './img/pizzashop.svg'

interface items {
    id: number
    name: string
    href: string
}

const Header = () => {
    const [active, setActive] = useState<number>(0)

    const menuitems: items[] = [
        { id: 0, name: 'Home', href: '#home' },
        { id: 1, name: 'Menu', href: '#menu'},
        { id: 2, name: 'Events', href: '#events'},
        { id: 3, name: 'About us', href: '#about'},
    ]

    return (
        <header className={styles.header}>
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
                <a href="" className={styles.btn}>Log in</a>
            </div>
        </header>
    )
}

export default Header