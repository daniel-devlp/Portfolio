import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks';
import './NotFound.css';

/**
 * NotFound (404) Page Component
 * 
 * Displayed when users navigate to a non-existent route.
 * Provides helpful navigation options and maintains the site's design consistency.
 * 
 * Features:
 * - Friendly error message
 * - Navigation suggestions
 * - Search functionality
 * - Animated entrance
 * - Consistent branding
 * 
 * @author Daniel Moyolema
 * @version 1.0.0
 */
const NotFound: React.FC = () => {
  const [pageRef, pageVisible] = useScrollAnimation();

  // Popular pages for quick navigation
  const popularPages = [
    {
      title: 'Home',
      path: '/',
      description: 'Return to the main page',
      icon: '🏠'
    },
    {
      title: 'Projects',
      path: '/projects',
      description: 'View my latest work',
      icon: '💼'
    },
    {
      title: 'About',
      path: '/about',
      description: 'Learn more about me',
      icon: '👨‍💻'
    },
    {
      title: 'Contact',
      path: '/contact',
      description: 'Get in touch',
      icon: '📧'
    }
  ];

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div 
      ref={pageRef as React.RefObject<HTMLDivElement>}
      className={`not-found-page ${pageVisible ? 'animate-in' : ''}`}
    >
      <div className="container">
        <div className="not-found-content">
          {/* 404 Visual */}
          <div className="error-visual">
            <div className="error-number">404</div>
            <div className="error-illustration">
              <span className="error-icon">🔍</span>
              <div className="search-lines">
                <div className="search-line"></div>
                <div className="search-line"></div>
                <div className="search-line"></div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="error-message">
            <h1 className="error-title">Page Not Found</h1>
            <p className="error-description">
              Oops! The page you're looking for seems to have wandered off into the digital void. 
              Don't worry though – let's get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="error-actions">
            <button 
              onClick={handleGoBack}
              className="btn btn-primary"
            >
              <span className="btn-icon">⬅️</span>
              Go Back
            </button>
            <Link to="/" className="btn btn-secondary">
              <span className="btn-icon">🏠</span>
              Home Page
            </Link>
          </div>

          {/* Popular Pages Grid */}
          <div className="popular-pages">
            <h2 className="section-title">Popular Pages</h2>
            <p className="section-description">
              Here are some pages you might be interested in:
            </p>
            <div className="pages-grid">
              {popularPages.map((page, index) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="page-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="page-icon">{page.icon}</div>
                  <h3 className="page-title">{page.title}</h3>
                  <p className="page-description">{page.description}</p>
                  <div className="page-arrow">→</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="help-section">
            <h3 className="help-title">Still need help?</h3>
            <p className="help-description">
              If you think this is an error or you're looking for something specific, 
              feel free to reach out!
            </p>
            <Link to="/contact" className="help-link">
              <span className="help-icon">💬</span>
              Contact Me
            </Link>
          </div>

          {/* Fun Facts */}
          <div className="fun-fact">
            <div className="fact-content">
              <span className="fact-icon">💡</span>
              <p>
                <strong>Fun Fact:</strong> The first 404 error was discovered at CERN in 1992. 
                The room where the original web server was located was actually room 404!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
