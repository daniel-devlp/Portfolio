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
        <div className="min-h-screen flex items-center justify-center bg-black bg-gradient-dark p-4">
          <div className="max-w-md w-full bg-gradient-card-dark backdrop-blur-xl border border-border-light rounded-xl p-8 text-center shadow-2xl">
            <div className="mb-6 flex justify-center">
              <svg 
                width="64" 
                height="64" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                className="text-red-500"
              >
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h2>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              We're sorry for the inconvenience. An unexpected error occurred while loading this page.
            </p>

            {/* Show error details in development */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <summary className="cursor-pointer text-red-400 font-medium mb-2">Error Details (Development)</summary>
                <pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button 
                onClick={this.handleRetry}
                className="flex-1 px-6 py-3 bg-accent-cyan text-gray-900 font-semibold rounded-xl hover:bg-accent-cyan/90 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/25"
                type="button"
              >
                Try Again
              </button>
              
              <button 
                onClick={this.handleReload}
                className="flex-1 px-6 py-3 bg-transparent border-2 border-accent-cyan text-accent-cyan font-semibold rounded-xl hover:bg-accent-cyan hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/25"
                type="button"
              >
                Reload Page
              </button>
            </div>

            <p className="text-sm text-text-secondary">
              If the problem persists, please{' '}
              <a 
                href="mailto:your.email@example.com" 
                className="text-accent-cyan hover:text-accent-cyan/80 transition-colors underline"
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
