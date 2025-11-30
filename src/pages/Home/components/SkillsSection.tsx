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

  // Get proficiency color class
  const getProficiencyColorClass = (proficiency: string) => {
    switch (proficiency) {
      case 'expert': return 'text-accent-cyan';
      case 'advanced': return 'text-blue-400';
      case 'intermediate': return 'text-purple-400';
      case 'beginner': return 'text-text-secondary';
      default: return 'text-text-muted';
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-20 lg:py-32 bg-black relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      id="skills"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white animate-slide-up">
            Skills & Technologies
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            A comprehensive overview of my technical expertise and the tools I use 
            to bring ideas to life. From frontend frameworks to backend systems.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border ${activeCategory === 'all' ? 'bg-accent-cyan text-black border-accent-cyan' : 'text-text-secondary border-border-light hover:text-white hover:border-accent-cyan/50 hover:bg-accent-cyan/10'}`}
          >
            All Skills
            <span className="ml-1 text-sm opacity-70">({TECHNOLOGIES.length})</span>
          </button>
          
          {Object.entries(categories).map(([key, label]) => {
            const count = TECHNOLOGIES.filter(tech => tech.category === key).length;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key as TechnologyCategory)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border ${activeCategory === key ? 'bg-accent-cyan text-black border-accent-cyan' : 'text-text-secondary border-border-light hover:text-white hover:border-accent-cyan/50 hover:bg-accent-cyan/10'}`}
              >
                {label}
                <span className="ml-1 text-sm opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {filteredTechnologies.map((tech, index) => (
            <SkillCard
              key={tech.id}
              technology={tech}
              index={index}
              isVisible={isVisible}
              getProficiencyColorClass={getProficiencyColorClass}
            />
          ))}
        </div>

        {/* Skills Summary */}
        <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <span className="block text-3xl sm:text-4xl font-bold text-accent-cyan">{TECHNOLOGIES.length}+</span>
              <span className="text-text-secondary font-medium">Technologies</span>
            </div>
            <div className="space-y-2">
              <span className="block text-3xl sm:text-4xl font-bold text-blue-400">
                {TECHNOLOGIES.filter(tech => tech.proficiency === 'advanced' || tech.proficiency === 'expert').length}+
              </span>
              <span className="text-text-secondary font-medium">Advanced Skills</span>
            </div>
            <div className="space-y-2">
              <span className="block text-3xl sm:text-4xl font-bold text-purple-400">{Object.keys(categories).length}</span>
              <span className="text-text-secondary font-medium">Categories</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-cyan/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-purple-500/3 rounded-full blur-3xl animate-pulse"></div>
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
  getProficiencyColorClass: (proficiency: string) => string;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  technology, 
  index, 
  isVisible, 
  getProficiencyColorClass 
}) => {
  return (
    <div 
      className={`group bg-bg-card backdrop-blur-xl border border-border-light rounded-2xl p-6 transition-all duration-300 hover:border-accent-cyan/50 hover:-translate-y-2 hover:shadow-glow ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`}
      style={{
        animationDelay: `${getStaggerDelay(index, 0.1, 0.05)}s`
      }}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Skill Icon */}
        <div className="w-12 h-12 flex items-center justify-center bg-bg-glass rounded-xl group-hover:scale-110 transition-transform duration-300">
          <img 
            src={technology.icon} 
            alt={`${technology.name} icon`}
            className="w-8 h-8 object-contain"
            loading="lazy"
          />
        </div>

        {/* Skill Info */}
        <div className="text-center space-y-1">
          <h3 className="font-semibold text-white text-sm">{technology.name}</h3>
          <span className={`text-xs font-medium ${getProficiencyColorClass(technology.proficiency)}`}>
            {technology.category.charAt(0).toUpperCase() + technology.category.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
