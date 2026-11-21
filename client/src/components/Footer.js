import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail, HiLightningBolt, HiUser } from 'react-icons/hi';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-3d">
      <div className="container">
        <div className="footer-grid-3d">
          {/* Brand */}
          <div className="footer-brand-3d">
            <div className="footer-logo-row">
              <div className="footer-logo-cube">
                <HiLightningBolt />
              </div>
              <span className="footer-logo-text">ADIMIRE</span>
            </div>
            <p className="footer-brand-desc">
              Next-generation IT solutions and software engineering. We architect resilient digital foundations, custom business operating systems, and high-conversion web platforms for global innovators.
            </p>
            <div className="footer-social-3d">
              <a href="#linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#github" aria-label="GitHub"><FaGithub /></a>
              <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>

          {/* Core Services */}
          <div className="footer-col-3d">
            <h4>Solutions</h4>
            <ul>
              <li><Link to="/services">Web & E-commerce</Link></li>
              <li><Link to="/services">Applications & APIs</Link></li>
              <li><Link to="/services">Digital Growth & SEO</Link></li>
              <li><Link to="/services">Creative & Brand</Link></li>
              <li><Link to="/services">Cloud & Support</Link></li>
              <li><Link to="/services">Custom Software</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="footer-col-3d">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services Catalog</Link></li>
              <li><Link to="/contact">Contact & Inquiry</Link></li>
              <li><Link to="/career">Careers & Culture</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col-3d">
            <h4>Global Headquarters</h4>
            <div className="footer-contact-row">
              <HiUser className="contact-icon" />
              <span>Adimire Head</span>
            </div>
            <div className="footer-contact-row">
              <HiMail className="contact-icon" />
              <a href="mailto:hrd@adimire.com" style={{ color: 'inherit' }}>
                hrd@adimire.com
              </a>
            </div>
            <div className="footer-contact-row">
              <HiPhone className="contact-icon" />
              <a href="tel:+919011050894" style={{ color: 'inherit' }}>
                +91 90110 50894
              </a>
            </div>
            <div className="footer-contact-row">
              <HiLocationMarker className="contact-icon" />
              <span>Pune, Maharashtra, India</span>
            </div>
            <div className="footer-status-pill">
              <span className="status-dot-pulse" />
              <span>All Systems Operational</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-3d">
          <p>&copy; {new Date().getFullYear()} Adimire Ent. Engineered for Excellence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
