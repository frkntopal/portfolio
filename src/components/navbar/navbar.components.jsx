import './navbar.styles.scss';
import { useState } from 'react';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Navbar() {
  const { t, i18n } = useTranslation()

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
        <ul className="links">
          <li>
            <Link to="/projects">{t('Projects')}</Link>
          </li>
          <li>
            <Link to="/contact">{t('Contact')}</Link>
          </li>
          <li>
            <Link to="/information">{t('Information')}</Link>
          </li>
        </ul>
        <div className="toggle_btn" onClick={toggleDropdown}>
          <i className="material-symbols-outlined">legend_toggle</i>
        </div>
        <div className={`dropdown_menu ${dropdownOpen ? 'open' : ''}`}>
          <Link className="dropdownmenu_content" to="/projects">
            {t('Projects')}
          </Link>
          <Link className="dropdownmenu_content" to="/contact">
            {t('Contact')}
          </Link>
          <Link className="dropdownmenu_content" to="/information">
            {t('Information')}
          </Link>
          
        </div>
        <div className="checkbox-wrapper-55">
          <label className="rocker rocker-small">
            <input type="checkbox"/>
            <span onClick={()=> changeLanguage('tr')} className="switch-left">TR</span>
            <span onClick={()=> changeLanguage('en')} className="switch-right">EN</span>
        </label>
      </div>
        {/* <div className="language_btn">
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('tr')}>TR</button>
        </div> */}
      </div>
    </header>
  );
}

export default Navbar;
