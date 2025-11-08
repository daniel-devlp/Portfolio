import React, { useState } from 'react';
import { useScrollAnimation } from '../../hooks';
import { PERSONAL_INFO } from '../../constants';
import './Contact.css';

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

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  // Animation refs
  const [headerRef, headerVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();
  const [cvRef, cvVisible] = useScrollAnimation();

  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      name: 'Email',
      url: `mailto:${PERSONAL_INFO.email}`,
      icon: '📧',
      color: '#EA4335'
    },
    {
      name: 'Portfolio',
      url: PERSONAL_INFO.social.portfolio || '#',
      icon: '🌐',
      color: '#6366F1'
    }
  ];

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('loading');

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  // Handle external link clicks
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section 
        ref={headerRef as React.RefObject<HTMLElement>}
        className={`contact-header ${headerVisible ? 'animate-in' : ''}`}
      >
        <div className="header-content">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Let's discuss your next project and bring your ideas to life
          </p>
          <p className="contact-intro">
            I'm always excited to work on new projects and collaborate with amazing people. 
            Whether you have a specific project in mind or just want to chat about 
            possibilities, I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content">
        <div className="contact-container">
          {/* Contact Form */}
          <div 
            ref={formRef as React.RefObject<HTMLDivElement>}
            className={`contact-form-section ${formVisible ? 'animate-in' : ''}`}
          >
            <h2 className="form-title">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Your full name"
                  disabled={isSubmitting}
                />
                {errors.name && <div className="form-error">{errors.name}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  placeholder="What's this about?"
                  disabled={isSubmitting}
                />
                {errors.subject && <div className="form-error">{errors.subject}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Tell me more about your project or idea..."
                  disabled={isSubmitting}
                />
                {errors.message && <div className="form-error">{errors.message}</div>}
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="form-loading">
                    <div className="spinner"></div>
                    Sending Message...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="form-success">
                  ✅ Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-error">
                  ❌ Oops! Something went wrong. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div 
            ref={infoRef as React.RefObject<HTMLDivElement>}
            className={`contact-info-section ${infoVisible ? 'animate-in' : ''}`}
          >
            {/* Direct Contact */}
            <div className="contact-info-card">
              <h3 className="info-title">
                <span className="info-icon">📞</span>
                Direct Contact
              </h3>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-item-icon">📧</span>
                  <div className="contact-item-content">
                    <div className="contact-item-label">Email</div>
                    <div className="contact-item-value">
                      <a href={`mailto:${PERSONAL_INFO.email}`}>
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-item-icon">📱</span>
                  <div className="contact-item-content">
                    <div className="contact-item-label">Phone</div>
                    <div className="contact-item-value">
                      <a href={`tel:${PERSONAL_INFO.phone}`}>
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-item-icon">📍</span>
                  <div className="contact-item-content">
                    <div className="contact-item-label">Location</div>
                    <div className="contact-item-value">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="contact-info-card">
              <h3 className="info-title">
                <span className="info-icon">🌐</span>
                Social Media
              </h3>
              <div className="social-links">
                <h4 className="social-links-title">Connect with me</h4>
                <div className="social-links-grid">
                  {socialLinks.map((social, index) => (
                    <button
                      key={social.name}
                      onClick={() => handleLinkClick(social.url)}
                      className="social-link"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      title={`Connect on ${social.name}`}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-name">{social.name}</span>
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
        className={`cv-section ${cvVisible ? 'animate-in' : ''}`}
      >
        <div className="cv-container">
          <div className="cv-card">
            <div className="cv-header">
              <div className="cv-icon">📄</div>
              <div className="cv-content">
                <h2 className="cv-title">Download My Resume</h2>
                <p className="cv-description">
                  Get a detailed overview of my professional experience, skills, and achievements. 
                  Perfect for recruiters and potential collaborators.
                </p>
              </div>
            </div>
            
            <div className="cv-details">
              <div className="cv-features">
                <div className="cv-feature">
                  <span className="feature-icon">👨‍💻</span>
                  <span className="feature-text">Professional Experience</span>
                </div>
                <div className="cv-feature">
                  <span className="feature-icon">🎓</span>
                  <span className="feature-text">Education & Certifications</span>
                </div>
                <div className="cv-feature">
                  <span className="feature-icon">💼</span>
                  <span className="feature-text">Key Projects & Achievements</span>
                </div>
                <div className="cv-feature">
                  <span className="feature-icon">🛠️</span>
                  <span className="feature-text">Technical Skills</span>
                </div>
              </div>
              
              <div className="cv-actions">
                <a 
                  href={PERSONAL_INFO.resume} 
                  download="Daniel_Moyolema_Resume.pdf"
                  className="cv-download-btn primary"
                >
                  <span className="btn-icon">📥</span>
                  Download PDF
                </a>
                <button 
                  onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                  className="cv-download-btn secondary"
                >
                  <span className="btn-icon">👀</span>
                  View Online
                </button>
              </div>
            </div>
            
            <div className="cv-stats">
              <div className="cv-stat">
                <span className="stat-value">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="cv-stat">
                <span className="stat-value">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="cv-stat">
                <span className="stat-value">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="quick-contact">
        <div className="quick-contact-content">
          <h2 className="quick-contact-title">Ready to Start Your Project?</h2>
          <p className="quick-contact-text">
            Let's turn your ideas into reality. I'm just one message away from helping 
            you build something amazing.
          </p>
          <div className="quick-contact-buttons">
            <a 
              href={`mailto:${PERSONAL_INFO.email}?subject=Project Inquiry`}
              className="quick-contact-btn"
            >
              <span className="quick-contact-btn-icon">📧</span>
              Email Me
            </a>
            <a 
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-contact-btn"
            >
              <span className="quick-contact-btn-icon">💼</span>
              LinkedIn
            </a>
            <a 
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-contact-btn"
            >
              <span className="quick-contact-btn-icon">💻</span>
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
