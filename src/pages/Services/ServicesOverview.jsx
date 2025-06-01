import React from 'react';
import { Link } from 'react-router-dom';
import './services.css';

const ServicesOverview = () => {
  return (
    <section className="services services-overview">
      <h1>Услуги</h1>
      <div className="services-intro">
        <p>
          Юридическая компания «Баукен и Партнеры» — это команда экспертов, предлагающая высококачественные услуги по мировым стандартам по доступным ценам. С гордостью делимся богатым опытом и традициями, накопленными за годы успешной практики.
        </p>
        <p>
          Наши специалисты знают специфику бизнеса изнутри благодаря опыту работы в коммерческих и государственных структурах.
        </p>
        <p>
          Среди наших партнёров — производственные, торговые, строительные, IT- и медицинские компании, включая лидеров отрасли.
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <h3>Юридическим лицам</h3>
          <p>Полное сопровождение бизнеса: от регистрации до судебных споров.</p>
          <Link to="/services/legal" className="service-button">Перейти</Link>
        </div>
        <div className="service-card">
          <h3>Физическим лицам</h3>
          <p>Индивидуальная поддержка в решении любых юридических вопросов.</p>
          <Link to="/services/physical" className="service-button">Перейти</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;