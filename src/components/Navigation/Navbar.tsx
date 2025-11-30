/**
 * Navigation Bar Component
 * 
 * A modern, responsive navigation bar with Tailwind CSS
 * 
 * Features:
 * - Responsive design with mobile menu
 * - Smooth scroll effects and hide/show on scroll  
 * - Active link highlighting
 * - Accessible keyboard navigation
 * - Modern glassmorphism design
 * - Smooth animations and transitions
 * 
 * @author Daniel Moyolema
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollDirection, useScrollAnimation } from '../../hooks';
import { NAVIGATION_ITEMS, PERSONAL_INFO } from '../../constants';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const scrollDirection = useScrollDirection();
  const [navRef, isNavVisible] = useScrollAnimation();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on escape key and handle focus
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (isMobileMenuOpen && !target.closest('#mobile-menu') && !target.closest('[aria-controls="mobile-menu"]')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scroll when menu is open
      
      // Focus management
      const firstFocusableElement = document.querySelector('.navbar__mobile-menu .navbar__mobile-link') as HTMLElement;
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300
        ${isScrolled ? 'bg-black/95 shadow-2xl' : ''}
        ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}
        ${isNavVisible ? 'animate-slide-down' : ''}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 z-50">
            <Link 
              to="/" 
              className="flex items-center gap-3 text-decoration-none transition-transform duration-300 hover:-translate-y-0.5 p-2 rounded-lg"
              aria-label="Go to homepage"
            >
              <span className="font-mono text-xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                {'{DM}'}
              </span>
              <span className="text-lg font-semibold text-white transition-colors duration-200 hover:text-white/80">
                {PERSONAL_INFO.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
            <ul className="flex items-center gap-2">
              {NAVIGATION_ITEMS.map((item, index) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`relative flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:-translate-y-0.5 group
                      ${isActive(item.path) 
                        ? 'text-white bg-white/10 border-b-2 border-white/60' 
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                      }
                    `}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-white to-white/60 rounded-full transition-all duration-300
                      ${isActive(item.path) ? 'w-4/5' : 'w-0 group-hover:w-4/5'}
                    `} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 text-white font-semibold text-sm rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl group relative overflow-hidden"
            >
              <span className="relative z-10">Let's Connect</span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="relative z-10 transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden relative flex flex-col items-center justify-center w-11 h-11 bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 z-[80] backdrop-blur-lg
              ${isMobileMenuOpen ? 'bg-white/15' : ''}
            `}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span 
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out rounded-full
                ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5 transform-gpu' : 'mb-1.5'}
              `}
            />
            <span 
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out rounded-full
                ${isMobileMenuOpen ? 'opacity-0 scale-x-0 transform-gpu' : 'mb-1.5'}
              `}
            />
            <span 
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out rounded-full
                ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5 transform-gpu' : ''}
              `}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`fixed top-0 right-0 w-80 max-w-[85vw] h-screen bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl transition-transform duration-300 ease-out z-[70] overflow-y-auto transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="relative">
          {/* Gradient Border Effect */}
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-white/60 via-white/20 to-white/60" />
          
          <nav className="flex flex-col justify-between h-full p-6 pt-20" role="navigation">
            <ul className="space-y-2 mb-12">
              {NAVIGATION_ITEMS.map((item, index) => (
                <li key={item.id} className="transform transition-all duration-300"
                    style={{
                      animationDelay: `${index * 0.1 + 0.2}s`
                    }}>
                  <Link
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`block px-6 py-4 mx-4 text-lg font-medium rounded-xl transition-all duration-300 relative group overflow-hidden
                      ${isActive(item.path) 
                        ? 'text-white bg-white/15 border border-white/20' 
                        : 'text-white/80 hover:text-white hover:bg-white/10 hover:translate-x-2 hover:scale-105'
                      }
                    `}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive(item.path) && (
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-lg" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Contact Section */}
            <div className="border-t border-white/10 pt-6">
              <a 
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-4 mb-6 bg-gradient-to-r from-white/10 to-white/5 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Let's Connect</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-600" />
              </a>
              
              <div className="flex justify-center gap-4">
                <a 
                  href={PERSONAL_INFO.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-white/80 border border-white/10 rounded-xl transition-all duration-300 hover:text-white hover:border-white/30 hover:-translate-y-1 hover:rotate-6 hover:shadow-xl bg-white/3 backdrop-blur-lg"
                  aria-label="GitHub Profile"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a 
                  href={PERSONAL_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-white/80 border border-white/10 rounded-xl transition-all duration-300 hover:text-white hover:border-white/30 hover:-translate-y-1 hover:rotate-6 hover:shadow-xl bg-white/3 backdrop-blur-lg"
                  aria-label="LinkedIn Profile"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
