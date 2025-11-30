/**
 * Home Page Component
 * 
 * The main landing page showcasing:
 * - Hero section with introduction and profile
 * - Featured projects
 * - Skills and technologies
 * - Call-to-action sections
 * 
 * Features modern animations, responsive design, and performance optimizations.
 * 
 * @author Daniel Moyolema
 */

import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import SkillsSection from './components/SkillsSection';
import CTASection from './components/CTASection';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show content immediately on mount, with a minimal delay for smooth animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`min-h-screen pt-16 bg-black ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Hero Section - Personal introduction and call-to-action */}
      <HeroSection />

      {/* Featured Projects - Showcase of recent work */}
      <FeaturedProjects />

      {/* Skills Section - Technical expertise display */}
      <SkillsSection />

      {/* Call-to-Action - Contact encouragement */}
      <CTASection />
    </main>
  );
};

export default Home;
