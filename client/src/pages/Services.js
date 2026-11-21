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
      'We engineer ultra-responsive corporate websites, headless CMS platforms, high-velocity e-commerce stores, and enterprise client portals built for scale and conversions.',
    features: [
      'High-performance Next.js & React architectures',
      'Headless CMS & custom content systems',
      'Secure multi-vendor e-commerce stores',
      'Client portals & self-service dashboards',
      'Ultra-fast conversion landing pages',
    ],
    icon: <HiGlobeAlt />,
  },
  {
    _id: '2',
    title: 'Applications',
    description:
      'End-to-end full stack web applications and cross-platform mobile apps engineered with modern reactive frameworks, offline capabilities, and resilient API gateways.',
    features: [
      'Custom React / Node.js web applications',
      'Cross-platform iOS & Android mobile apps',
      'Real-time analytics & telemetry dashboards',
      'Scalable REST & GraphQL microservice APIs',
      'Payment gateways & third-party integrations',
    ],
    icon: <HiDeviceMobile />,
  },
  {
    _id: '3',
    title: 'Digital Growth',
    description:
      'Precision SEO engineering, programmatic advertising campaigns, hyper-targeted digital funnels, and algorithmic analytics that systematically compound revenue.',
    features: [
      'Technical SEO audit & search visibility',
      'Omnichannel performance marketing funnels',
      'High-ROI paid search & social campaigns',
      'Automated lead generation pipelines',
      'Predictive conversion rate optimization (CRO)',
    ],
    icon: <HiTrendingUp />,
  },
  {
    _id: '4',
    title: 'Creative & Brand',
    description:
      'World-class visual design systems, 3D interactive user interfaces, cohesive brand identity packages, and engaging multi-format marketing collateral.',
    features: [
      'Interactive 3D UI/UX design & prototyping',
      'Comprehensive brand identity systems & guidelines',
      'Investor pitch decks & executive brochures',
      'High-impact campaign creatives & 3D motion',
      'Strategic brand narrative & copy systems',
    ],
    icon: <HiColorSwatch />,
  },
  {
    _id: '5',
    title: 'Cloud & Support',
    description:
      'Zero-downtime cloud infrastructure deployment, hardened SSL security, automated disaster recovery backups, and continuous 24/7 technical monitoring.',
    features: [
      'Cloud setup (AWS, GCP, DigitalOcean, Azure)',
      'Automated CI/CD deployment pipelines',
      'SSL certificates, DDoS mitigation & firewalls',
      'Continuous daily backups & failover recovery',
      '24/7 proactive monitoring & SLAs',
    ],
    icon: <HiCloud />,
  },
  {
    _id: '6',
    title: 'Custom Software',
    description:
      'Bespoke enterprise software tailored to automate mission-critical business workflows, custom CRM/ERP platforms, and proprietary operating environments.',
    features: [
      'Automated workflow & process engines',
      'Custom CRM, ERP & inventory platforms',
      'Industry-specific automation suites',
      'Legacy software re-architecture & migration',
      'Scalable database design & optimization',
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
        // Fallback
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="services-page-3d">
      {/* 3D Page Hero Header */}
      <section className="services-header-3d">
        <div className="container">
          <div className="services-header-content">
            <span className="services-tag-pill">ENGINEERING EXCELLENCE</span>
            <h1>
              Full-Spectrum <span className="gradient-3d-text">IT Services</span>
            </h1>
            <p>
              Explore our comprehensive suite of digital, software, and cloud capabilities. 
              Each module is crafted with enterprise-grade standards, built to evolve with your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (Requirement: shown in both home & services) */}
      <section className="services-content-section section-padding">
        <div className="container">
          {loading ? (
            <div className="services-loading">
              <div className="loading-spinner-3d" />
              <p>Initializing Service Modules...</p>
            </div>
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
      </section>
    </div>
  );
};

export default Services;
