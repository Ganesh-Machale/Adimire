import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <span className="navbar-logo-text">ADIMIRE</span>
            <p>
              Empowering businesses with cutting-edge digital and software solutions.
              We transform ideas into scalable technology platforms.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/career">Career</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Web & E-commerce</Link></li>
              <li><Link to="/services">Applications</Link></li>
              <li><Link to="/services">Digital Growth</Link></li>
              <li><Link to="/services">Cloud & Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <HiLocationMarker className="icon" />
              <span>Pune, Maharashtra, India</span>
            </div>
            <div className="footer-contact-item">
              <HiPhone className="icon" />
              <span>+91 98765 43210</span>
            </div>
            <div className="footer-contact-item">
              <HiMail className="icon" />
              <span>info@adimire.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Adimire Ent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
