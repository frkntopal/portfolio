import './navbar.styles.scss';
import { useState } from 'react';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
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
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
      
          <li>
            <Link to="/information">Information</Link>
          </li>

        </ul>
        <div className="toggle_btn" onClick={toggleDropdown}>
          <i className="material-symbols-outlined">legend_toggle</i>
        </div>
      </div>
      <div className={`dropdown_menu ${dropdownOpen ? 'open' : ''}`}>
      <Link className="dropdownmenu_content" to="/projects">
          Projects
        </Link>
        <Link className="dropdownmenu_content" to="/contact">
          Contact
        </Link>
        <Link className="dropdownmenu_content" to="/information">
          Information
        </Link>

      </div>
    </header>
  );
}

export default Navbar;
