import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            Digital & Software Solutions
          </div>

          <h1>
            Build the Platform.{' '}
            <span className="highlight">Grow the Business.</span>
          </h1>

          <p className="subtitle">
            We craft innovative digital solutions that help businesses scale,
            automate, and thrive in the modern landscape. From web platforms to
            custom software — we build it all.
          </p>

          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">
              Explore Our Services <HiArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get In Touch
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="hero-stat">
              <h3>100+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="hero-stat">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="hero-stat">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
