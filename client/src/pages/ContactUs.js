import React from 'react';
import { HiLocationMarker, HiPhone, HiMail, HiUser, HiMap } from 'react-icons/hi';
import ContactForm from '../components/ContactForm';
import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Have a project in mind? We'd love to hear from you. Reach out and
            let's start building something great together.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <ContactForm />

            {/* Sidebar */}
            <div className="contact-sidebar">
              <div className="contact-info-card">
                <h3>Get In Touch</h3>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <HiUser />
                  </div>
                  <div className="contact-info-text">
                    <h4>Contact Person</h4>
                    <p>Adimire Head</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <HiMail />
                  </div>
                  <div className="contact-info-text">
                    <h4>Email Address</h4>
                    <p>
                      <a href="mailto:hrd@adimire.com" style={{ color: 'var(--cyan)' }}>
                        hrd@adimire.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <HiPhone />
                  </div>
                  <div className="contact-info-text">
                    <h4>Direct Phone / WhatsApp</h4>
                    <p>
                      <a href="tel:+919011050894" style={{ color: 'inherit' }}>
                        +91 90110 50894
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <HiLocationMarker />
                  </div>
                  <div className="contact-info-text">
                    <h4>Our Headquarters</h4>
                    <p>Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="map-card">
                <div className="map-placeholder">
                  <HiMap className="map-icon" />
                  <p>Global Engineering Center</p>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
