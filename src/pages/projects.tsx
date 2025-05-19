import React, { useState } from 'react';
import '../assets/styles/projects.css';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  demo: string | null;
  code: string;
  category: 'frontend' | 'backend' | 'fullstack';
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');

  // Datos de proyectos con categorías añadidas
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce React",
      description: "Plataforma de comercio electrónico con carrito de compras",
      image: "https://via.placeholder.com/400x250?text=E-commerce+React",
      tags: ["React", "Node.js", "MongoDB"],
      features: [
        "Carrito de compras interactivo",
        "Autenticación de usuarios",
        "Pasarela de pagos integrada"
      ],
      demo: "https://tuecommerce-demo.com",
      code: "https://github.com/tusuario/ecommerce-react",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Task Manager API",
      description: "API REST para gestión de tareas con autenticación JWT",
      image: "https://via.placeholder.com/400x250?text=Task+Manager",
      tags: ["Node.js", "Express", "MongoDB"],
      features: [
        "CRUD completo de tareas",
        "Autenticación JWT",
        "Documentación con Swagger"
      ],
      demo: null,
      code: "https://github.com/tusuario/task-manager-api",
      category: "backend"
    },
    {
      id: 3,
      title: "Portfolio React",
      description: "Portfolio personal construido con React y TypeScript",
      image: "https://via.placeholder.com/400x250?text=Portfolio",
      tags: ["React", "TypeScript", "CSS"],
      features: [
        "Diseño responsive",
        "Modo oscuro/claro",
        "Animaciones CSS"
      ],
      demo: "https://tuportfolio.com",
      code: "https://github.com/tusuario/portfolio-react",
      category: "frontend"
    }
  ];

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Manejar el cambio de filtro
  const handleFilterChange = (filter: 'all' | 'frontend' | 'backend' | 'fullstack') => {
    setActiveFilter(filter);
  };

  return (
    <div className="projects-page">
      <h1>Mis Proyectos</h1>
      
      <div className="projects-filter">
        <button 
          className={activeFilter === 'all' ? 'active' : ''}
          onClick={() => handleFilterChange('all')}
        >
          Todos
        </button>
        <button 
          className={activeFilter === 'frontend' ? 'active' : ''}
          onClick={() => handleFilterChange('frontend')}
        >
          Frontend
        </button>
        <button 
          className={activeFilter === 'backend' ? 'active' : ''}
          onClick={() => handleFilterChange('backend')}
        >
          Backend
        </button>
        <button 
          className={activeFilter === 'fullstack' ? 'active' : ''}
          onClick={() => handleFilterChange('fullstack')}
        >
          Fullstack
        </button>
      </div>

      <div className="projects-container">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-detail-card">
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.title} 
                onClick={() => window.open(project.demo || project.code, '_blank')}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
              
              <div className="project-details">
                <h3>Tecnologías utilizadas:</h3>
                <div className="tech-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                
                <h3>Características:</h3>
                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-links">
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="demo-link"
                  >
                    Ver Demo
                  </a>
                )}
                <a 
                  href={project.code} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="code-link"
                >
                  Código Fuente
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;