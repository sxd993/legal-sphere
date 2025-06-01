import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/screenshot_7_1_1.webp';
import './styles/Header.css';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li><NavLink to="/" className="nav-link">Главная</NavLink></li>
          <li><NavLink to="/services" className="nav-link">Услуги</NavLink></li>
          <li><NavLink to="/about" className="nav-link">О нас</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Контакты</NavLink></li>
        </ul>
      </nav>

      {isHomePage && (
        <>
          <img src={logo} alt="Logo" className="logo-image" />
          <div className="header-bottom">
            <p className="bottom-phone"><strong>+7 (951) 789-12-10</strong></p>
            <div className="glow-line"></div>
            <p className="bottom-address">г. Челябинск, ул.Колхозная, д. 36, пом. 11</p>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
