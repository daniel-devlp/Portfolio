/**
 * Hero Section Component
 * 
 * The main landing section featuring:
 * - Personal introduction with animated text
 * - Professional headshot/avatar
 * - Primary call-to-action buttons
 * - Scroll indicator
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTypingAnimation } from '../../../hooks';
import { PERSONAL_INFO } from '../../../constants';
import profileImage from '../../../assets/images/profile1.jpg';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const typedTitle = useTypingAnimation(PERSONAL_INFO.title, 80, 1000);

  useEffect(() => {
    // Show hero immediately on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className={`min-h-screen flex items-center justify-center relative overflow-hidden bg-black ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      id="hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="flex items-center justify-center lg:justify-start gap-3 animate-slide-in-left">
              <span className="text-lg text-text-secondary font-medium">Hello, I'm</span>
              <div className="text-2xl animate-bounce-soft">👋</div>
            </div>

            <div className="space-y-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white relative">
                <span>{PERSONAL_INFO.name}</span>
                <div className="absolute -bottom-2 left-0 lg:left-0 right-0 lg:right-auto h-1 bg-gradient-to-r from-accent-cyan to-blue-400 rounded-full animate-scale-in" style={{animationDelay: '0.8s'}}></div>
              </h1>

              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-secondary">
                <span>A </span>
                <span className="text-accent-cyan font-mono">{typedTitle}</span>
                <span className="animate-blink text-accent-cyan">|</span>
              </div>
            </div>

            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl animate-fade-in" style={{animationDelay: '0.4s'}}>
              {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{animationDelay: '0.6s'}}>
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-cyan to-blue-500 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-glow group relative overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="relative z-10 transition-transform duration-200 group-hover:translate-x-1">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>

              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-accent-cyan/50 hover:-translate-y-1 group"
              >
                <span>Get In Touch</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.8s'}}>
              <a 
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 text-text-secondary border border-border-light rounded-xl transition-all duration-300 hover:text-white hover:border-accent-cyan/50 hover:-translate-y-1 hover:rotate-6 hover:shadow-xl bg-bg-glass backdrop-blur-lg"
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
                className="flex items-center justify-center w-12 h-12 text-text-secondary border border-border-light rounded-xl transition-all duration-300 hover:text-white hover:border-accent-cyan/50 hover:-translate-y-1 hover:rotate-6 hover:shadow-xl bg-bg-glass backdrop-blur-lg"
                aria-label="LinkedIn Profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative animate-float">
              <div className="relative z-10">
                <img 
                  src={profileImage} 
                  alt={`${PERSONAL_INFO.name} - Professional headshot`}
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/10 backdrop-blur-xl"
                  loading="eager"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-cyan/30 to-blue-500/30 rounded-3xl blur-xl animate-pulse-glow"></div>
              <div className="absolute top-4 -right-4 w-24 h-24 bg-accent-cyan/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
          <button 
            onClick={() => {
              const projectsSection = document.getElementById('featured-projects');
              projectsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-2 text-text-secondary transition-all duration-300 hover:text-white group"
            aria-label="Scroll to projects section"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-current rounded-full relative overflow-hidden">
              <div className="w-1 h-3 bg-current rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,255,218,0.03)_0%,transparent_50%)] animate-rotate-slow"></div>
      </div>
    </section>
  );
};

export default HeroSection;
