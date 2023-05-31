import React from 'react';
import { Link } from 'react-router-dom';
import {  FaPhone, FaEnvelope, FaLinkedinIn,FaGithub } from 'react-icons/fa';
import './footer.styles.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const {t} = useTranslation()
  

  const handlePhoneClick = (event) => {
    event.preventDefault();
    window.location.href = 'tel:0553 879 29 57';
  };
  
  const handleEmailClick = (event) => {
    event.preventDefault();
    window.location.href = 'Mailto: frkntopall@outlook.com';
  };
  const handleLinkedinClick = (event) => {
    event.preventDefault();
    window.open('https://www.linkedin.com/in/furkan-topal-0002bb200/', '_blank');
  };
  const handleGithubClick = (event) => {
    event.preventDefault();
    window.open('https://github.com/frkntopal', '_blank');
  };


  return (
    <div className='main-wrapper'>
      <footer>
        <ul className="social_icons">
          <li><a href="#" onClick={handleLinkedinClick}><FaLinkedinIn /></a></li>
          <li><a href="#" onClick={handleGithubClick}><FaGithub /></a></li>
          <li><a href="#" onClick={handlePhoneClick}><FaPhone /></a></li>
          <li><a href="#" onClick={handleEmailClick}><FaEnvelope /></a></li>
        </ul>
        <ul className="menu">
          <li><Link to="/projects">{t('Projects')}</Link></li>
          <li><Link to="/contact">{t('Contact')}</Link></li>
          <li><Link to="/information">{t('Information')}</Link></li>
        </ul>
        <p>
           <strong>©2023 {t("The Front End Developer's Page")} | {t('All Rights Reserved')}</strong>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
