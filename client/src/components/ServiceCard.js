import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import '../styles/ServiceCard.css';

const ServiceCard = ({ service, showFeatures = false, linkTo = '/services' }) => {
  return (
    <div className="service-card">
      <div className="service-card-icon">
        {service.icon}
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>

      {showFeatures && service.features && (
        <ul className="service-card-features">
          {service.features.map((feature, index) => (
            <li key={index}>
              <HiCheckCircle className="check-icon" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {!showFeatures && (
        <Link to={linkTo} className="service-card-link">
          Learn More <HiArrowRight />
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
