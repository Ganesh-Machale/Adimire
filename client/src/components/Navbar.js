import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX, HiLightningBolt } from 'react-icons/hi';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/career', label: 'Career' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-glass-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <div className="navbar-logo-cube">
              <HiLightningBolt className="logo-bolt" />
            </div>
            <div className="navbar-brand-text">
              <span className="brand-title">ADIMIRE</span>
              <span className="brand-tag">TECHNOLOGIES</span>
            </div>
          </Link>

          <button
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

          <nav className={`navbar-nav ${isOpen ? 'open' : ''}`}>
            <ul className="navbar-links">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`nav-link-item ${isActive ? 'active' : ''}`}
                      onClick={closeMenu}
                    >
                      {link.label}
                      {isActive && <span className="nav-active-glow" />}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link to="/contact" className="btn btn-cyan-nav" onClick={closeMenu}>
              <span>Get Started</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
