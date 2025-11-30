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
import { PERSONAL_INFO, WHATSAPP_CONFIG } from '../../../constants';

const CTASection: React.FC = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  const contactMethods = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.56-.01-.188 0-.495.074-.754.372-.26.297-.99.968-.99 2.359 0 1.39 1.016 2.734 1.157 2.931.14.198 2.007 3.065 4.862 4.299.681.295 1.213.471 1.627.602.682.217 1.303.186 1.793.113.547-.081 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.012 2.163c-5.507 0-9.986 4.479-9.986 9.986 0 1.771.465 3.434 1.279 4.876L2.037 21.2l4.273-1.236c1.4.768 2.999 1.174 4.702 1.174 5.507 0 9.986-4.479 9.986-9.986S17.519 2.163 12.012 2.163zm0 18.06c-4.45 0-8.073-3.623-8.073-8.074 0-4.45 3.623-8.073 8.073-8.073s8.074 3.623 8.074 8.073c0 4.451-3.624 8.074-8.074 8.074z"/>
        </svg>
      ),
      title: 'WhatsApp Me',
      description: 'Get in touch directly',
      action: 'Send Message',
      href: WHATSAPP_CONFIG.formatMessage(),
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
      className={`py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      id="contact-cta"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight animate-slide-up">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              Ready to bring your ideas to life? I'm always excited to work on new projects 
              and collaborate with fellow developers, designers, and entrepreneurs. Whether you 
              have a specific project in mind or just want to chat about technology, I'd love to hear from you.
            </p>
            
            <div className="space-y-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center gap-3 text-text-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent-cyan">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                <span>Quick response time</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent-cyan">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                <span>Collaborative approach</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent-cyan">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                <span>Quality-focused development</span>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4">
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
        <div className="bg-bg-card backdrop-blur-xl border border-border-light rounded-3xl p-8 lg:p-12 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Prefer a detailed conversation?
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Fill out the contact form with your project details and I'll get back to you within 24 hours.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-cyan to-blue-500 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-glow group relative overflow-hidden">
              <span className="relative z-10">Open Contact Form</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="relative z-10 transition-transform duration-200 group-hover:translate-x-1">
                <path d="m9 18 6-6-6-6"/>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-cyan/3 to-transparent animate-gradient-x"></div>
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
  const baseClasses = `group block p-6 bg-bg-card backdrop-blur-xl border border-border-light rounded-2xl transition-all duration-300 hover:border-accent-cyan/50 hover:-translate-y-1 hover:shadow-glow ${method.primary ? 'ring-2 ring-accent-cyan/20' : ''} ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`;
  const animationDelay = { animationDelay: `${0.6 + index * 0.1}s` };

  const content = (
    <>
      <div className={`flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110 ${
        method.primary ? 'bg-accent-cyan text-black' : 'bg-bg-glass text-accent-cyan'
      }`}>
        {method.icon}
      </div>
      
      <div className="space-y-2 mb-4">
        <h4 className="text-lg font-semibold text-white group-hover:text-accent-cyan transition-colors duration-300">{method.title}</h4>
        <p className="text-text-secondary text-sm">{method.description}</p>
      </div>
      
      <div className="flex items-center gap-2 text-sm font-medium text-accent-cyan">
        <span>{method.action}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="transition-transform duration-200 group-hover:translate-x-1">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </div>
    </>
  );

  return (
    <div
      className={baseClasses}
      style={animationDelay}
    >
      {method.external ? (
        <a
          href={method.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {content}
        </a>
      ) : (
        <a href={method.href} className="block">
          {content}
        </a>
      )}
    </div>
  );
};

export default CTASection;
