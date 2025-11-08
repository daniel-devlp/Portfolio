/**
 * Type definitions for the portfolio application
 * This file contains all TypeScript interfaces and types used throughout the application
 */

// Project-related types
export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  demoLink?: string;
  githubLink?: string;
  featured: boolean;
  completedDate: string;
  technologies: string[];
  features?: string[];
}

// Technology/Skill types
export interface Technology {
  id: string;
  name: string;
  icon: string;
  category: TechnologyCategory;
  proficiency: ProficiencyLevel;
  color?: string;
}

export type TechnologyCategory = 
  | 'frontend' 
  | 'backend' 
  | 'database' 
  | 'devtools' 
  | 'cloud'
  | 'mobile';

export type ProficiencyLevel = 
  | 'beginner' 
  | 'intermediate' 
  | 'advanced' 
  | 'expert';

// Navigation and UI types
export interface NavItem {
  id: string;
  label: string;
  path: string;
  external?: boolean;
}

// Contact form types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Animation types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
}

// Theme types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
}
