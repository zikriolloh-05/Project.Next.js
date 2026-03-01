"use client";

import { useTranslations } from "next-intl"
import styles from './Navbar.module.css';
import footerLogo from '../public/logotip.svg';
import footerInstagram from '../public/instagram.svg';
import footerWhatsup from '../public/whatsup.svg';
import footerTelegram from '../public/telegram.svg';
import Link from "next/link";
import { useEffect } from "react";



const Footer = () => {
    const t = useTranslations("HomePage");
    const navigat = useTranslations('Navigation');
    const portfol = useTranslations('PortfolioPage');
    const footer_text = useTranslations("Footer_f");
    const services = useTranslations('ServicesPage');


    useEffect(() => {
        // Проверяем все элементы с ID на странице
        const allElements = document.querySelectorAll('[id]');
        console.log('All elements with IDs:', Array.from(allElements).map(el => el.id));

        // Дополнительно проверяем конкретные ID
        console.log('Home section exists:', document.getElementById('home-section') ? 'Yes' : 'No');
        console.log('About section exists:', document.getElementById('about-section') ? 'Yes' : 'No');
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log(`Section with id ${sectionId} not found`); // Добавьте это для отладки
        }
    };


    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_display_flex}>
                    <div className={styles.footer_forMedia}>
                        <img src={footerLogo} alt="" />
                        <h2 className={styles.navbar}>Idea reality</h2>
                    </div>
                    <div className={styles.footer_forMedia} style={{ fontSize: '18px', }}>
                        <h2 className={styles.textH2Minasosetyax}>{footer_text('footer_contact')}</h2>
                        <p className={styles.FoterMtop}>+992  909 050 409</p>
                        <p className={styles.FoterMtop}> t.me/Zikriolloh_05</p>
                        <p className={styles.FoterMtop}>sharipovzikriolloh28@gmail.com</p>

                    </div>
                    <div className={styles.footer_forMedia} style={{ fontSize: '18px' }}>
                        <h2 className={styles.textH2Minasosetyax}>{footer_text('footer_nashsakampaniya')}</h2>
                        <p className={styles.FoterMtop} onClick={() => scrollToSection('about-section')}>{navigat('about')}</p>
                        <p className={styles.FoterMtop} onClick={() => scrollToSection('portfolio-section')}>{portfol('Portfolio_text')}</p>
                        <p className={styles.FoterMtop} onClick={() => scrollToSection('contact-section')}>{services('Services:text')}</p>

                    </div>

                    {/* <div style={{ fontSize: '18px' }}>
                        <h2 className={styles.textH2Minasosetyax}>{footer_text('footer_page')}</h2>
                        <img src={footerWhatsup} alt="" />
                        <img src={footerTelegram} alt="" />
                        <img src={footerInstagram} alt="" />
                        
                    </div> */}
                </div>
            </footer>
            <h3 style={{ color: 'black', 'textAlign': 'center' }}>{footer_text('footer:AllRightsReserved')}</h3>

        </>
    )
}

export default Footer;
