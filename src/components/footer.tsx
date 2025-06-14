import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-icon">{'{DM}'}</span>
            <span className="logo-text">Daniel Moyolema</span>
          </Link>
          <p className="footer-tagline">Full-stack Developer</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-section">
            <h3 className="footer-title">Navigation</h3>
            <ul>
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/projects" className="footer-link">Projects</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <ul>
              <li><a href="https://wa.me/593988162040?text=Hola,%20quiero%20más%20información" className="footer-link">Whatsapp</a></li>
              <li><a href="https://www.linkedin.com/in/dannydevlp/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a></li>
              <li><a href="https://github.com/daniel-devlp" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Daniel Moyolema. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;