import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HiGlobeAlt,
  HiDeviceMobile,
  HiTrendingUp,
  HiColorSwatch,
  HiCloud,
  HiCode,
  HiShieldCheck,
  HiChip,
  HiLightningBolt,
  HiSupport,
  HiArrowRight,
} from 'react-icons/hi';
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
    description: 'Corporate websites, CMS platforms, modern online stores, portals and high-conversion landing pages.',
    icon: <HiGlobeAlt />,
  },
  {
    _id: '2',
    title: 'Applications',
    description: 'Mission-critical web applications, native & hybrid mobile apps, real-time dashboards and microservices APIs.',
    icon: <HiDeviceMobile />,
  },
  {
    _id: '3',
    title: 'Digital Growth',
    description: 'Technical SEO engineering, multi-channel growth funnels, performance marketing and predictive conversion analytics.',
    icon: <HiTrendingUp />,
  },
  {
    _id: '4',
    title: 'Creative & Brand',
    description: 'Ultra-modern 3D UI/UX design systems, identity design, interactive digital guidelines and high-impact visual assets.',
    icon: <HiColorSwatch />,
  },
  {
    _id: '5',
    title: 'Cloud & Support',
    description: 'AWS / GCP cloud infrastructure, Kubernetes, zero-downtime CI/CD, SSL encryption, and 24/7 dedicated support.',
    icon: <HiCloud />,
  },
  {
    _id: '6',
    title: 'Custom Software',
    description: 'Full-cycle enterprise workflow automation, custom ERP/CRM architectures, and proprietary business operating systems.',
    icon: <HiCode />,
  },
];

const pillars = [
  {
    icon: <HiChip />,
    title: 'Next-Gen Tech Stack',
    desc: 'Engineered with MERN, Three.js, React, and cloud-native microservices.',
    badge: 'CORE CAPABILITY',
  },
  {
    icon: <HiLightningBolt />,
    title: 'Ultra Low-Latency',
    desc: 'Optimized algorithms deliver sub-second response times across edge networks.',
    badge: 'PERFORMANCE',
  },
  {
    icon: <HiShieldCheck />,
    title: 'Enterprise Security',
    desc: 'Military-grade encryption, automated vulnerability scans, and ISO compliance.',
    badge: 'PROTECTION',
  },
  {
    icon: <HiSupport />,
    title: '24/7 Dedicated Ops',
    desc: 'Continuous infrastructure monitoring and rapid incident resolution teams.',
    badge: 'RELIABILITY',
  },
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
    <div className="home-page-3d">
      {/* 3D Hero */}
      <HeroSection />

      {/* Services Showcase (Requirement: shown in both home & services) */}
      <section className="services-showcase-section section-padding">
        <div className="container">
          <div className="section-badge-wrap">
            <span className="section-badge">ENGINEERING SOLUTIONS</span>
          </div>
          <h2 className="section-title">
            Our Core <span className="gradient-text">IT Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive digital capabilities engineered to accelerate enterprise growth and transform market positioning.
          </p>

          <div className="services-grid-preview">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>

          <div className="view-all-services-cta">
            <Link to="/services" className="btn btn-cyan-3d">
              <span>View Full Services Architecture</span>
              <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 3D Why Choose Us / Tech Pillars */}
      <section className="tech-pillars-section section-padding">
        <div className="container">
          <div className="section-badge-wrap">
            <span className="section-badge">WHY CLIENTS TRUST ADIMIRE</span>
          </div>
          <h2 className="section-title">
            Built for <span className="gradient-text">Uncompromising Quality</span>
          </h2>
          <p className="section-subtitle">
            We don't build generic templates. We build bespoke digital engines that outperform industry standards.
          </p>

          <div className="pillars-grid">
            {pillars.map((item, index) => (
              <div key={index} className="pillar-card-3d">
                <div className="pillar-badge">{item.badge}</div>
                <div className="pillar-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="pillar-glow-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crazy 3D Futuristic CTA Banner */}
      <section className="futuristic-cta-section">
        <div className="container">
          <div className="cta-glass-box">
            <div className="cta-glow-orb" />
            <div className="cta-content-wrapper">
              <span className="cta-pre-title">READY TO DOMINATE YOUR MARKET?</span>
              <h2>Let's Engineer Your Next Digital Masterpiece</h2>
              <p>
                Partner with Adimire Ent to transform your technical architecture into a high-performance growth engine.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-cyan-3d">
                  <span>Schedule Architecture Review</span>
                  <HiArrowRight />
                </Link>
                <Link to="/services" className="btn btn-glass-3d">
                  <span>Explore Capabilities</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
