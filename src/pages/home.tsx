import React from 'react';
import '../assets/styles/home.css';
import profileImage from '../assets/images/profile.png'; // Asegúrate de tener esta imagen

const Home: React.FC = () => {
  // Datos de ejemplo - reemplaza con tus datos reales
  const projects = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Descripción breve del proyecto",
      image: "url-de-la-imagen",
      tags: ["React", "Node.js"],
      link: "#"
    },
    // Agrega más proyectos aquí
  ];

  const skills = [
    "Trabajo en equipo",
    "Comunicación efectiva",
    "Resolución de problemas",
    "Gestión del tiempo",
    "Adaptabilidad"
  ];

  const technologies = [
  {
    name: "HTML/CSS",
    icon: "/images/tech-icons/html-css.png" // Ruta a tu imagen
  },
  {
    name: "JavaScript",
    icon: "/images/tech-icons/javascript.png"
  },
  {
    name: "TypeScript",
    icon: "/images/tech-icons/typescript.png"
  },
  {
    name: "React",
    icon: "/images/tech-icons/react.png"
  },
  {
    name: "Node.js",
    icon: "/images/tech-icons/nodejs.png"
  },
  // Agrega más tecnologías
];

  return (
    <div className="home">
      {/* Sección de Información e Imagen */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Daniel Moyolema</h1>
          <h2>Desarrollador Web Fullstack</h2>
          <p>Breve introducción sobre ti, tu experiencia y lo que te apasiona en el desarrollo de software.</p>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Daniel Moyolema" />
        </div>
      </section>

      {/* Sección de Habilidades No Técnicas */}
      <section className="soft-skills">
               <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Proyectos Destacados (tarjetas) */}
      <section className="featured-projects">
        <h2>Proyectos Destacados</h2>
        <div className="projects-grid">
          {projects.slice(0, 3).map(project => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">Ver más</a>
            </div>
          ))}
        </div>
        
        <div className="projects-grid">
          {projects.slice(0, 3).map(project => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">Ver más</a>
            </div>
          ))}
        </div>
        <a href="/projects" className="see-more">Ver todos los proyectos</a>
      </section>

      {/* Sección de Tecnologías */}
     <section className="technologies">
  <h2>Software Skills</h2>
  <div className="tech-grid">
    {technologies.map((tech, index) => (
      <div key={index} className="tech-item">
        <img 
          src={tech.icon} 
          alt={tech.name} 
          className="tech-icon"
        />
        <span className="tech-name">{tech.name}</span>
      </div>
    ))}
  </div>
</section>
     
    </div>
  );
};

export default Home;