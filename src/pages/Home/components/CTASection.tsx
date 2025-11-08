/**
 * Call to Action Section Component
 * 
 * Encourages visitors to get in touch with:
 * - Compelling headline and description
 * - Multiple contact options
 * - Social media links
 * - Contact form teaser
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../../hooks';
import { PERSONAL_INFO } from '../../../constants';
import './CTASection.css';

const CTASection: React.FC = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  const contactMethods = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: 'Email Me',
      description: 'Get in touch directly',
      action: 'Send Email',
      href: `mailto:${PERSONAL_INFO.email}`,
      primary: true
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: 'LinkedIn',
      description: 'Professional network',
      action: 'Connect',
      href: PERSONAL_INFO.social.linkedin,
      external: true
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: 'GitHub',
      description: 'View my code',
      action: 'Browse Repos',
      href: PERSONAL_INFO.social.github,
      external: true
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`cta ${isVisible ? 'cta--visible' : ''}`}
      id="contact-cta"
    >
      <div className="cta__container container">
        {/* Main CTA Content */}
        <div className="cta__content">
          <div className="cta__text">
            <h2 className="cta__title">
              Let's Build Something Amazing Together
            </h2>
            <p className="cta__description">
              Ready to bring your ideas to life? I'm always excited to work on new projects 
              and collaborate with fellow developers, designers, and entrepreneurs. Whether you 
              have a specific project in mind or just want to chat about technology, I'd love to hear from you.
            </p>
            
            <div className="cta__highlights">
              <div className="cta__highlight">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                <span>Quick response time</span>
              </div>
              <div className="cta__highlight">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                <span>Collaborative approach</span>
              </div>
              <div className="cta__highlight">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                <span>Quality-focused development</span>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="cta__methods">
            {contactMethods.map((method, index) => (
              <ContactMethod
                key={method.title}
                method={method}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="cta__secondary">
          <div className="cta__secondary-content">
            <h3 className="cta__secondary-title">
              Prefer a detailed conversation?
            </h3>
            <p className="cta__secondary-description">
              Fill out the contact form with your project details and I'll get back to you within 24 hours.
            </p>
            <Link to="/contact" className="cta__form-button">
              <span>Open Contact Form</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="cta__decoration" aria-hidden="true">
        <div className="cta__decoration-gradient"></div>
        <div className="cta__decoration-pattern"></div>
      </div>
    </section>
  );
};

/**
 * Individual Contact Method Component
 */
interface ContactMethodProps {
  method: {
    icon: React.ReactNode;
    title: string;
    description: string;
    action: string;
    href: string;
    primary?: boolean;
    external?: boolean;
  };
  index: number;
  isVisible: boolean;
}

const ContactMethod: React.FC<ContactMethodProps> = ({ method, index, isVisible }) => {
  return (
    <div
      className={`contact-method ${method.primary ? 'contact-method--primary' : ''} ${
        isVisible ? 'contact-method--visible' : ''
      }`}
      style={{
        animationDelay: `${0.6 + index * 0.1}s`
      }}
    >
      {method.external ? (
        <a
          href={method.href}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-method__link"
        >
          <div className="contact-method__icon">
            {method.icon}
          </div>
          
          <div className="contact-method__content">
            <h4 className="contact-method__title">{method.title}</h4>
            <p className="contact-method__description">{method.description}</p>
          </div>
          
          <div className="contact-method__action">
            <span>{method.action}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
        </a>
      ) : (
        <a
          href={method.href}
          className="contact-method__link"
        >
          <div className="contact-method__icon">
            {method.icon}
          </div>
          
          <div className="contact-method__content">
            <h4 className="contact-method__title">{method.title}</h4>
            <p className="contact-method__description">{method.description}</p>
          </div>
          
          <div className="contact-method__action">
            <span>{method.action}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
        </a>
      )}
    </div>
  );
};

export default CTASection;
