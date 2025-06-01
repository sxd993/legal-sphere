import React from 'react';
import './styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <strong>Телефон:</strong>
          <p>+7 (951) 789-12-10</p>
        </div>
        <div className="footer-column">
          <strong>Email:</strong>
          <p>info@baukenlaw.ru</p>
        </div>
        <div className="footer-column">
          <strong>Адрес:</strong>
          <p>г. Челябинск, ул. Колхозная, д. 36, пом. 11</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
