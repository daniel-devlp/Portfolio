/**
 * Application constants and configuration
 * This file contains all static data and configuration values
 */

import { NavItem, Technology, Project } from '../types';

// Import technology icons
import htmlIcon from '../assets/images/html.png';
import cssIcon from '../assets/images/css.png';
import javascriptIcon from '../assets/images/javascript.png';
import typescriptIcon from '../assets/images/typescript.png';
import reactIcon from '../assets/images/react.png';
import aspnetIcon from '../assets/images/aspnet.png';
import mongodbIcon from '../assets/images/mongo.png';
import postgresqlIcon from '../assets/images/postgresql.png';
import gitIcon from '../assets/images/git.png';
import sqlServerIcon from '../assets/images/sql_server.png';
import oracleIcon from '../assets/images/oracle.png';

// Import project images
import facturacionImage from '../assets/images/Facturacion.png';
import monketypeImage from '../assets/images/monketype.png';

// WhatsApp configuration
export const WHATSAPP_CONFIG = {
  number: '593988162040',
  message: `Hola Daniel, he revisado tu portafolio y me ha impresionado tu trabajo como desarrollador de software. Estoy interesado/a en explorar una colaboración profesional.

Tipo de proyecto:
[ ] Desarrollo de aplicación/software
[ ] Consultoría técnica o arquitectura
[ ] Colaboración en equipo de desarrollo
[ ] Otro: ____________

Detalles técnicos:
• Stack tecnológico preferido: ____________
• Alcance estimado: ____________
• Timeline tentativo: ____________

¿Tendrías disponibilidad para una breve reunión la próxima semana para discutir los requerimientos técnicos?`,
  formatMessage: (customMessage?: string) => {
    const message = customMessage || WHATSAPP_CONFIG.message;
    return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(message)}`;
  }
} as const;

// Personal information
export const PERSONAL_INFO = {
  name: 'Daniel Moyolema',
  title: 'Full-Stack Developer',
  whatsapp: '+593988162040',
  phone: '+593988162040',
  location: 'Ecuador',
  bio: `Passionate full-stack developer with expertise in modern web technologies. 
        I create scalable, user-focused applications using React, .NET, and various databases. 
        Always eager to learn new technologies and solve complex problems.`,
  resume: '/assets/Daniel_Moyolema_Resume.pdf', // TODO: Add actual resume file to public/assets folder
  social: {
    linkedin: 'https://www.linkedin.com/in/dannydevlp/',
    github: 'https://github.com/daniel-devlp',
    twitter: '', // TODO: Add if available
    portfolio: 'https://your-portfolio.com' // TODO: Update with real URL
  }
} as const;

// Navigation configuration
export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/'
  },
  {
    id: 'about',
    label: 'About',
    path: '/about'
  },
  {
    id: 'projects',
    label: 'Projects',
    path: '/projects'
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact'
  }
];

// Technologies/Skills data
export const TECHNOLOGIES: Technology[] = [
  {
    id: 'html',
    name: 'HTML5',
    icon: htmlIcon,
    category: 'frontend',
    proficiency: 'advanced',
    color: '#E34F26'
  },
  {
    id: 'css',
    name: 'CSS3',
    icon: cssIcon,
    category: 'frontend',
    proficiency: 'advanced',
    color: '#1572B6'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: javascriptIcon,
    category: 'frontend',
    proficiency: 'advanced',
    color: '#F7DF1E'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: typescriptIcon,
    category: 'frontend',
    proficiency: 'intermediate',
    color: '#3178C6'
  },
  {
    id: 'react',
    name: 'React',
    icon: reactIcon,
    category: 'frontend',
    proficiency: 'advanced',
    color: '#61DAFB'
  },
  {
    id: 'aspnet',
    name: 'ASP.NET',
    icon: aspnetIcon,
    category: 'backend',
    proficiency: 'intermediate',
    color: '#512BD4'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    icon: mongodbIcon,
    category: 'database',
    proficiency: 'intermediate',
    color: '#47A248'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: postgresqlIcon,
    category: 'database',
    proficiency: 'intermediate',
    color: '#336791'
  },
  {
    id: 'sqlserver',
    name: 'SQL Server',
    icon: sqlServerIcon,
    category: 'database',
    proficiency: 'intermediate',
    color: '#CC2927'
  },
  {
    id: 'oracle',
    name: 'Oracle',
    icon: oracleIcon,
    category: 'database',
    proficiency: 'beginner',
    color: '#F80000'
  },
  {
    id: 'git',
    name: 'Git',
    icon: gitIcon,
    category: 'devtools',
    proficiency: 'advanced',
    color: '#F05032'
  }
];

// Projects data
export const PROJECTS: Project[] = [
  {
    id: 'pharmacy-management',
    title: 'Pharmacy Management System',
    description: `A comprehensive billing and inventory management solution designed specifically for pharmacies. 
                  This system streamlines customer management, product tracking, and invoice generation with an 
                  intuitive Windows Forms interface. Features include real-time inventory updates, customer history 
                  tracking, automated billing calculations, and detailed reporting capabilities.`,
    shortDescription: 'Complete pharmacy management solution with billing and inventory features.',
    image: facturacionImage,
    tags: ['C#', 'SQL Server', 'Windows Forms', 'Desktop App'],
    githubUrl: 'https://github.com/daniel-devlp/Gestion-Farmacia',
    githubLink: 'https://github.com/daniel-devlp/Gestion-Farmacia',
    featured: true,
    completedDate: '2024-01',
    technologies: ['SQL Server', 'C#', 'Windows Forms'],
    features: [
      'Real-time inventory management',
      'Customer billing and invoicing',
      'Product catalog management',
      'Sales reporting and analytics',
      'Customer history tracking',
      'Automated stock alerts'
    ]
  },
  {
    id: 'monkeytype-clone',
    title: 'MonkeyType Clone',
    description: `A faithful recreation of the popular MonkeyType typing test application. Built with vanilla 
                  JavaScript to demonstrate core web development skills without relying on frameworks. Features 
                  include multiple test modes, real-time WPM calculation, accuracy tracking, and a clean, 
                  distraction-free interface that helps users improve their typing speed and accuracy.`,
    shortDescription: 'Typing speed test application with real-time analytics.',
    image: monketypeImage,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Web App'],
    liveUrl: 'https://zippy-torrone-8b1b14.netlify.app/',
    demoLink: 'https://zippy-torrone-8b1b14.netlify.app/',
    githubUrl: 'https://github.com/daniel-devlp/monkeytype-clone',
    githubLink: 'https://github.com/daniel-devlp/monkeytype-clone',
    featured: true,
    completedDate: '2023-12',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Multiple typing test modes',
      'Real-time WPM calculation',
      'Accuracy tracking',
      'Customizable test length',
      'Clean, distraction-free UI',
      'Responsive design'
    ]
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: `A modern, responsive portfolio website built with React and TypeScript. Features a clean design 
                  with smooth animations, dark/light theme support, and optimized performance. Showcases projects, 
                  skills, and professional experience with an elegant user interface that adapts to all devices.`,
    shortDescription: 'Modern React portfolio with animations and responsive design.',
    image: reactIcon, // Using React icon as placeholder
    tags: ['React', 'TypeScript', 'CSS3', 'Responsive'],
    liveUrl: '#',
    githubUrl: 'https://github.com/daniel-devlp/portfolio',
    featured: true,
    completedDate: '2024-02',
    technologies: ['React', 'TypeScript', 'CSS3'],
    features: [
      'Responsive design',
      'Smooth animations',
      'Modern UI/UX',
      'TypeScript integration',
      'Performance optimized',
      'SEO friendly'
    ]
  },
  {
    id: 'task-manager',
    title: 'Task Management App',
    description: `A comprehensive task management application built with React and ASP.NET Core. Features include 
                  project organization, team collaboration, deadline tracking, and progress monitoring. The app 
                  provides an intuitive interface for managing tasks across multiple projects with real-time updates.`,
    shortDescription: 'Full-stack task management with team collaboration features.',
    image: aspnetIcon, // Using ASP.NET icon as placeholder
    tags: ['React', 'ASP.NET Core', 'SQL Server', 'Full-Stack'],
    githubUrl: 'https://github.com/daniel-devlp/task-manager',
    featured: false,
    completedDate: '2023-11',
    technologies: ['React', 'ASP.NET Core', 'SQL Server'],
    features: [
      'Project organization',
      'Team collaboration',
      'Deadline tracking',
      'Progress monitoring',
      'Real-time updates',
      'Role-based access'
    ]
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: `A beautiful weather application that provides detailed weather information with interactive maps 
                  and forecasts. Built with React and integrated with multiple weather APIs for accurate data. 
                  Features include location-based weather, 7-day forecasts, and weather alerts.`,
    shortDescription: 'Interactive weather dashboard with forecasts and maps.',
    image: javascriptIcon, // Using JavaScript icon as placeholder
    tags: ['React', 'APIs', 'Maps', 'Weather'],
    liveUrl: '#',
    githubUrl: 'https://github.com/daniel-devlp/weather-app',
    featured: false,
    completedDate: '2023-10',
    technologies: ['React', 'JavaScript', 'CSS3'],
    features: [
      'Location-based weather',
      '7-day forecasts',
      'Interactive maps',
      'Weather alerts',
      'Multiple locations',
      'Mobile responsive'
    ]
  },
  {
    id: 'ecommerce-api',
    title: 'E-commerce API',
    description: `A robust RESTful API for e-commerce applications built with ASP.NET Core and Entity Framework. 
                  Includes authentication, product management, order processing, and payment integration. 
                  Designed with clean architecture principles and comprehensive documentation.`,
    shortDescription: 'RESTful API for e-commerce with authentication and payments.',
    image: aspnetIcon, // Using ASP.NET icon as placeholder
    tags: ['ASP.NET Core', 'API', 'Entity Framework', 'Backend'],
    githubUrl: 'https://github.com/daniel-devlp/ecommerce-api',
    featured: false,
    completedDate: '2023-09',
    technologies: ['ASP.NET Core', 'SQL Server', 'Entity Framework'],
    features: [
      'RESTful API design',
      'JWT authentication',
      'Product management',
      'Order processing',
      'Payment integration',
      'Swagger documentation'
    ]
  }
  // TODO: Add more projects as they are completed
];

// Animation configuration
export const ANIMATION_CONFIG = {
  // Entrance animations
  fadeInUp: {
    duration: 0.6,
    delay: 0.1,
    easing: 'ease-out'
  },
  slideInLeft: {
    duration: 0.8,
    delay: 0.2,
    easing: 'ease-out'
  },
  slideInRight: {
    duration: 0.8,
    delay: 0.2,
    easing: 'ease-out'
  },
  // Hover animations
  scaleOnHover: {
    duration: 0.3,
    easing: 'ease-in-out'
  },
  // Stagger animations for lists
  staggerChildren: {
    duration: 0.1,
    easing: 'ease-out'
  }
} as const;

// Breakpoints for responsive design
export const BREAKPOINTS = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px',
  large: '1400px'
} as const;
