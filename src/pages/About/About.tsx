import React from 'react';
import { useScrollAnimation } from '../../hooks';
import { PERSONAL_INFO, TECHNOLOGIES } from '../../constants';
import { Technology } from '../../types';
import './About.css';

/**
 * About Page Component
 * 
 * Comprehensive about page showcasing personal information,
 * skills, experience, and professional journey
 * 
 * Features:
 * - Personal introduction with animated elements
 * - Skills showcase with proficiency levels
 * - Technology stack with categorized display
 * - Professional experience timeline
 * - Education background
 * - Personal interests and hobbies
 * - Interactive animations and transitions
 * 
 * @author Daniel Moyolema
 * @version 2.0.0
 */

const About: React.FC = () => {
  // Animation refs
  const [heroRef, heroVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [experienceRef, experienceVisible] = useScrollAnimation();
  const [educationRef, educationVisible] = useScrollAnimation();
  const [interestsRef, interestsVisible] = useScrollAnimation();

  // Categorized skills for better organization
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: TECHNOLOGIES.filter((tech: Technology) => 
        ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React'].includes(tech.name)
      )
    },
    {
      title: 'Backend Development',
      skills: TECHNOLOGIES.filter((tech: Technology) => 
        ['ASP.NET', 'Node.js', 'Express', 'Python', 'Django'].includes(tech.name)
      )
    },
    {
      title: 'Database & Cloud',
      skills: TECHNOLOGIES.filter((tech: Technology) => 
        ['MongoDB', 'PostgreSQL', 'SQL Server', 'Oracle'].includes(tech.name)
      )
    },
    {
      title: 'Tools & Others',
      skills: TECHNOLOGIES.filter((tech: Technology) => 
        ['Git', 'Docker', 'Webpack', 'Sass'].includes(tech.name)
      )
    }
  ];

  // Professional experience data
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: 'Developing modern web applications using React, Node.js, and cloud technologies. Led the development of a customer management system that improved efficiency by 40%.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2022 - 2023',
      description: 'Created responsive and interactive user interfaces for various client projects. Specialized in React development and modern CSS frameworks.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Bootstrap', 'Git']
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Co.',
      period: '2021 - 2022',
      description: 'Started my professional journey developing web applications and learning best practices in software development.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    }
  ];

  // Education background
  const education = [
    {
      degree: 'Bachelor in Computer Science',
      institution: 'Universidad Tecnológica',
      period: '2019 - 2023',
      description: 'Focused on software engineering, web development, and database design. Graduated with honors.',
      achievements: ['Dean\'s List', 'Best Final Project Award', 'Programming Contest Winner']
    },
    {
      degree: 'Web Development Bootcamp',
      institution: 'Code Academy',
      period: '2020',
      description: 'Intensive program covering modern web development technologies and frameworks.',
      achievements: ['Full Stack Certification', 'Top 10% Graduate']
    }
  ];

  // Personal interests
  const interests = [
    {
      icon: '💻',
      title: 'Coding',
      description: 'Always exploring new technologies and building side projects'
    },
    {
      icon: '📚',
      title: 'Learning',
      description: 'Continuous learning through courses, books, and tech conferences'
    },
    {
      icon: '🎮',
      title: 'Gaming',
      description: 'Enjoying video games and understanding game development'
    },
    {
      icon: '🏃‍♂️',
      title: 'Fitness',
      description: 'Staying active with running, gym, and outdoor activities'
    },
    {
      icon: '🎵',
      title: 'Music',
      description: 'Playing guitar and discovering new music genres'
    },
    {
      icon: '✈️',
      title: 'Travel',
      description: 'Exploring new places and experiencing different cultures'
    }
  ];

  // Get proficiency color based on level
  const getProficiencyColor = (level: string): string => {
    switch (level) {
      case 'expert': return 'var(--color-success-500)';
      case 'advanced': return 'var(--color-primary-500)';
      case 'intermediate': return 'var(--color-warning-500)';
      case 'beginner': return 'var(--color-error-500)';
      default: return 'var(--color-neutral-500)';
    }
  };

  // Get proficiency percentage for display
  const getProficiencyPercentage = (level: string): number => {
    switch (level) {
      case 'expert': return 95;
      case 'advanced': return 85;
      case 'intermediate': return 70;
      case 'beginner': return 50;
      default: return 0;
    }
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section 
        ref={heroRef as React.RefObject<HTMLElement>}
        className={`about-hero ${heroVisible ? 'animate-in' : ''}`}
      >
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">About Me</h1>
            <p className="hero-subtitle">
              Passionate Full Stack Developer crafting digital experiences
            </p>
            <div className="hero-description">
              <p>
                Hi! I'm <strong>{PERSONAL_INFO.name}</strong>, a dedicated full stack developer 
                with a passion for creating innovative web solutions. With expertise in modern 
                technologies and a keen eye for detail, I transform ideas into robust, 
                user-friendly applications.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with 
                the latest industry trends. My goal is to build applications that not only 
                meet technical requirements but also provide exceptional user experiences.
              </p>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img 
                src="/assets/images/profile.png" 
                alt="Daniel Moyolema" 
                className="profile-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        ref={skillsRef as React.RefObject<HTMLElement>}
        className={`skills-section ${skillsVisible ? 'animate-in' : ''}`}
      >
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="skill-category"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill: Technology, index: number) => (
                  <div 
                    key={skill.name}
                    className="skill-item"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                  >
                    <div className="skill-header">
                      <div className="skill-info">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="skill-icon"
                        />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{getProficiencyPercentage(skill.proficiency)}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${getProficiencyPercentage(skill.proficiency)}%`,
                          backgroundColor: getProficiencyColor(skill.proficiency)
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section 
        ref={experienceRef as React.RefObject<HTMLElement>}
        className={`experience-section ${experienceVisible ? 'animate-in' : ''}`}
      >
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My journey in the world of software development
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div 
              key={`${experience.company}-${experience.period}`}
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-title">{experience.title}</h3>
                  <div className="experience-meta">
                    <span className="experience-company">{experience.company}</span>
                    <span className="experience-period">{experience.period}</span>
                  </div>
                </div>
                <p className="experience-description">{experience.description}</p>
                <div className="experience-technologies">
                  {experience.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className="tech-tag"
                      style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.05)}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section 
        ref={educationRef as React.RefObject<HTMLElement>}
        className={`education-section ${educationVisible ? 'animate-in' : ''}`}
      >
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic background and continuous learning
          </p>
        </div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div 
              key={`${edu.institution}-${edu.period}`}
              className="education-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="education-header">
                <h3 className="education-degree">{edu.degree}</h3>
                <div className="education-meta">
                  <span className="education-institution">{edu.institution}</span>
                  <span className="education-period">{edu.period}</span>
                </div>
              </div>
              <p className="education-description">{edu.description}</p>
              <div className="education-achievements">
                <h4 className="achievements-title">Achievements:</h4>
                <ul className="achievements-list">
                  {edu.achievements.map((achievement, achIndex) => (
                    <li 
                      key={achievement}
                      className="achievement-item"
                      style={{ animationDelay: `${(index * 0.1) + (achIndex * 0.05)}s` }}
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

     

      {/* Call to Action */}
      <section className="about-cta">
        <div className="cta-content">
          <h2 className="cta-title">Let's Work Together</h2>
          <p className="cta-description">
            Ready to bring your ideas to life? I'm always excited to work on new 
            projects and collaborate with amazing people.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-btn primary">
              Get In Touch
            </a>
            <a href="/projects" className="cta-btn secondary">
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
