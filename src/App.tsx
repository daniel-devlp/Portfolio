/**
 * Main Application Component
 * 
 * This is the root component that sets up routing and global layout.
 * It includes:
 * - React Router for navigation
 * - Global layout structure (header, main, footer)
 * - Error boundary for handling unexpected errors
 * - 404 page for unmatched routes
 * 
 * @author Daniel Moyolema
 * @version 2.0.0
 */

import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import global styles
import './styles/globals.css';

// Import components
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import LoadingSpinner from './components/UI/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const Projects = React.lazy(() => import('./pages/Projects/Projects'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

/**
 * ScrollToTop component - scrolls to top on route change
 * This ensures users start at the top of each page
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/**
 * Main App Layout Component
 * Renders the core application structure
 */
const AppLayout: React.FC = () => {
  return (
    <div className="app">
      <ScrollToTop />
      
      {/* 
        Navigation Header
        - Sticky positioning for always-visible navigation
        - Contains logo and main navigation links
      */}
      <Navbar />
      
      {/* 
        Main Content Area
        - Contains all page content
        - Uses semantic HTML for accessibility
        - Suspense boundary for lazy-loaded components
      */}
      <main className="main-content" role="main">
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Primary Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* 404 Fallback Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      
      {/* 
        Footer Section
        - Contains contact information and social links
        - Copyright and additional navigation
      */}
      <Footer />
    </div>
  );
};

/**
 * Root App Component
 * Sets up React Router and provides the routing context
 */
const App: React.FC = () => {
  // Set up global document title and meta information
  useEffect(() => {
    document.title = 'Daniel Moyolema - Full-Stack Developer';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        'Full-stack developer specializing in React, .NET, and modern web technologies. View my portfolio and projects.'
      );
    }
  }, []);

  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
