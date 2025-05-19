import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Footer from './components/footer';
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/aboutme';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            
            {/* Ruta para manejar páginas no encontradas */}
            <Route path="*" element={
              <div className="not-found">
                <h2>404 - Página no encontrada</h2>
                <p>La página que buscas no existe.</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        {/* Puedes añadir un footer aquí si lo necesitas */}
      </div>
    </Router>
  );
};

export default App;
