import React from 'react'
import getImageUrl from '../../utils'
import styles from './Hero.module.css'
const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}> Hi, I'm Abishka</h1>
                <p className={styles.description}>
                    I am in my last semester of college majoring in Big Data and
                    Business Analytics and minoring in Computer Information
                    Systems (CIS). Reach out if you'd like to connect with me!
                </p>
            </div>
            {/* <img
                src={getImageUrl('hero/profile.jpg')}
                alt="Image of me"
                className={styles.img}
            /> */}
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero
