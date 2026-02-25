// "use client";
import { useTranslations } from "next-intl"
import styles from './Navbar.module.css';
import PhotoWeb from '../public/web.png';
import PhotoBack from '../public/back.svg';
import Image from "next/image";

const Contact = () => {
    const services = useTranslations('ServicesPage');

    return (
        <>
            <div className={styles.PortfolioPage}>
                <h2 className={styles.TextSevvices}>{services('Services:text')}</h2>

                <div className={styles.DivFullServices}>
                    
                    {/* Первая карточка - Web Development */}
                    <div className={styles.divServices}>
                        <div className={styles.divServicesInner}>
                            <div className={styles.divServices_front}>
                                <h3>{services('Services:WebDevelopment')}</h3>
                                <Image
                                    src={PhotoWeb}
                                    alt="web development"
                                    width={300}
                                    height={100}
                                />
                            </div>
                            <div className={styles.divServices_back}>
                                <h3>{services('Services:WebDevelopment')}</h3>
                                <p>HTML5, CSS3, JavaScript, React, Next.js, TypeScript, Vue.js, Angular</p>
                            </div>
                        </div>
                    </div>

                    {/* Вторая карточка - Backend Development */}
                    <div className={styles.divServices}>
                        <div className={styles.divServicesInner}>
                            <div className={styles.divServices_front}>
                                <h3>{services('Services:BackendDevelopment')}</h3>
                                <Image
                                    src={PhotoBack}
                                    alt="backend development"
                                    width={300}
                                    height={100}
                                />
                            </div>
                            <div className={styles.divServices_back}>
                                <h3>{services('Services:BackendDevelopment')}</h3>
                                <p>Node.js Python Java PHP C#/.NET Go</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;