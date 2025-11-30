import React from 'react';
import { useScrollAnimation } from '../../hooks';
import { PERSONAL_INFO, TECHNOLOGIES } from '../../constants';
import { Technology } from '../../types';

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
  // const [interestsRef, interestsVisible] = useScrollAnimation();

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

  // Personal interests (commented out as not currently used)
  /*
  const interests = [
    {
      icon: '💻',
      title: 'Coding',
      description: 'Always exploring new technologies and building side projects'
    },
    {
      icon: '📚',
      title: 'Learning',
      description: 'Continuous learning through courses, books and tech conferences'
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
  */

  // Get proficiency color class based on level
  const getProficiencyColorClass = (level: string): string => {
    switch (level) {
      case 'expert': return 'bg-green-500';
      case 'advanced': return 'bg-accent-cyan';
      case 'intermediate': return 'bg-yellow-500';
      case 'beginner': return 'bg-red-500';
      default: return 'bg-gray-500';
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
    <main className="min-h-screen pt-16 bg-black">
      {/* Hero Section */}
      <section 
        ref={heroRef as React.RefObject<HTMLElement>}
        className={`py-20 lg:py-32 relative overflow-hidden ${heroVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white animate-slide-up">About Me</h1>
                <p className="text-xl sm:text-2xl text-accent-cyan font-semibold animate-fade-in" style={{animationDelay: '0.2s'}}>
                  Passionate Full Stack Developer crafting digital experiences
                </p>
              </div>
              <div className="space-y-6 text-text-secondary leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
                <p>
                  Hi! I'm <strong className="text-white">{PERSONAL_INFO.name}</strong>, a dedicated full stack developer 
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
              <div className="grid grid-cols-3 gap-6 sm:gap-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-cyan">3+</div>
                  <div className="text-sm sm:text-base text-text-secondary mt-1">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400">50+</div>
                  <div className="text-sm sm:text-base text-text-secondary mt-1">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400">15+</div>
                  <div className="text-sm sm:text-base text-text-secondary mt-1">Technologies</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative animate-float">
                <div className="relative z-10">
                  <img 
                    src="/assets/images/profile.png" 
                    alt="Daniel Moyolema" 
                    className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/10 backdrop-blur-xl"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-cyan/30 to-blue-500/30 rounded-3xl blur-xl animate-pulse-glow"></div>
                <div className="absolute top-4 -right-4 w-24 h-24 bg-accent-cyan/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        ref={skillsRef as React.RefObject<HTMLElement>}
        className={`py-20 lg:py-32 bg-gray-900/20 relative overflow-hidden ${skillsVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white animate-slide-up">Skills & Expertise</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="space-y-6 animate-scale-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-white text-center md:text-left">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill: Technology, index: number) => (
                    <div 
                      key={skill.name}
                      className="bg-bg-card backdrop-blur-xl border border-border-light rounded-xl p-4 transition-all duration-300 hover:border-accent-cyan/50 hover:-translate-y-1 animate-fade-in"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="w-8 h-8 object-contain"
                          />
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-text-accent text-sm font-semibold">{getProficiencyPercentage(skill.proficiency)}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ${getProficiencyColorClass(skill.proficiency)}`}
                          style={{ 
                            width: `${getProficiencyPercentage(skill.proficiency)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        ref={experienceRef as React.RefObject<HTMLElement>}
        className={`py-20 lg:py-32 relative ${experienceVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white animate-slide-up">Professional Experience</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              My journey in the world of software development
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-purple"></div>
            {experiences.map((experience, index) => (
              <div 
                key={`${experience.company}-${experience.period}`}
                className={`relative mb-12 animate-scale-in ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-cyan rounded-full border-4 border-gray-900 z-10"></div>
                <div className={`bg-bg-card backdrop-blur-xl border border-border-light rounded-xl p-6 transition-all duration-300 hover:border-accent-cyan/50 hover:-translate-y-1 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="space-y-2 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{experience.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-text-secondary">
                      <span className="text-accent-cyan font-medium">{experience.company}</span>
                      <span className="hidden sm:block text-text-secondary">•</span>
                      <span className="text-sm">{experience.period}</span>
                    </div>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-4">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded-full animate-fade-in"
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
        </div>
      </section>

      {/* Education Section */}
      <section 
        ref={educationRef as React.RefObject<HTMLElement>}
        className={`py-20 lg:py-32 bg-gray-900/20 relative ${educationVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white animate-slide-up">Education</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              Academic background and continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div 
                key={`${edu.institution}-${edu.period}`}
                className="bg-bg-card backdrop-blur-xl border border-border-light rounded-xl p-6 transition-all duration-300 hover:border-accent-cyan/50 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-2 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{edu.degree}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-text-secondary">
                    <span className="text-accent-cyan font-medium">{edu.institution}</span>
                    <span className="hidden sm:block text-text-secondary">•</span>
                    <span className="text-sm">{edu.period}</span>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">{edu.description}</p>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Achievements:</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achievement}
                        className="flex items-start gap-3 text-text-secondary animate-fade-in"
                        style={{ animationDelay: `${(index * 0.1) + (achIndex * 0.05)}s` }}
                      >
                        <span className="text-accent-cyan mt-2">•</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 via-accent-blue/10 to-accent-purple/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white animate-slide-up">Let's Work Together</h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Ready to bring your ideas to life? I'm always excited to work on new 
              projects and collaborate with amazing people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{animationDelay: '0.4s'}}>
              <a 
                href="/contact" 
                className="px-8 py-4 bg-accent-cyan text-gray-900 font-semibold rounded-xl hover:bg-accent-cyan/90 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/25"
              >
                Get In Touch
              </a>
              <a 
                href="/projects" 
                className="px-8 py-4 bg-transparent border-2 border-accent-cyan text-accent-cyan font-semibold rounded-xl hover:bg-accent-cyan hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/25"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
