import React from 'react';
import './information.styles.scss';

import { useTranslation } from 'react-i18next';

const Information = () => {
  const {t} = useTranslation()

  return (
    <div className="info-page">
      <div className="container container1">
        <h1 className="title">{t('Information')}</h1>
        <p className="description">{t('Hello everyone, I would like to tell you a little bit about myself. I graduated from Kocaeli University with a degree in Political Science and Public Administration. In the early years of my student life, I focused on developing myself for administrative positions. However, my journey into programming, which started as a hobby towards the end of my student years, has turned into a passion rather than just a hobby. In order to improve myself in this field, I have completed numerous courses and participated in several bootcamps. I have developed myself in various languages such as Python, Blockchain technology, Flutter, and most recently, JavaScript. Currently, a significant portion of my interest and focus is on JavaScript. I started this journey by working on small projects, and over time, I gained proficiency in libraries and expanded my skills to include developing corporate websites. However, the software industry is a constantly evolving and rapidly changing sector, which means that developers need to continuously update and adapt. I strive to continuously improve myself in order to keep up with the latest advancements. I am a front-end developer aiming to build a career in this field. I hope our paths will cross somewhere along the way.')}</p>
      </div>

      <div className="container container4">
        <h1 className="section-title">{t('Skills and Technologies')}</h1>
        <ul className="skills-list">
          <li>JavaScript</li>
          <li>Python</li>
          <li>Flutter</li>
          <li>Vue.js</li>
          <li>HTML5</li>
          <li>SCSS</li>
          <li>React</li>
          <li>Redux</li>
          <li>{t("...and many of them")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Information;

