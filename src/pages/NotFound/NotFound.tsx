import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks';

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
    <main 
      ref={pageRef as React.RefObject<HTMLElement>}
      className={`min-h-screen pt-16 bg-black bg-gradient-dark bg-fixed flex items-center justify-center transition-all duration-700 ease-out ${pageVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          {/* 404 Visual */}
          <div className="space-y-8">
            <div className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple bg-clip-text animate-pulse-glow">
              404
            </div>
            <div className="flex justify-center items-center space-x-4 animate-float">
              <span className="text-6xl">🔍</span>
              <div className="space-y-1">
                <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-transparent rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
                <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-transparent rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-8 h-1 bg-gradient-to-r from-accent-purple to-transparent rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Page Not Found</h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Oops! The page you're looking for seems to have wandered off into the digital void. 
              Don't worry though – let's get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{animationDelay: '0.4s'}}>
            <button 
              onClick={handleGoBack}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-cyan text-gray-900 font-semibold rounded-xl hover:bg-accent-cyan/90 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/25"
            >
              <span className="text-xl">⬅️</span>
              Go Back
            </button>
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-accent-cyan text-accent-cyan font-semibold rounded-xl hover:bg-accent-cyan hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/25"
            >
              <span className="text-xl">🏠</span>
              Home Page
            </Link>
          </div>

          {/* Popular Pages Grid */}
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Popular Pages</h2>
              <p className="text-text-secondary">
                Here are some pages you might be interested in:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularPages.map((page, index) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="group bg-gradient-card-dark backdrop-blur-xl border border-border-light rounded-xl p-6 transition-all duration-300 hover:border-accent-cyan/50 hover:-translate-y-2 hover:shadow-2xl animate-scale-in"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{page.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors duration-300">{page.title}</h3>
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">{page.description}</p>
                  <div className="text-accent-cyan text-xl group-hover:translate-x-2 transition-transform duration-300">→</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="text-center space-y-4 animate-fade-in" style={{animationDelay: '1.2s'}}>
            <h3 className="text-xl font-bold text-white">Still need help?</h3>
            <p className="text-text-secondary mb-6">
              If you think this is an error or you're looking for something specific, 
              feel free to reach out!
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-6 py-3 bg-accent-blue text-gray-900 font-semibold rounded-xl hover:bg-accent-blue/90 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/25"
            >
              <span className="text-xl">💬</span>
              Contact Me
            </Link>
          </div>

          {/* Fun Facts */}
          <div className="bg-gradient-card-dark backdrop-blur-xl border border-border-light rounded-xl p-6 animate-fade-in" style={{animationDelay: '1.4s'}}>
            <div className="flex items-start gap-4">
              <span className="text-2xl">💡</span>
              <p className="text-text-secondary text-sm leading-relaxed">
                <span className="font-semibold text-white">Fun Fact:</span> The first 404 error was discovered at CERN in 1992. 
                The room where the original web server was located was actually room 404!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
