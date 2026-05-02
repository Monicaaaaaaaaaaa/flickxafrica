// Environment configuration
export const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 10000,
  },
  app: {
    name: import.meta.env.VITE_APP_NAME || 'FlickX Africa',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
    description: import.meta.env.VITE_APP_DESCRIPTION || 'Learn, Create, and Grow with African Creative Excellence',
    environment: import.meta.env.VITE_NODE_ENV || 'development',
  },
  analytics: {
    enabled: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    gaTrackingId: import.meta.env.VITE_GA_TRACKING_ID,
    hotjarId: import.meta.env.VITE_HOTJAR_ID,
  },
  features: {
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    errorReporting: import.meta.env.VITE_ENABLE_ERROR_REPORTING === 'true',
  },
  services: {
    stripe: {
      publicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY,
    },
    google: {
      clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    },
  },
  security: {
    allowedOrigins: import.meta.env.VITE_ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
  },
}

// Validation
export const validateConfig = () => {
  const required = ['api.baseUrl']
  const missing = required.filter(key => {
    const keys = key.split('.')
    let value = config
    for (const k of keys) {
      value = value[k]
      if (!value) return true
    }
    return false
  })
  
  if (missing.length > 0) {
    console.warn('Missing environment variables:', missing)
  }
  
  return missing.length === 0
}

// Initialize config validation
validateConfig()
