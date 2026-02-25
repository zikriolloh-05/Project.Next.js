// Страница "О нас"
import { useTranslations } from 'next-intl';
import styles from './Navbar.module.css';
import { useEffect, useRef } from 'react';

const AboutPage = () => {
    const t = useTranslations("AboutPage");
    const about = useTranslations("Navigation");
    const textRef = useRef(null);
    

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.active);
                }
            });
        }, { threshold: 0.5 });

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.about_page}>
            <h2 className={styles.TextSevvices}>{about('about')}</h2>
            <p 
                // ref={textRef}
                className={styles.abouts_text}
            >
                {t('about_text')}
            </p>
        </div>
    );
}

export default AboutPage;