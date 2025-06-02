import React from 'react';
import { Link } from 'react-router-dom';
import { legalServices, physicalServices } from '../../assets/utils';
import './styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="services-container">
        <div className="service-section">
          <h2>Юридическим лицам</h2>
          <ul>
            {legalServices.map((service) => (
              <li key={service.id}>
                <Link to={`/services/legal/${service.id}`} className="service-item">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/services/legal" className="view-all-button">
            Перейти ко всем услугам
          </Link>
        </div>

        <div className="service-section">
          <h2>Физическим лицам</h2>
          <ul>
            {physicalServices.map((service) => (
              <li key={service.id}>
                <Link to={`/services/physical/${service.id}`} className="service-item">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/services/physical" className="view-all-button">
            Перейти ко всем услугам
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
