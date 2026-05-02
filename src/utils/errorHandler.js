import { config } from '../config/env'

class ErrorHandler {
  constructor() {
    this.errors = []
    this.maxErrors = 50
  }

  log(error, context = {}) {
    const errorInfo = {
      message: error.message || error,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: {
        url: window.location.href,
        userAgent: navigator.userAgent,
        ...context
      }
    }

    this.errors.push(errorInfo)
    
    if (this.errors.length > this.maxErrors) {
      this.errors.shift()
    }

    if (!import.meta.env.PROD) {
      console.error('Application Error:', errorInfo)
    }

    if (import.meta.env.PROD && config.features.errorReporting) {
      this.sendToMonitoring(errorInfo)
    }
  }

  async sendToMonitoring(errorInfo) {
    try {
      if (window.gtag && config.analytics.gaTrackingId) {
        window.gtag('event', 'exception', {
          description: errorInfo.message,
          fatal: false
        })
      }

      } catch (e) {
      console.error('Failed to send error to monitoring:', e)
    }
  }

  getRecentErrors() {
    return this.errors.slice(-10)
  }

  clearErrors() {
    this.errors = []
  }

  handleApiError(error, requestInfo = {}) {
    const context = {
      type: 'api_error',
      status: error.response?.status,
      statusText: error.response?.statusText,
      url: error.config?.url,
      method: error.config?.method,
      ...requestInfo
    }

    this.log(error, context)
    if (error.response?.status === 401) {
      return 'Authentication required. Please log in again.'
    } else if (error.response?.status === 403) {
      return 'You do not have permission to perform this action.'
    } else if (error.response?.status === 404) {
      return 'The requested resource was not found.'
    } else if (error.response?.status >= 500) {
      return 'Server error. Please try again later.'
    } else if (error.code === 'NETWORK_ERROR') {
      return 'Network error. Please check your connection.'
    } else {
      return 'An unexpected error occurred. Please try again.'
    }
  }

  handleValidationError(error) {
    const context = {
      type: 'validation_error',
      fields: error.errors || []
    }

    this.log(error, context)
    return error.message || 'Please check your input and try again.'
  }
}

export const errorHandler = new ErrorHandler()

window.addEventListener('error', (event) => {
  errorHandler.log(event.error, {
    type: 'unhandled_error',
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno
  })
})

window.addEventListener('unhandledrejection', (event) => {
  errorHandler.log(event.reason, {
    type: 'unhandled_promise_rejection'
  })
})

export default ErrorHandler
