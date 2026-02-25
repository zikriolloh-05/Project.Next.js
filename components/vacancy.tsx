import { useTranslations } from "next-intl"
import styles from './Navbar.module.css';
import footerLogo from '../../../public/logotip.svg';
import Link from "next/link";


const Vacancy = () => {
    const t = useTranslations("HomePage");
    const navigat = useTranslations('Navigation');
    const vacanc = useTranslations('VacancyPagy');

    return (
        <>
            <div className={styles.vacancyPage}>
                <h2 className={styles.h2_textVacancy}>{vacanc('vacancy_slova')}</h2>
                <div>
                    <div>
                         {/* <h3>{vacanc('vacancy.job')}</h3>
                         <p></p> */}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Vacancy;