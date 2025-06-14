import React from 'react';
import '../assets/styles/about.css';
import profileImage from '../assets/images/profile.png';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-image">
          <img src={profileImage} alt="Daniel Moyolema" />
        </div>
        <div className="about-intro">
          <h1>Sobre Mí</h1>
          <p>
            Una introducción más detallada sobre quién eres, tu trayectoria profesional, 
            tus intereses en el desarrollo de software y lo que te motiva.
          </p>
          <button 
           className="download-cv-button" 
           onClick={() => {
            const link = document.createElement('a');
            link.href = '/path-to-your-cv/cv.pdf'; // Ruta al archivo
            link.download = 'FullStack_Daniel_Moyolema_CV.pdf'; // Nombre del archivo
            link.click();
  }}
>
  Descargar CV
</button>
        </div>
      </section>

      <section className="about-details">
        <div className="about-experience">
          <h2>Mi Experiencia</h2>
          <div className="timeline">
            {/* Ejemplo de item de experiencia */}
            <div className="timeline-item">
              <h3>Puesto de Trabajo</h3>
              <p className="company">Nombre de la Empresa</p>
              <p className="date">2020 - Presente</p>
              <ul className="responsibilities">
                <li>Responsabilidad 1</li>
                <li>Responsabilidad 2</li>
                <li>Responsabilidad 3</li>
              </ul>
            </div>
            {/* Agrega más experiencias */}
          </div>
        </div>

        <div className="about-education">
          <h2>Educación</h2>
          <div className="education-item">
            <h3>Título Obtenido</h3>
            <p className="institution">Nombre de la Institución</p>
            <p className="date">Año de Graduación</p>
          </div>
          {/* Agrega más educación */}
        </div>

      </section>
    </div>
  );
};

export default About;