import './navbar.styles.scss';
import { useState } from 'react';
import Logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        {!location.pathname.includes('/blog/') && (
          <>
            <ul className="links">
              <li>
                <a href="#projects">{t('Projects')}</a>
              </li>
              <li>
                <a href="#contact">{t('Contact')}</a>
              </li>
              <li>
                <a href="#information">{t('Information')}</a>
              </li>
            </ul>
            <div className="toggle_btn" onClick={toggleDropdown}>
              <i className="material-symbols-outlined">legend_toggle</i>
            </div>
            <div className={`dropdown_menu ${dropdownOpen ? 'open' : ''}`}>
              <a className="dropdownmenu_content" href="#projects">
                {t('Projects')}
              </a>
              <a className="dropdownmenu_content" href="#contact">
                {t('Contact')}
              </a>
              <a className="dropdownmenu_content" href="#information">
                {t('Information')}
              </a>
            </div>
            <div className="checkbox-wrapper-55">
              <label className="rocker rocker-small">
                <input type="checkbox"/>
                <span onClick={()=> changeLanguage('tr')} className="switch-left">TR</span>
                <span onClick={()=> changeLanguage('en')} className="switch-right">EN</span>
              </label>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
