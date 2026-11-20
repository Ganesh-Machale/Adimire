import React, { useState, useEffect } from 'react';
import {
  HiGlobeAlt,
  HiDeviceMobile,
  HiTrendingUp,
  HiColorSwatch,
  HiCloud,
  HiCode,
} from 'react-icons/hi';
import ServiceCard from '../components/ServiceCard';
import { getServices } from '../services/api';
import '../styles/Services.css';

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
    description:
      'We build high-performance corporate websites, CMS-powered platforms, feature-rich online stores, customer portals, and conversion-optimized landing pages.',
    features: [
      'Corporate & portfolio websites',
      'CMS websites (WordPress, custom)',
      'E-commerce & online stores',
      'Web portals & dashboards',
      'Landing pages & microsites',
    ],
    icon: <HiGlobeAlt />,
  },
  {
    _id: '2',
    title: 'Applications',
    description:
      'From scalable web applications to cross-platform mobile apps, we develop robust solutions with modern frameworks and seamless API integrations.',
    features: [
      'Custom web applications',
      'Mobile apps (iOS & Android)',
      'Admin dashboards & panels',
      'REST & GraphQL APIs',
      'Third-party system integrations',
    ],
    icon: <HiDeviceMobile />,
  },
  {
    _id: '3',
    title: 'Digital Growth',
    description:
      'Accelerate your online presence with data-driven SEO strategies, targeted digital marketing campaigns, and comprehensive analytics solutions.',
    features: [
      'Search Engine Optimization (SEO)',
      'Digital marketing strategy',
      'Paid advertising campaigns',
      'Lead generation funnels',
      'Analytics & performance tracking',
    ],
    icon: <HiTrendingUp />,
  },
  {
    _id: '4',
    title: 'Creative & Brand',
    description:
      'Elevate your brand with stunning UI/UX design, professional brochures, impactful brand assets, and creative campaign materials.',
    features: [
      'UI/UX design & prototyping',
      'Brand identity & guidelines',
      'Brochures & print materials',
      'Campaign creatives & ads',
      'Content strategy & creation',
    ],
    icon: <HiColorSwatch />,
  },
  {
    _id: '5',
    title: 'Cloud & Support',
    description:
      'Reliable cloud hosting setup, SSL security, ongoing maintenance, regular backups, and round-the-clock technical support for your peace of mind.',
    features: [
      'Cloud hosting & deployment',
      'SSL certificates & security',
      'Website maintenance & updates',
      'Automated backups',
      '24/7 technical support',
    ],
    icon: <HiCloud />,
  },
  {
    _id: '6',
    title: 'Custom Software',
    description:
      'Tailored software solutions for business workflow automation, CRM/ERP systems, and industry-specific applications that streamline your operations.',
    features: [
      'Business process automation',
      'CRM & ERP solutions',
      'Industry-specific software',
      'Data management systems',
      'Legacy system modernization',
    ],
    icon: <HiCode />,
  },
];

const Services = () => {
  const [services, setServices] = useState(fallbackServices);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="services-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            End-to-end digital and software solutions designed to help your
            business innovate, scale, and succeed.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-content">
        <div className="container">
          {loading ? (
            <p style={{ textAlign: 'center', color: '#64748b' }}>
              Loading services...
            </p>
          ) : (
            <div className="services-grid">
              {services.map((service) => (
                <ServiceCard
                  key={service._id}
                  service={service}
                  showFeatures={true}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
