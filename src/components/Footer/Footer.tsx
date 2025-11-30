/**
 * Footer Component
 * 
 * A modern footer with contact information, social links, and site navigation.
 * 
 * Features:
 * - Responsive design
 * - Social media links
 * - Contact information
 * - Copyright and legal information
 * - Smooth animations on scroll
 * 
 * @author Daniel Moyolema
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO, NAVIGATION_ITEMS } from '../../constants';
// import { useScrollAnimation } from '../../hooks';

const Footer: React.FC = () => {
  // const [footerRef, isVisible] = useScrollAnimation();

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: PERSONAL_INFO.social.github,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: PERSONAL_INFO.social.linkedin,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <footer 
     // ref={footerRef}
      className={`bg-black bg-glass-gradient border-t border-border-light relative overflow-hidden mt-32 backdrop-blur-xl`}
      //className={`${isVisible ? 'animate-slide-up' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 py-16 pb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="mb-8">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <span className="font-mono text-2xl font-bold bg-gradient-to-r from-accent-cyan to-blue-400 bg-clip-text text-transparent">{'{DM}'}</span>
                <span className="text-xl font-semibold text-white">{PERSONAL_INFO.name}</span>
              </div>
              <p className="text-text-secondary leading-relaxed max-w-md mx-auto md:mx-0">
                Full-stack developer passionate about creating innovative web solutions 
                with modern technologies and best practices.
              </p>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
              <div className="flex justify-center md:justify-start gap-4 sm:gap-6 flex-wrap">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 text-text-secondary border border-border-light rounded-lg transition-all duration-300 font-medium animate-fade-in hover:text-accent-cyan hover:border-accent-cyan/50 hover:-translate-y-0.5 hover:shadow-md"
                    aria-label={`Visit my ${social.name} profile`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav role="navigation" aria-label="Footer navigation">
              <ul className="flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-4 lg:gap-2 items-center sm:justify-center lg:items-start lg:justify-start flex-wrap">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      className="inline-block px-3 py-2 text-text-secondary rounded-lg transition-all duration-300 animate-slide-in-right hover:text-white hover:bg-bg-secondary hover:translate-x-1"
                      style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>


        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border-light py-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left sm:justify-between">
            <p className="text-text-muted text-sm">
              © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            
            <div>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-4 py-2 border border-border-light text-text-secondary cursor-pointer rounded-lg transition-all duration-300 text-sm hover:text-white hover:border-accent-cyan/50 hover:-translate-y-0.5"
                aria-label="Back to top"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="m18 15-6-6-6 6"/>
                </svg>
                Back to top
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-radial from-cyan-500/3 via-blue-500/2 to-transparent animate-rotate-slow"></div>
      </div>
    </footer>
  );
};

export default Footer;
