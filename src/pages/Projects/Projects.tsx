import React, { useState, useMemo } from 'react';
import { useScrollAnimation } from '../../hooks';
import { PROJECTS, TECHNOLOGIES } from '../../constants';
import { Project } from '../../types';

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
    <main className="min-h-screen pt-16 bg-black bg-gradient-dark bg-fixed">
      {/* Header Section */}
      <section 
        ref={headerRef as React.RefObject<HTMLElement>}
        className={`mx-4 my-8 p-24 bg-gradient-card-dark backdrop-blur-xl border border-border-light rounded-xl text-center shadow-2xl transition-all duration-700 ease-out ${headerVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-slide-up">My Projects</h1>
          <p className="text-xl text-text-accent font-medium mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            A showcase of my work, skills, and passion for creating digital solutions
          </p>
          <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto animate-scale-in" style={{animationDelay: '0.4s'}}>
            Each project represents a unique challenge and learning opportunity. 
            From concept to deployment, I focus on creating solutions that are 
            both functional and beautiful.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section 
        ref={statsRef as React.RefObject<HTMLElement>}
        className={`py-16 px-4 bg-gradient-secondary-gray bg-fixed relative overflow-hidden transition-all duration-700 ease-out ${statsVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}
        style={{animationDelay: '0.2s'}}
      >
        <div className="absolute inset-0 bg-gradient-radial-light pointer-events-none"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <div className="bg-gradient-card-dark backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-border-light flex items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl hover:border-white/20 relative overflow-hidden">
            <div className="text-3xl w-15 h-15 flex items-center justify-center bg-white/8 rounded-lg">📊</div>
            <div className="flex-1">
              <div className="text-3xl font-bold text-text-accent leading-none">{projectStats.total}</div>
              <div className="text-sm text-text-secondary font-medium mt-1">Total Projects</div>
            </div>
          </div>
          <div className="bg-gradient-card-dark backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-border-light flex items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl hover:border-white/20 relative overflow-hidden">
            <div className="text-3xl w-15 h-15 flex items-center justify-center bg-white/8 rounded-lg">⭐</div>
            <div className="flex-1">
              <div className="text-3xl font-bold text-text-accent leading-none">{projectStats.featured}</div>
              <div className="text-sm text-text-secondary font-medium mt-1">Featured Projects</div>
            </div>
          </div>
          <div className="bg-gradient-card-dark backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-border-light flex items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl hover:border-white/20 relative overflow-hidden">
            <div className="text-3xl w-15 h-15 flex items-center justify-center bg-white/8 rounded-lg">🛠️</div>
            <div className="flex-1">
              <div className="text-3xl font-bold text-text-accent leading-none">{projectStats.technologies}</div>
              <div className="text-sm text-text-secondary font-medium mt-1">Technologies Used</div>
            </div>
          </div>
          <div className="bg-gradient-card-dark backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-border-light flex items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl hover:border-white/20 relative overflow-hidden">
            <div className="text-3xl w-15 h-15 flex items-center justify-center bg-white/8 rounded-lg">🚀</div>
            <div className="flex-1">
              <div className="text-3xl font-bold text-text-accent leading-none">{projectStats.recent}</div>
              <div className="text-sm text-text-secondary font-medium mt-1">Recent Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section 
        ref={filtersRef as React.RefObject<HTMLElement>}
        className={`py-16 px-4 bg-gradient-accent-gray bg-fixed border-b border-white/10 relative overflow-hidden transition-all duration-700 ease-out ${filtersVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}
        style={{animationDelay: '0.4s'}}
      >
        <div className="absolute inset-0 bg-gradient-radial-accent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 items-end relative z-10">
          {/* Search */}
          <div className="flex flex-col gap-2 lg:col-span-2">
            <label className="text-sm font-medium text-text-secondary">Search Projects</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title, description, or technology..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-white/10 rounded-lg text-base bg-white/5 backdrop-blur-sm text-white placeholder-text-secondary transition-all duration-300 focus:outline-none focus:border-white/30 focus:shadow-input"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none">🔍</div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-secondary">Category</label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value as FilterOption)}
              className="px-4 py-3 border border-white/10 rounded-lg text-base bg-white/5 backdrop-blur-sm text-white cursor-pointer transition-all duration-300 focus:outline-none focus:border-white/30 focus:shadow-input"
            >
              <option value="all">All Projects</option>
              <option value="featured">Featured</option>
              <option value="web">Web Applications</option>
              <option value="mobile">Mobile Apps</option>
              <option value="desktop">Desktop Applications</option>
            </select>
          </div>

          {/* Technology Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-secondary">Technology</label>
            <select
              value={filters.technology}
              onChange={(e) => handleFilterChange('technology', e.target.value)}
              className="px-4 py-3 border border-white/10 rounded-lg text-base bg-white/5 backdrop-blur-sm text-white cursor-pointer transition-all duration-300 focus:outline-none focus:border-white/30 focus:shadow-input"
            >
              {availableTechnologies.map(tech => (
                <option key={tech} value={tech}>
                  {tech === 'all' ? 'All Technologies' : tech}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-secondary">Sort By</label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value as SortOption)}
              className="px-4 py-3 border border-white/10 rounded-lg text-base bg-white/5 backdrop-blur-sm text-white cursor-pointer transition-all duration-300 focus:outline-none focus:border-white/30 focus:shadow-input"
            >
              <option value="date">Latest First</option>
              <option value="title">Title A-Z</option>
              <option value="featured">Featured First</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-secondary">View</label>
            <div className="flex border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm">
              <button
                className={`flex-1 py-3 px-4 border-none bg-transparent cursor-pointer text-lg transition-all duration-300 ${filters.viewMode === 'grid' ? 'bg-text-accent text-black' : 'text-text-secondary hover:bg-white/10 hover:text-white'}`}
                onClick={() => handleFilterChange('viewMode', 'grid')}
                title="Grid View"
              >
                ⊞
              </button>
              <button
                className={`flex-1 py-3 px-4 border-none bg-transparent cursor-pointer text-lg transition-all duration-300 ${filters.viewMode === 'list' ? 'bg-text-accent text-black' : 'text-text-secondary hover:bg-white/10 hover:text-white'}`}
                onClick={() => handleFilterChange('viewMode', 'list')}
                title="List View"
              >
                ☰
              </button>
            </div>
          </div>

          {/* Clear Filters */}
          <div className="flex flex-col gap-2">
            <div className="h-6"></div>
            <button 
              onClick={clearFilters} 
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg font-medium cursor-pointer transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Active Filters Summary */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-text-secondary font-medium">
            Showing {filteredProjects.length} of {PROJECTS.length} projects
          </span>
          {(filters.search || filters.category !== 'all' || filters.technology !== 'all') && (
            <div className="flex flex-wrap gap-2">
              {filters.search && (
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full text-xs font-medium text-accent-cyan">
                  Search: "{filters.search}"
                  <button onClick={() => handleFilterChange('search', '')} className="text-accent-cyan hover:text-accent-cyan/80 transition-colors">×</button>
                </span>
              )}
              {filters.category !== 'all' && (
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent-blue/10 border border-accent-blue/20 rounded-full text-xs font-medium text-accent-blue">
                  Category: {filters.category}
                  <button onClick={() => handleFilterChange('category', 'all')} className="text-accent-blue hover:text-accent-blue/80 transition-colors">×</button>
                </span>
              )}
              {filters.technology !== 'all' && (
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent-purple/10 border border-accent-purple/20 rounded-full text-xs font-medium text-accent-purple">
                  Tech: {filters.technology}
                  <button onClick={() => handleFilterChange('technology', 'all')} className="text-accent-purple hover:text-accent-purple/80 transition-colors">×</button>
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Projects Grid/List */}
      <section 
        ref={projectsRef as React.RefObject<HTMLElement>}
        className={`py-16 px-4 transition-all duration-700 ease-out ${projectsVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}
        style={{animationDelay: '0.6s'}}
      >
        <div className={`max-w-7xl mx-auto ${filters.viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8' : 'space-y-8'}`}>
          {isLoading ? (
            // Loading skeleton
            <>
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className={`bg-bg-card backdrop-blur-xl border border-border-light rounded-xl overflow-hidden animate-pulse ${filters.viewMode === 'list' ? 'flex gap-6' : ''}`}>
                  <div className={`bg-gray-700/50 ${filters.viewMode === 'list' ? 'w-80 h-48 flex-shrink-0' : 'w-full h-48'}`}></div>
                  <div className="p-6 space-y-4 flex-1">
                    <div className="h-6 bg-gray-700/50 rounded"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-700/30 rounded"></div>
                      <div className="h-4 bg-gray-700/30 rounded w-3/4"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-6 w-16 bg-gray-700/30 rounded-full"></div>
                      <div className="h-6 w-20 bg-gray-700/30 rounded-full"></div>
                      <div className="h-6 w-14 bg-gray-700/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </>
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
            <div className={`text-center py-20 ${filters.viewMode === 'grid' ? 'col-span-full' : ''}`}>
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No projects found</h3>
              <p className="text-text-secondary mb-8 max-w-md mx-auto leading-relaxed">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
              <button 
                onClick={clearFilters} 
                className="px-6 py-3 bg-accent-cyan text-gray-900 font-semibold rounded-xl hover:bg-accent-cyan/90 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/25"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 via-accent-blue/10 to-accent-purple/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white animate-slide-up">Interested in Working Together?</h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              I'm always excited to take on new challenges and create amazing projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{animationDelay: '0.4s'}}>
              <a 
                href="/contact" 
                className="px-8 py-4 bg-accent-cyan text-gray-900 font-semibold rounded-xl hover:bg-accent-cyan/90 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/25"
              >
                Get In Touch
              </a>
              <a 
                href="/about" 
                className="px-8 py-4 bg-transparent border-2 border-accent-cyan text-accent-cyan font-semibold rounded-xl hover:bg-accent-cyan hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/25"
              >
                Learn More About Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
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
      className={`bg-bg-card backdrop-blur-xl border border-border-light rounded-xl overflow-hidden transition-all duration-300 hover:border-accent-cyan/50 hover:-translate-y-2 hover:shadow-2xl relative animate-scale-in group ${viewMode === 'list' ? 'flex gap-6' : 'flex flex-col'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {project.featured && <div className="absolute top-4 left-4 px-3 py-1 bg-accent-cyan text-gray-900 text-xs font-semibold rounded-full z-10">⭐ Featured</div>}
      
      <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-80 flex-shrink-0' : 'w-full'}`}>
        {!imageError ? (
          <img
            src={project.image}
            alt={project.title}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        ) : (
          <div className="w-full h-48 bg-gray-800 flex flex-col items-center justify-center text-gray-400">
            <div className="text-3xl mb-2">🖼️</div>
            <div className="text-sm">Image not available</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
          <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-lg font-bold mb-2 line-clamp-1">{project.title}</h3>
            <p className="text-sm text-gray-200 line-clamp-3">
              {project.shortDescription || project.description.substring(0, 100) + '...'}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors duration-300 line-clamp-2 flex-1">{project.title}</h3>
          <span className="text-xs text-text-secondary bg-gray-800 px-2 py-1 rounded-full whitespace-nowrap">{formatDate(project.completedDate)}</span>
        </div>

        <p className="text-text-secondary leading-relaxed line-clamp-3 flex-grow">{project.description}</p>

        {project.features && project.features.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-white">Key Features:</h4>
            <ul className="space-y-1 text-sm">
              {project.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="text-text-secondary flex items-start gap-2">
                  <span className="text-accent-cyan mt-1 text-xs">•</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
              {project.features.length > 3 && (
                <li className="text-text-accent text-xs font-medium">+{project.features.length - 3} more features</li>
              )}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => {
            const icon = getTechnologyIcon(tech);
            return (
              <span 
                key={tech}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded-full animate-fade-in hover:bg-accent-cyan/20 transition-colors duration-300"
                style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                title={tech}
              >
                {icon && <img src={icon} alt={tech} className="w-3 h-3 object-contain" />}
                <span>{tech}</span>
              </span>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-3 mt-auto pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan text-gray-900 text-sm font-semibold rounded-lg hover:bg-accent-cyan/90 transform hover:-translate-y-0.5 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/25"
            >
              <span>🚀</span>
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-accent-cyan text-accent-cyan text-sm font-semibold rounded-lg hover:bg-accent-cyan hover:text-gray-900 transform hover:-translate-y-0.5 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/25"
            >
              <span>💻</span>
              View Code
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-accent-blue text-accent-blue text-sm font-semibold rounded-lg hover:bg-accent-blue hover:text-gray-900 transform hover:-translate-y-0.5 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/25"
            >
              <span>🎥</span>
              Demo Video
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Projects;
