"use client"

import Image from "next/image";
import Navbar from "../../components/navbar";
import Home from "../../components/home";
import styles from '../../components/Navbar.module.css';
import Link from "next/link";
import { useTranslations } from "next-intl";
import AboutPage from "../../components/about";
import Portfolio from "../../components/portfolio";
import Contact from "../../components/contact";
const Page = () => {
  const t = useTranslations("HomePage");
  const navigat = useTranslations('Navigation');


  return (
    <div className="">
      <div id="home-cection">
        <Home />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
      <div id="portfolio-section">
        <Portfolio />
      </div>
      <div id="about-section">
        <AboutPage />
      </div>

    </div>
  );
}

export default Page;
