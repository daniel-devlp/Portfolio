import React, { useState, useMemo } from 'react';
import { useScrollAnimation } from '../../hooks';
import { PROJECTS, TECHNOLOGIES } from '../../constants';
import { Project } from '../../types';
import './Projects.css';

/**
 * Projects Page Component
 * 
 * Enhanced project showcase with advanced filtering, sorting, and view modes
 * 
 * Features:
 * - Advanced project filtering by technology, category, and status
 * - Multiple view modes (grid and list)
 * - Real-time search functionality
 * - Sorting by date, title, and featured status
 * - Project statistics and insights
 * - Interactive project cards with hover effects
 * - Responsive design with mobile optimization
 * - Loading states and smooth animations
 * 
 * @author Daniel Moyolema
 * @version 2.0.0
 */

// Filter and sort options
type ViewMode = 'grid' | 'list';
type SortOption = 'date' | 'title' | 'featured';
type FilterOption = 'all' | 'featured' | 'web' | 'mobile' | 'desktop';

interface ProjectFilters {
  category: FilterOption;
  technology: string;
  search: string;
  sortBy: SortOption;
  viewMode: ViewMode;
}

const Projects: React.FC = () => {
  // Animation refs
  const [headerRef, headerVisible] = useScrollAnimation();
  const [filtersRef, filtersVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  // State management
  const [filters, setFilters] = useState<ProjectFilters>({
    category: 'all',
    technology: 'all',
    search: '',
    sortBy: 'date',
    viewMode: 'grid'
  });

  const [isLoading, setIsLoading] = useState(false);

  // Get unique technologies from projects
  const availableTechnologies = useMemo(() => {
    const allTechs = PROJECTS.flatMap(project => project.technologies);
    return ['all', ...Array.from(new Set(allTechs))];
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = [...PROJECTS];

    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm)
        )
      );
    }

    // Apply category filter
    if (filters.category !== 'all') {
      if (filters.category === 'featured') {
        filtered = filtered.filter(project => project.featured);
      }
      // Add more category filters as needed
    }

    // Apply technology filter
    if (filters.technology !== 'all') {
      filtered = filtered.filter(project =>
        project.technologies.includes(filters.technology)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'date':
          return new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'featured':
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters]);

  // Calculate project statistics
  const projectStats = useMemo(() => {
    const totalProjects = PROJECTS.length;
    const featuredProjects = PROJECTS.filter(p => p.featured).length;
    const technologies = new Set(PROJECTS.flatMap(p => p.technologies)).size;
    const recentProjects = PROJECTS.filter(p => {
      const projectDate = new Date(p.completedDate);
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
      return projectDate > sixMonthsAgo;
    }).length;

    return {
      total: totalProjects,
      featured: featuredProjects,
      technologies,
      recent: recentProjects
    };
  }, []);

  // Handle filter changes
  const handleFilterChange = (key: keyof ProjectFilters, value: string | ViewMode | SortOption) => {
    setIsLoading(true);
    
    // Simulate loading delay for smooth UX
    setTimeout(() => {
      setFilters(prev => ({
        ...prev,
        [key]: value
      }));
      setIsLoading(false);
    }, 300);
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      category: 'all',
      technology: 'all',
      search: '',
      sortBy: 'date',
      viewMode: 'grid'
    });
  };

  // Get technology icon
  const getTechnologyIcon = (techName: string): string => {
    const tech = TECHNOLOGIES.find(t => 
      t.name.toLowerCase() === techName.toLowerCase()
    );
    return tech?.icon || '';
  };

  return (
    <div className="projects-page">
      {/* Header Section */}
      <section 
        ref={headerRef as React.RefObject<HTMLElement>}
        className={`projects-header ${headerVisible ? 'animate-in' : ''}`}
      >
        <div className="header-content">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">
            A showcase of my work, skills, and passion for creating digital solutions
          </p>
          <p className="header-description">
            Each project represents a unique challenge and learning opportunity. 
            From concept to deployment, I focus on creating solutions that are 
            both functional and beautiful.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section 
        ref={statsRef as React.RefObject<HTMLElement>}
        className={`projects-stats ${statsVisible ? 'animate-in' : ''}`}
      >
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <div className="stat-number">{projectStats.total}</div>
              <div className="stat-label">Total Projects</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <div className="stat-number">{projectStats.featured}</div>
              <div className="stat-label">Featured Projects</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🛠️</div>
            <div className="stat-content">
              <div className="stat-number">{projectStats.technologies}</div>
              <div className="stat-label">Technologies Used</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🚀</div>
            <div className="stat-content">
              <div className="stat-number">{projectStats.recent}</div>
              <div className="stat-label">Recent Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section 
        ref={filtersRef as React.RefObject<HTMLElement>}
        className={`projects-filters ${filtersVisible ? 'animate-in' : ''}`}
      >
        <div className="filters-container">
          {/* Search */}
          <div className="filter-group">
            <label className="filter-label">Search Projects</label>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search by title, description, or technology..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="search-input"
              />
              <div className="search-icon">🔍</div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="filter-group">
            <label className="filter-label">Category</label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value as FilterOption)}
              className="filter-select"
            >
              <option value="all">All Projects</option>
              <option value="featured">Featured</option>
              <option value="web">Web Applications</option>
              <option value="mobile">Mobile Apps</option>
              <option value="desktop">Desktop Applications</option>
            </select>
          </div>

          {/* Technology Filter */}
          <div className="filter-group">
            <label className="filter-label">Technology</label>
            <select
              value={filters.technology}
              onChange={(e) => handleFilterChange('technology', e.target.value)}
              className="filter-select"
            >
              {availableTechnologies.map(tech => (
                <option key={tech} value={tech}>
                  {tech === 'all' ? 'All Technologies' : tech}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div className="filter-group">
            <label className="filter-label">Sort By</label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value as SortOption)}
              className="filter-select"
            >
              <option value="date">Latest First</option>
              <option value="title">Title A-Z</option>
              <option value="featured">Featured First</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="filter-group">
            <label className="filter-label">View</label>
            <div className="view-toggle">
              <button
                className={`view-btn ${filters.viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => handleFilterChange('viewMode', 'grid')}
                title="Grid View"
              >
                ⊞
              </button>
              <button
                className={`view-btn ${filters.viewMode === 'list' ? 'active' : ''}`}
                onClick={() => handleFilterChange('viewMode', 'list')}
                title="List View"
              >
                ☰
              </button>
            </div>
          </div>

          {/* Clear Filters */}
          <div className="filter-group">
            <button onClick={clearFilters} className="clear-filters-btn">
              Clear All
            </button>
          </div>
        </div>

        {/* Active Filters Summary */}
        <div className="active-filters">
          <span className="results-count">
            Showing {filteredProjects.length} of {PROJECTS.length} projects
          </span>
          {(filters.search || filters.category !== 'all' || filters.technology !== 'all') && (
            <div className="filter-tags">
              {filters.search && (
                <span className="filter-tag">
                  Search: "{filters.search}"
                  <button onClick={() => handleFilterChange('search', '')}>×</button>
                </span>
              )}
              {filters.category !== 'all' && (
                <span className="filter-tag">
                  Category: {filters.category}
                  <button onClick={() => handleFilterChange('category', 'all')}>×</button>
                </span>
              )}
              {filters.technology !== 'all' && (
                <span className="filter-tag">
                  Tech: {filters.technology}
                  <button onClick={() => handleFilterChange('technology', 'all')}>×</button>
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Projects Grid/List */}
      <section 
        ref={projectsRef as React.RefObject<HTMLElement>}
        className={`projects-content ${projectsVisible ? 'animate-in' : ''}`}
      >
        <div className={`projects-container ${filters.viewMode}`}>
          {isLoading ? (
            // Loading skeleton
            <div className="loading-container">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="project-skeleton">
                  <div className="skeleton-image"></div>
                  <div className="skeleton-content">
                    <div className="skeleton-title"></div>
                    <div className="skeleton-description"></div>
                    <div className="skeleton-tags"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProjects.length > 0 ? (
            // Projects list
            filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                viewMode={filters.viewMode}
                index={index}
                getTechnologyIcon={getTechnologyIcon}
              />
            ))
          ) : (
            // Empty state
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <h3 className="empty-title">No projects found</h3>
              <p className="empty-description">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
              <button onClick={clearFilters} className="empty-action">
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="projects-cta">
        <div className="cta-content">
          <h2 className="cta-title">Interested in Working Together?</h2>
          <p className="cta-description">
            I'm always excited to take on new challenges and create amazing projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-btn primary">
              Get In Touch
            </a>
            <a href="/about" className="cta-btn secondary">
              Learn More About Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// ProjectCard Component
interface ProjectCardProps {
  project: Project;
  viewMode: ViewMode;
  index: number;
  getTechnologyIcon: (techName: string) => string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  viewMode, 
  index, 
  getTechnologyIcon 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => setImageError(true);

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <article 
      className={`project-card ${viewMode}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {project.featured && <div className="featured-badge">⭐ Featured</div>}
      
      <div className="project-image">
        {!imageError ? (
          <img
            src={project.image}
            alt={project.title}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`project-img ${imageLoaded ? 'loaded' : ''}`}
          />
        ) : (
          <div className="image-placeholder">
            <div className="placeholder-icon">🖼️</div>
            <div className="placeholder-text">Image not available</div>
          </div>
        )}
        <div className="image-overlay">
          <div className="overlay-content">
            <h3 className="overlay-title">{project.title}</h3>
            <p className="overlay-description">
              {project.shortDescription || project.description.substring(0, 100) + '...'}
            </p>
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-meta">
            <span className="project-date">{formatDate(project.completedDate)}</span>
          </div>
        </div>

        <p className="project-description">{project.description}</p>

        {project.features && project.features.length > 0 && (
          <div className="project-features">
            <h4 className="features-title">Key Features:</h4>
            <ul className="features-list">
              {project.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="feature-item">{feature}</li>
              ))}
              {project.features.length > 3 && (
                <li className="feature-item more">+{project.features.length - 3} more</li>
              )}
            </ul>
          </div>
        )}

        <div className="project-technologies">
          {project.technologies.map((tech, techIndex) => {
            const icon = getTechnologyIcon(tech);
            return (
              <span 
                key={tech}
                className="tech-tag"
                style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                title={tech}
              >
                {icon && <img src={icon} alt={tech} className="tech-icon" />}
                <span className="tech-name">{tech}</span>
              </span>
            );
          })}
        </div>

        <div className="project-actions">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn primary"
            >
              <span className="btn-icon">🚀</span>
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn secondary"
            >
              <span className="btn-icon">💻</span>
              View Code
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn secondary"
            >
              <span className="btn-icon">🎥</span>
              Demo Video
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Projects;
