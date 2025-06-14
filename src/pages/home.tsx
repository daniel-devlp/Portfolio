import React from 'react';
import '../assets/styles/home.css';
import profileImage from '../assets/images/profile.png'; // Asegúrate de tener esta imagen
import oracle from '../assets/images/oracle.png'; 
import html from '../assets/images/html.png';// Asegúrate de tener esta imagen
import css from '../assets/images/css.png';// Asegúrate de tener esta imagen
import javascript from '../assets/images/javascript.png';// Asegúrate de tener esta imagen
import typescript from '../assets/images/typescript.png';// Asegúrate de tener esta imagen
import react from '../assets/images/react.png';// Asegúrate de tener esta imagen
import aspnet from '../assets/images/aspnet.png';// Asegúrate de tener esta imagen
import mongodb from '../assets/images/mongo.png';// Asegúrate de tener esta imagen
import postgresql from '../assets/images/postgresql.png';// Asegúrate de tener esta imagen
import git from '../assets/images/git.png';// Asegúrate de tener esta imagen
import sql_server from '../assets/images/sql_server.png';// Asegúrate de tener esta imagen
import facturacion from '../assets/images/Facturacion.png';// Asegúrate de tener esta imagen
import monketype from '../assets/images/monketype.png';// Asegúrate de tener esta imagen
const Home: React.FC = () => {
  // Datos de ejemplo - reemplaza con tus datos reales
  const projects = [
    {
      id: 1,
      title: "Pharmacy Management",
      description: "This project is a billing module designed for a pharmacy. It allows for simple and efficient management of customers, products, and invoice generation. It is developed in C# using Windows Forms as the graphical interface and SQL Server for database management.",
      image: facturacion,
      tags: ["C#", "Sql Server", "Windows Forms"],
      link: "https://github.com/daniel-devlp/Gestion-Farmacia"
    },
    {
      id: 2,
      title: "Monkeytype",
      description: "This project is a basic clone of Monkey Type, developed using pure HTML, CSS, and JavaScript. Its goal is to help users improve their typing speed and accuracy through a simple and clear interface.",
      image: monketype,
      tags: ["Html", "Css", "JavaScript"],
      link: "https://zippy-torrone-8b1b14.netlify.app/"
    }
    // Agrega más proyectos aquí
  ];


  const technologies = [
  {
    name: "HTML",
    icon: html // Ruta a tu imagen
  },
  {
    name: "CSS",
    icon: css // Ruta a tu imagen
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React",
    icon: react
  },
  {
    name: "AspNet ",
    icon: aspnet
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "PostgreSQL",
    icon: postgresql
  },
  {
    name: "Git",
    icon: git
  },
  
  {
    name: "Oracle",
    icon: oracle
  },
  {
    name: "Sql server",
    icon: sql_server
  }

  // Agrega más tecnologías
];

  return (
    <div className="home">
      {/* Sección de Información e Imagen */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Daniel Moyolema</h1>
          <h2>Full-stack Developer</h2>
          <p>Hello! I'm a full-stack software developer with experience building dynamic, 
            scalable, and secure web applications. I specialize in technologies such as React,
             Aspnet, relational and non-relational databases.</p>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Daniel Moyolema" />
        </div>
      </section>

      {/* Sección de Proyectos Destacados (tarjetas) */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
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
              <a href={project.link} className="project-link">View more</a>
            </div>
          ))}
        </div>
        
        <a href="/projects" className="see-more">View all projects</a>
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
          loading="lazy"
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