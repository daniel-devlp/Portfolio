/**
 * Error Boundary Component
 * 
 * React Error Boundary to catch JavaScript errors anywhere in the component tree,
 * log those errors, and display a fallback UI instead of crashing the whole app.
 * 
 * Features:
 * - Catches and handles React component errors
 * - Provides user-friendly error messages
 * - Allows error recovery with retry functionality
 * - Logs errors for debugging
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';
import './ErrorBoundary.css';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  /**
   * Static method called when an error occurs
   * Updates state to render fallback UI
   */
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  /**
   * Called when an error is caught
   * Used for error logging and reporting
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by ErrorBoundary:', error);
      console.error('Error info:', errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // TODO: Log to error reporting service in production
    // Example: Sentry, LogRocket, etc.
  }

  /**
   * Resets the error boundary state
   * Allows users to retry after an error
   */
  private handleRetry = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  /**
   * Reloads the entire page
   * Last resort for error recovery
   */
  private handleReload = (): void => {
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Custom fallback UI provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="error-boundary">
          <div className="error-boundary__content">
            <div className="error-boundary__icon">
              <svg 
                width="64" 
                height="64" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                className="error-boundary__icon-svg"
              >
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            
            <h2 className="error-boundary__title">
              Oops! Something went wrong
            </h2>
            
            <p className="error-boundary__message">
              We're sorry for the inconvenience. An unexpected error occurred while loading this page.
            </p>

            {/* Show error details in development */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="error-boundary__details">
                <summary>Error Details (Development)</summary>
                <pre className="error-boundary__error-text">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="error-boundary__actions">
              <button 
                onClick={this.handleRetry}
                className="error-boundary__button error-boundary__button--primary"
                type="button"
              >
                Try Again
              </button>
              
              <button 
                onClick={this.handleReload}
                className="error-boundary__button error-boundary__button--secondary"
                type="button"
              >
                Reload Page
              </button>
            </div>

            <p className="error-boundary__help">
              If the problem persists, please{' '}
              <a 
                href="mailto:your.email@example.com" 
                className="error-boundary__link"
              >
                contact support
              </a>
              {' '}or try refreshing your browser.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
