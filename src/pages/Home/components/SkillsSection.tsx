/**
 * Skills Section Component
 * 
 * Displays technical skills and technologies with:
 * - Categorized skill cards
 * - Proficiency indicators
 * - Animated skill icons
 * - Interactive hover effects
 */

import React, { useState } from 'react';
import { useScrollAnimation } from '../../../hooks';
import { TECHNOLOGIES } from '../../../constants';
import { type TechnologyCategory } from '../../../types';
import { getStaggerDelay } from '../../../utils';
import './SkillsSection.css';

const SkillsSection: React.FC = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<TechnologyCategory | 'all'>('all');

  // Group technologies by category
  const categories: { [key in TechnologyCategory]: string } = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    devtools: 'Dev Tools',
    cloud: 'Cloud',
    mobile: 'Mobile'
  };

  // Filter technologies based on active category
  const filteredTechnologies = activeCategory === 'all' 
    ? TECHNOLOGIES 
    : TECHNOLOGIES.filter(tech => tech.category === activeCategory);

  // Get proficiency color
  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'expert': return 'var(--color-accent-400)';
      case 'advanced': return 'var(--color-primary-400)';
      case 'intermediate': return 'var(--color-secondary-400)';
      case 'beginner': return 'var(--text-secondary)';
      default: return 'var(--text-tertiary)';
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`skills ${isVisible ? 'skills--visible' : ''}`}
      id="skills"
    >
      <div className="skills__container container">
        {/* Section Header */}
        <div className="skills__header">
          <h2 className="skills__title">
            Skills & Technologies
          </h2>
          <p className="skills__description">
            A comprehensive overview of my technical expertise and the tools I use 
            to bring ideas to life. From frontend frameworks to backend systems.
          </p>
        </div>

        {/* Category Filter */}
        <div className="skills__filters">
          <button
            onClick={() => setActiveCategory('all')}
            className={`skills__filter ${activeCategory === 'all' ? 'skills__filter--active' : ''}`}
          >
            All Skills
            <span className="skills__filter-count">({TECHNOLOGIES.length})</span>
          </button>
          
          {Object.entries(categories).map(([key, label]) => {
            const count = TECHNOLOGIES.filter(tech => tech.category === key).length;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key as TechnologyCategory)}
                className={`skills__filter ${activeCategory === key ? 'skills__filter--active' : ''}`}
              >
                {label}
                <span className="skills__filter-count">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="skills__grid">
          {filteredTechnologies.map((tech, index) => (
            <SkillCard
              key={tech.id}
              technology={tech}
              index={index}
              isVisible={isVisible}
              getProficiencyColor={getProficiencyColor}
            />
          ))}
        </div>

        {/* Skills Summary */}
        <div className="skills__summary">
          <div className="skills__summary-stats">
            <div className="skills__stat">
              <span className="skills__stat-number">{TECHNOLOGIES.length}+</span>
              <span className="skills__stat-label">Technologies</span>
            </div>
            <div className="skills__stat">
              <span className="skills__stat-number">
                {TECHNOLOGIES.filter(tech => tech.proficiency === 'advanced' || tech.proficiency === 'expert').length}+
              </span>
              <span className="skills__stat-label">Advanced Skills</span>
            </div>
            <div className="skills__stat">
              <span className="skills__stat-number">{Object.keys(categories).length}</span>
              <span className="skills__stat-label">Categories</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="skills__decoration" aria-hidden="true">
        <div className="skills__decoration-shapes">
          <div className="skills__shape skills__shape--1"></div>
          <div className="skills__shape skills__shape--2"></div>
          <div className="skills__shape skills__shape--3"></div>
        </div>
      </div>
    </section>
  );
};

/**
 * Individual Skill Card Component
 */
interface SkillCardProps {
  technology: typeof TECHNOLOGIES[0];
  index: number;
  isVisible: boolean;
  getProficiencyColor: (proficiency: string) => string;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  technology, 
  index, 
  isVisible, 
  getProficiencyColor 
}) => {
  return (
    <div 
      className={`skill-card ${isVisible ? 'skill-card--visible' : ''}`}
      style={{
        animationDelay: `${getStaggerDelay(index, 0.1, 0.05)}s`
      }}
    >
      <div className="skill-card__content">
        {/* Skill Icon */}
        <div className="skill-card__icon">
          <img 
            src={technology.icon} 
            alt={`${technology.name} icon`}
            loading="lazy"
          />
        </div>

        {/* Skill Info */}
        <div className="skill-card__info">
          <h3 className="skill-card__name">{technology.name}</h3>
          <span 
            className="skill-card__category"
            style={{ color: getProficiencyColor(technology.proficiency) }}
          >
            {technology.category.charAt(0).toUpperCase() + technology.category.slice(1)}
          </span>
        </div>

      </div>

     
    </div>
  );
};

export default SkillsSection;
