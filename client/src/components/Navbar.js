import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/career', label: 'Career' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="navbar-logo-icon">A</div>
          <span className="navbar-logo-text">ADIMIRE</span>
        </Link>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
