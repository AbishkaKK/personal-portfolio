import React from 'react'
import getImageUrl from '../../utils'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img
                        src={getImageUrl('contact/emailIcon.png')}
                        alt="Email icon"
                    />
                    <a href="mailto:abishkakrishnakumar@gmail.com">
                        abishkakrishnakumar@gmail.com
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl('contact/linkedinIcon.png')}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/abishka-krishna-kumar/">
                        linkedin.com/abishka-krishna-kumar
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl('contact/githubIcon.png')}
                        alt="GitHub icon"
                    />
                    <a href="https://github.com/AbishkaKK">
                        github.com/AbishkaKK
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact
