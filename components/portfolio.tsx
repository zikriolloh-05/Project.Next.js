import { useTranslations } from "next-intl"
import styles from './Navbar.module.css';
import footerLogo from '../../../public/logotip.svg';
import Link from "next/link";
import photoEmail from '../public/image copy.png'
import Image from "next/image";
import adminPanel from '../public/adminPanel.png';


const Portfolio = () => {
    const t = useTranslations("HomePage");
    const navigat = useTranslations('Navigation');
    const vacanc = useTranslations('VacancyPagy');
    const portfol = useTranslations('PortfolioPage');

    return (
        <>
            <div className={styles.PortfolioPage}>
                <h2 className={styles.h2_textVacancy}>{portfol('Portfolio_text')}</h2>
                <div className={styles.Div_ful_portfolio}>
                    <div className={styles.divImagePortfolio}>
                        <Link href="https://exam-4-react-2.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <Image src={adminPanel} alt="web" width={700} height={400} />
                        </Link>
                    </div>
                    <div className={styles.divImagePortfolio}>
                        <Link href="https://exam-4-react-2.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <Image src={adminPanel} alt="web" width={700} height={400} />
                        </Link>
                    </div>
                </div>
                <div className={styles.Div_ful_portfolio}>
                    <div className={styles.divImagePortfolio}>
                        <Link href="https://exam-4-react-2.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <Image src={adminPanel} alt="web" width={700} height={400} />
                        </Link>
                    </div>
                    <div className={styles.divImagePortfolio}>
                        <Link href="https://exam-4-react-2.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <Image src={adminPanel} alt="web" width={700} height={400} />
                        </Link>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Portfolio;