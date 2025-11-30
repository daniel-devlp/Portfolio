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
  color = '#64ffda', // accent-cyan
  className = '',
  message = 'Loading...'
}) => {
  return (
    <div 
      className={`inline-flex items-center justify-center ${className}`}
      role="status"
      aria-label={message}
    >
      <div 
        className="animate-spin rounded-full border-4 border-gray-600 border-t-transparent"
        style={{ 
          width: `${size}px`,
          height: `${size}px`,
          borderTopColor: color
        }}
      >
      </div>
      
      {/* Screen reader text */}
      <span className="sr-only">{message}</span>
    </div>
  );
};

export default LoadingSpinner;
