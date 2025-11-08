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
import './FeaturedProjects.css';

const FeaturedProjects: React.FC = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  
  // Get only featured projects
  const featuredProjects = PROJECTS.filter(project => project.featured);

  return (
    <section 
      ref={sectionRef}
      className={`featured-projects ${isVisible ? 'featured-projects--visible' : ''}`}
      id="featured-projects"
    >
      <div className="featured-projects__container container">
        {/* Section Header */}
        <div className="featured-projects__header">
          <h2 className="featured-projects__title">
            Featured Projects
          </h2>
          <p className="featured-projects__description">
            A showcase of my recent work and personal projects. Each project represents 
            a unique challenge and demonstrates different aspects of my technical skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="featured-projects__grid">
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
        <div className="featured-projects__cta">
          <Link to="/projects" className="featured-projects__view-all">
            <span>View All Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m9 18 6-6-6-6"/>
            </svg>
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
      className={`project-card ${isVisible ? 'project-card--visible' : ''}`}
      style={{
        animationDelay: `${getStaggerDelay(index, 0.2, 0.1)}s`
      }}
    >
      {/* Project Image */}
      <div className="project-card__image">
        <img 
          src={project.image} 
          alt={`${project.title} project screenshot`}
          loading="lazy"
        />
        <div className="project-card__overlay">
          <div className="project-card__links">
            {project.demoLink && (
              <a 
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link project-card__link--demo"
                aria-label={`View ${project.title} live demo`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15,3 21,3 21,9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                <span>Live Demo</span>
              </a>
            )}
            
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link project-card__link--code"
              aria-label={`View ${project.title} source code`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-card__content">
        <div className="project-card__header">
          <h3 className="project-card__title">{project.title}</h3>
          <time className="project-card__date">
            {new Date(project.completedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short'
            })}
          </time>
        </div>

        <p className="project-card__description">
          {project.shortDescription || project.description.substring(0, 120) + '...'}
        </p>

        {/* Technology Tags */}
        <div className="project-card__technologies">
          {project.tags.slice(0, 4).map((tech, techIndex) => (
            <span 
              key={tech} 
              className="project-card__tech-tag"
              style={{
                animationDelay: `${getStaggerDelay(index, 0.4, 0.1) + techIndex * 0.05}s`
              }}
            >
              {tech}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="project-card__tech-tag project-card__tech-tag--more">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default FeaturedProjects;
