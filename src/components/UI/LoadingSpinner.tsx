/**
 * Loading Spinner Component
 * 
 * A modern, animated loading spinner used throughout the application
 * for loading states and transitions.
 * 
 * Features:
 * - Smooth CSS animations
 * - Accessible with screen reader support
 * - Customizable size and color
 * - Respects user's motion preferences
 */

import React from 'react';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  /** Size of the spinner in pixels */
  size?: number;
  /** Custom color for the spinner */
  color?: string;
  /** Additional CSS classes */
  className?: string;
  /** Loading message for screen readers */
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 40,
  color = 'var(--color-accent-500)',
  className = '',
  message = 'Loading...'
}) => {
  return (
    <div 
      className={`loading-spinner ${className}`}
      role="status"
      aria-label={message}
      style={{ 
        '--spinner-size': `${size}px`,
        '--spinner-color': color 
      } as React.CSSProperties}
    >
      <div className="loading-spinner__circle">
        <div className="loading-spinner__inner"></div>
      </div>
      
      {/* Screen reader text */}
      <span className="visually-hidden">{message}</span>
    </div>
  );
};

export default LoadingSpinner;
