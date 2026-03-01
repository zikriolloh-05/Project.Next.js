"use client"
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import logo from "../public/logotip.svg";
import Image from "next/image";
import styles from './Navbar.module.css';
import { Button, Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import flagRu from '../public/ru.svg';
import flagEn from '../public/en.svg';
import flagTg from '../public/tg.svg';
import PhotoDot from '../public/dot.svg'
import { SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';



const Navbar = ({ locale }: { locale: string }) => {

  const languages = [
    {
      code: 'ru',
      name: 'Русский',
      flag: flagRu,
    },
    {
      code: 'en',
      name: 'English',
      flag: flagEn
    },
    {
      code: 'tg',
      name: 'Тоҷикӣ',
      flag: flagTg,
    },
    // {
    //   code: 'uz',
    //   name: "O'zbekcha",
    //   flag: flagUz,
    // }
  ];

  const [current, setCurrent] = useState('setting:1');

  const navigat = useTranslations('Navigation');
  const portfol = useTranslations('PortfolioPage');
  const Service = useTranslations('ServicesPage');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const dotMenuItems: MenuProps['items'] = [
    {
      key: 'home',
      label: navigat('home'),
      onClick: () => scrollToSection('home-cection')
    },
    {
      key: 'services',
      label: Service('Services:text'),
      onClick: () => scrollToSection('contact-section')
    },
    {
      key: 'portfolio',
      label: portfol('Portfolio_text'),
      onClick: () => scrollToSection('portfolio-section')
    },
    {
      key: 'about',
      label: navigat('about'),
      onClick: () => scrollToSection('about-section')
    }
  ];


  const languageMenuItems: MenuProps['items'] = languages
    .filter(lang => lang.code !== locale)
    .map((lang) => ({
      key: lang.code,
      label: (
        <div
          className={styles.dropdownItem}
          onClick={() => {
            setValue(lang.code);
            router.push(`/${lang.code}${pathname.replace(/^\/[a-z]{2}/, '')}`);
          }}
        >
          <span style={{ marginRight: '7px' }}>
            <Image
              src={lang.flag}
              alt={lang.name}
              width={20}
              height={15}
            />
          </span>
          <span>{lang.name}</span>
        </div>
      ),
    }));

  const [value, setValue] = useState(locale);
  const router = useRouter();
  const pathname = usePathname();



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

  // const currentLanguage = languages.find(lang => lang.code === locale);
  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logoStyle}>
          <Image
            width={40}
            height={40}
            src={logo}
            style={{ borderRadius: "30%" }}
            alt="" />
          <h2 className={styles.navbar}>Idea reality</h2>
          <div className={styles.textNavigations}>
            <p className={styles.textHome} onClick={() => scrollToSection('home-cection')}>{navigat('home')}</p>
            <p className={styles.textHome} onClick={() => scrollToSection('contact-section')} >{Service('Services:text')}</p>
            <p className={styles.textHome} onClick={() => scrollToSection('portfolio-section')} >{portfol('Portfolio_text')}</p>
            <p className={styles.textHome}
              onClick={() => scrollToSection('about-section')}
            >{navigat('about')}</p>
            {/* <p className={styles.textHome} onClick={()=>scrollToSection('vacancy-section')} >{vacanc('vacancy_slova')}</p> */}
          </div>
        </div>

        <div className={styles.languageContainer}>
          <Dropdown
            menu={{ items: languageMenuItems }}
            trigger={['hover']}
            placement="topRight"

          >
            <button className={styles.languageButton}>
              <Image
                src={currentLanguage?.flag}
                alt={currentLanguage?.name ?? 'language'}
                width={20}
                height={15}
                style={{ marginRight: '6px' }}
              />
              <span>{currentLanguage?.name}</span>
            </button>
          </Dropdown>
          <Dropdown
            menu={{ items: dotMenuItems }}
            trigger={['click']}
            placement="bottomRight"
          >
            <Image
              className={styles.Bars}
              src={PhotoDot}
              width={10}
              height={10}
              alt="menu"
              style={{ cursor: 'pointer' }}
            />
          </Dropdown>
        </div>

      </nav>
    </>
  );
}
export default Navbar;