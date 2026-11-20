import React from 'react';
import { HiLocationMarker, HiPhone, HiMail, HiMap } from 'react-icons/hi';
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
                    <HiLocationMarker />
                  </div>
                  <div className="contact-info-text">
                    <h4>Our Office</h4>
                    <p>Pune, Maharashtra, India</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <HiPhone />
                  </div>
                  <div className="contact-info-text">
                    <h4>Phone Number</h4>
                    <p>+91 98765 43210</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <HiMail />
                  </div>
                  <div className="contact-info-text">
                    <h4>Email Address</h4>
                    <p>info@adimire.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="map-card">
                <div className="map-placeholder">
                  <HiMap className="map-icon" />
                  <p>Google Maps Embed</p>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
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
