import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import '../styles/ServiceCard.css';

const ServiceCard = ({ service, showFeatures = false, linkTo = '/services' }) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate 3D tilt angles (max 14 degrees)
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`
    );

    // Specular Glare position
    setGlareStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(0, 245, 255, 0.22) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 75%)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="card-3d-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      <div className="card-3d-glare" style={glareStyle} />
      <div className="service-card-inner">
        <div className="service-card-glow-badge">
          <span className="pulse-dot" />
          <span>ENTERPRISE SERVICE</span>
        </div>

        <div className="service-card-icon-3d">
          <div className="icon-glow-ring" />
          {service.icon}
        </div>

        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-desc">{service.description}</p>

        {showFeatures && service.features && (
          <ul className="service-card-features-3d">
            {service.features.map((feature, index) => (
              <li key={index}>
                <HiCheckCircle className="check-icon-3d" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {!showFeatures && (
          <Link to={linkTo} className="service-card-link-3d">
            <span>Explore Architecture</span>
            <HiArrowRight className="arrow-icon" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
