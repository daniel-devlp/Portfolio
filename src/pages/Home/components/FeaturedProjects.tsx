/**
 * Featured Projects Component
 * 
 * Showcases the most important/recent projects with:
 * - Interactive project cards
 * - Hover effects and animations
 * - Technology tags
 * - Links to live demos and source code
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../../hooks';
import { PROJECTS } from '../../../constants';
import { getStaggerDelay } from '../../../utils';

const FeaturedProjects: React.FC = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  
  // Get only featured projects
  const featuredProjects = PROJECTS.filter(project => project.featured);

  return (
    <section 
      ref={sectionRef}
      className={`py-20 lg:py-32 bg-black relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      id="featured-projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white animate-slide-up">
            Featured Projects
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            A showcase of my recent work and personal projects. Each project represents 
            a unique challenge and demonstrates different aspects of my technical skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-cyan to-blue-500 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-glow group relative overflow-hidden">
            <span className="relative z-10">View All Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="relative z-10 transition-transform duration-200 group-hover:translate-x-1">
              <path d="m9 18 6-6-6-6"/>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

/**
 * Individual Project Card Component
 */
interface ProjectCardProps {
  project: typeof PROJECTS[0];
  index: number;
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isVisible }) => {
  return (
    <article 
      className={`group bg-bg-card backdrop-blur-xl border border-border-light rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent-cyan/50 hover:-translate-y-2 hover:shadow-glow ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`}
      style={{
        animationDelay: `${getStaggerDelay(index, 0.2, 0.1)}s`
      }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.image} 
          alt={`${project.title} project screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-3">
            {project.demoLink && (
              <a 
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-accent-cyan text-black font-medium rounded-lg transition-all duration-300 hover:bg-accent-cyan/90 hover:-translate-y-1"
                aria-label={`View ${project.title} live demo`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15,3 21,3 21,9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                <span className="text-sm">Demo</span>
              </a>
            )}
            
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white font-medium rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 backdrop-blur-lg"
              aria-label={`View ${project.title} source code`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm">Code</span>
            </a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors duration-300">{project.title}</h3>
          <time className="text-sm text-text-muted font-medium">
            {new Date(project.completedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short'
            })}
          </time>
        </div>

        <p className="text-text-secondary leading-relaxed">
          {project.shortDescription || project.description.substring(0, 120) + '...'}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tech, techIndex) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-bg-glass border border-border-light text-xs font-medium text-text-accent rounded-full transition-all duration-300 hover:border-accent-cyan/50 hover:text-accent-cyan animate-fade-in"
              style={{
                animationDelay: `${getStaggerDelay(index, 0.4, 0.1) + techIndex * 0.05}s`
              }}
            >
              {tech}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/30 text-xs font-medium text-accent-cyan rounded-full">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default FeaturedProjects;
