import React, { useState } from 'react'
import styles from './Navbar.module.css'
import getImageUrl from '../../utils'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        // <nav> is a semantic HTML tag.
        // A semantic tag behaves like a normal <div> tag
        // but has a special name that lets the browser know what its function is.

        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                <img
                    className={styles.logo}
                    src={getImageUrl('nav/logo.png')}
                    alt="AKK logo"
                />
            </a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl('nav/closeIcon.png')
                            : getImageUrl('nav/menuIcon.png')
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItem} ${
                        menuOpen && styles.menuOpen
                    }`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
