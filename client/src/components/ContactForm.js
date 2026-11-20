import React, { useState } from 'react';
import { HiPaperAirplane, HiCheckCircle } from 'react-icons/hi';
import { submitContact } from '../services/api';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await submitContact(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Something went wrong. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <h2>Send Us a Message</h2>
      <p className="form-subtitle">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      {success && (
        <div className="form-success">
          <HiCheckCircle size={20} />
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {error && <div className="form-error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="How can we help?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project or inquiry..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Sending...' : (
            <>
              Send Message <HiPaperAirplane />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
