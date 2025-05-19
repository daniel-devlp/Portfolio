import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="logo-link">
            <span className="logo-icon">{'{DV}'}</span>
            <span className="logo-text">Daniel Moyolema</span>
          </Link>
        </div>
        
        <div className="navbar-menu">
          <ul className="navbar-links">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/projects' ? 'active' : ''}`}>
              <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
          
          <a href="https://www.linkedin.com/in/dannydevlp/" className="contact-button">
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;