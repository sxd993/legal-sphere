import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { serviceData } from '../../assets/utils';
import './services.css';

const Services = () => {
  const { id, serviceId } = useParams();

  // Обзор услуг
  if (!id) {
    return (
      <section className="services services-overview">
        <h1>Услуги</h1>
        <div className="services-intro">
          <p>
            Юридическая компания «Баукен и Партнеры» — это команда экспертов,
            предлагающая высококачественные услуги по мировым стандартам по
            доступным ценам. С гордостью делимся богатым опытом и традициями,
            накопленными за годы успешной практики.
          </p>
          <p>
            Наши специалисты знают специфику бизнеса изнутри благодаря опыту
            работы в коммерческих и государственных структурах.
          </p>
          <p>
            Среди наших партнёров — производственные, торговые, строительные, IT-
            и медицинские компании, включая лидеров отрасли.
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
  }

  // Список услуг для категории
  const data = serviceData[id] || {
    title: 'Услуга не найдена',
    services: [{ id: 'not-found', name: 'Раздел не доступен', description: 'Услуга не найдена.' }],
  };

  if (!serviceId) {
    return (
      <section className="services">
        <h1>{data.title}</h1>
        <div className="services-list">
          {data.services.map((service) => (
            <div key={service.id} className="service-item">
              <Link to={`/services/${id}/${service.id}`} className="service-link">
                <span className="service-dot">•</span> {service.name}
              </Link>
            </div>
          ))}
          <Link to={`/services/`} className="service-button">Назад к списку услуг</Link>
        </div>
      </section>
    );
  }

  // Детальная страница услуги
  const service = data.services.find((s) => s.id === serviceId) || {
    name: 'Услуга не найдена',
    description: 'Запрашиваемая услуга не найдена.',
  };

  return (
    <section className="services service-detail">
      <h1>{service.name}</h1>
      <p>{service.description}</p>
      <Link to={`/services/${id}`} className="service-button">Назад к списку услуг</Link>
    </section>
  );
};

export default Services;