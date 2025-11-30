import React from 'react';
import { useScrollAnimation } from '../../hooks';
import { PERSONAL_INFO, WHATSAPP_CONFIG } from '../../constants';

/**
 * Contact Page Component
 * 
 * Provides multiple ways for visitors to get in touch, including
 * a contact form, social media links, and direct contact information
 * 
 * Features:
 * - Contact form with validation
 * - Social media integration
 * - Professional contact information
 * - Interactive animations
 * - Form submission handling
 * - Response feedback
 * 
 * @author Daniel Moyolema
 * @version 2.0.0
 */



const Contact: React.FC = () => {
  // Animation refs
  const [headerRef, headerVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();
  const [cvRef, cvVisible] = useScrollAnimation();

  // Social media links with icons
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: PERSONAL_INFO.social.linkedin,
      icon: '💼',
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      url: PERSONAL_INFO.social.github,
      icon: '💻',
      color: '#333'
    },
    {
      name: 'WhatsApp',
      url: WHATSAPP_CONFIG.formatMessage(),
      icon: '📱',
      color: '#25D366'
    },
    {
      name: 'Portfolio',
      url: PERSONAL_INFO.social.portfolio || '#',
      icon: '🌐',
      color: '#6366F1'
    }
  ];



  // Handle external link clicks
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen pt-16 bg-black bg-gradient-dark bg-fixed">
      {/* Header Section */}
      <section 
        ref={headerRef as React.RefObject<HTMLElement>}
        className={`mx-4 my-8 p-24 bg-gradient-card-dark backdrop-blur-xl border border-border-light rounded-xl text-center shadow-2xl transition-all duration-700 ease-out ${headerVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-slide-up">Get In Touch</h1>
          <p className="text-xl text-text-accent font-medium mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Let's discuss your next project and bring your ideas to life
          </p>
          <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto animate-scale-in" style={{animationDelay: '0.4s'}}>
            I'm always excited to work on new projects and collaborate with amazing people. 
            Whether you have a specific project in mind or just want to chat about 
            possibilities, I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div 
            ref={infoRef as React.RefObject<HTMLDivElement>}
            className={`space-y-8 transition-all duration-700 ease-out ${infoVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}
            style={{animationDelay: '0.2s'}}
          >
            {/* Direct Contact */}
            <div className="bg-gradient-card-dark backdrop-blur-xl border border-border-light rounded-xl p-8 shadow-2xl">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                <span className="text-2xl">📞</span>
                Direct Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg transition-colors hover:bg-white/10">
                  <span className="text-2xl">📱</span>
                  <div className="flex-1">
                    <div className="text-sm text-text-secondary font-medium">WhatsApp</div>
                    <a 
                      href={WHATSAPP_CONFIG.formatMessage()}
                      className="text-accent-cyan hover:text-accent-cyan/80 transition-colors font-medium"
                    >
                      {PERSONAL_INFO.whatsapp}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg transition-colors hover:bg-white/10">
                  <span className="text-2xl">📱</span>
                  <div className="flex-1">
                    <div className="text-sm text-text-secondary font-medium">Phone</div>
                    <a 
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-white hover:text-accent-cyan transition-colors font-medium"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <span className="text-2xl">📍</span>
                  <div className="flex-1">
                    <div className="text-sm text-text-secondary font-medium">Location</div>
                    <div className="text-white font-medium">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-card-dark backdrop-blur-xl border border-border-light rounded-xl p-8 shadow-2xl">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                <span className="text-2xl">🌐</span>
                Social Media
              </h3>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-text-accent">Connect with me</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <button
                      key={social.name}
                      onClick={() => handleLinkClick(social.url)}
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-lg transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg animate-scale-in group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      title={`Connect on ${social.name}`}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                      <span className="text-white font-medium group-hover:text-accent-cyan transition-colors duration-300">{social.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Download Section */}
      <section 
        ref={cvRef as React.RefObject<HTMLElement>}
        className={`py-16 px-4 transition-all duration-700 ease-out ${cvVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}
        style={{animationDelay: '0.6s'}}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card-dark backdrop-blur-xl border border-border-light rounded-xl p-8 shadow-2xl">
            <div className="flex items-start gap-6 mb-8">
              <div className="text-4xl">📄</div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Download My Resume</h2>
                <p className="text-text-secondary leading-relaxed">
                  Get a detailed overview of my professional experience, skills, and achievements. 
                  Perfect for recruiters and potential collaborators.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                  <span className="text-2xl">👨‍💻</span>
                  <span className="text-white font-medium">Professional Experience</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                  <span className="text-2xl">🎓</span>
                  <span className="text-white font-medium">Education & Certifications</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                  <span className="text-2xl">💼</span>
                  <span className="text-white font-medium">Key Projects & Achievements</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                  <span className="text-2xl">🛠️</span>
                  <span className="text-white font-medium">Technical Skills</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={PERSONAL_INFO.resume} 
                  download="Daniel_Moyolema_Resume.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 bg-accent-cyan text-gray-900 font-semibold rounded-xl hover:bg-accent-cyan/90 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/25"
                >
                  <span className="text-xl">📥</span>
                  Download PDF
                </a>
                <button 
                  onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                  className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 bg-transparent border-2 border-accent-cyan text-accent-cyan font-semibold rounded-xl hover:bg-accent-cyan hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/25"
                >
                  <span className="text-xl">👀</span>
                  View Online
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-text-accent mb-2">3+</div>
                <div className="text-sm text-text-secondary font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-text-accent mb-2">15+</div>
                <div className="text-sm text-text-secondary font-medium">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-text-accent mb-2">50+</div>
                <div className="text-sm text-text-secondary font-medium">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 via-accent-blue/10 to-accent-purple/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white animate-slide-up">Ready to Start Your Project?</h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Let's turn your ideas into reality. I'm just one message away from helping 
              you build something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{animationDelay: '0.4s'}}>
              <a 
                href={WHATSAPP_CONFIG.formatMessage()}
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent-cyan text-gray-900 font-semibold rounded-xl hover:bg-accent-cyan/90 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/25"
              >
                <span className="text-xl">📱</span>
                WhatsApp Me
              </a>
              <a 
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-accent-blue text-accent-blue font-semibold rounded-xl hover:bg-accent-blue hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/25"
              >
                <span className="text-xl">💼</span>
                LinkedIn
              </a>
              <a 
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-accent-purple text-accent-purple font-semibold rounded-xl hover:bg-accent-purple hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent-purple/25"
              >
                <span className="text-xl">💻</span>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
