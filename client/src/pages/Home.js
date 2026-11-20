import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HiGlobeAlt,
  HiDeviceMobile,
  HiTrendingUp,
  HiColorSwatch,
  HiCloud,
  HiCode,
} from 'react-icons/hi';
import { FaTrophy, FaProjectDiagram, FaHeadset, FaUsers } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import { getServices } from '../services/api';
import '../styles/Home.css';

const iconMap = {
  'Web & E-commerce': <HiGlobeAlt />,
  'Applications': <HiDeviceMobile />,
  'Digital Growth': <HiTrendingUp />,
  'Creative & Brand': <HiColorSwatch />,
  'Cloud & Support': <HiCloud />,
  'Custom Software': <HiCode />,
};

const fallbackServices = [
  {
    _id: '1',
    title: 'Web & E-commerce',
    description: 'Corporate websites, CMS websites, online stores, portals and landing pages.',
    icon: <HiGlobeAlt />,
  },
  {
    _id: '2',
    title: 'Applications',
    description: 'Web applications, mobile apps, dashboards, APIs and system integrations.',
    icon: <HiDeviceMobile />,
  },
  {
    _id: '3',
    title: 'Digital Growth',
    description: 'SEO, digital marketing, paid campaigns, lead generation and analytics.',
    icon: <HiTrendingUp />,
  },
  {
    _id: '4',
    title: 'Creative & Brand',
    description: 'UI/UX, brochures, brand assets, campaign creatives and content.',
    icon: <HiColorSwatch />,
  },
  {
    _id: '5',
    title: 'Cloud & Support',
    description: 'Hosting setup, SSL, maintenance, security updates, backups and support.',
    icon: <HiCloud />,
  },
  {
    _id: '6',
    title: 'Custom Software',
    description: 'Business workflow automation, CRM/ERP and industry-specific systems.',
    icon: <HiCode />,
  },
];

const whyChooseUs = [
  { icon: <FaTrophy />, stat: '10+', label: 'Years Experience' },
  { icon: <FaProjectDiagram />, stat: '100+', label: 'Projects Delivered' },
  { icon: <FaHeadset />, stat: '24/7', label: 'Dedicated Support' },
  { icon: <FaUsers />, stat: '30+', label: 'Expert Team Members' },
];

const Home = () => {
  const [services, setServices] = useState(fallbackServices);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        if (data && data.length > 0) {
          const mapped = data.map((s) => ({
            ...s,
            icon: iconMap[s.title] || <HiCode />,
          }));
          setServices(mapped);
        }
      } catch (err) {
        // Use fallback services
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="home-page">
      {/* Hero */}
      <HeroSection />

      {/* Services Preview */}
      <section className="services-preview section-padding">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive digital solutions tailored to elevate your business
            to the next level.
          </p>
          <div className="services-grid-preview">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us section-padding">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We deliver results that matter. Here's what sets us apart from the rest.
          </p>
          <div className="why-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-card">
                <div className="why-card-icon">{item.icon}</div>
                <h3>{item.stat}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let's discuss how our solutions can help you achieve your goals.
          </p>
          <Link to="/contact" className="btn btn-white">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
