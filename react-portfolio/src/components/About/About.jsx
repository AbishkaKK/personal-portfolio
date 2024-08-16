import React from 'react'
import getImageUrl from '../../utils'
import styles from './About.module.css'
const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl('about/aboutImage.png')}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl('about/student.png')}
                            alt="Student icon"
                            className={styles.listImage}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Student</h3>
                            <p>
                                I am a Senior at the University of Central
                                Missouri. I am majoring in Big Data and Business
                                Analytics and minoring in Computer Information
                                Systems. I have a GPA of 3.86.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl('about/intern.png')}
                            alt="Intern icon"
                            className={styles.listImage}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>UI SWE Intern</h3>
                            <p>
                                I interned as a User Interface Software Engineer
                                in Summer 2024. In my time as an intern, I
                                developed user interface components using HTML,
                                CSS, JavaScript, and React. I deepened my
                                understanding of Agile practices and improved my
                                ability to collaborate effectively with
                                cross-functional teams.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl('about/tutor.png')}
                            alt="Tutor icon"
                            className={styles.listImage}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Tutor</h3>
                            <p>
                                I tutor SQL, C#, Microsoft Office, and Business
                                Statistics to 20 undergraduates weekly, helping
                                students achieve academic success through
                                tailored guidance and effective communication.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
