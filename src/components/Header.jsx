import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/screenshot_7_1_1.webp';
import './styles/Header.css';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>

      <nav className="nav">
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Главная</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Услуги</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>О нас</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Контакты</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

