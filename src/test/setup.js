import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
global.localStorage = localStorageMock

// Mock fetch
global.fetch = vi.fn()

// Mock window.gtag for analytics
global.gtag = vi.fn()

// Mock environment variables
vi.mock('../config/env', () => ({
  config: {
    api: {
      baseUrl: 'http://localhost:3001/api',
      timeout: 10000,
    },
    app: {
      name: 'FlickX Africa',
      version: '1.0.0',
      description: 'Learn, Create, and Grow with African Creative Excellence',
      environment: 'test',
    },
    analytics: {
      enabled: false,
      gaTrackingId: null,
      hotjarId: null,
    },
    features: {
      analytics: false,
      errorReporting: false,
    },
    services: {
      stripe: {
        publicKey: null,
      },
      google: {
        clientId: null,
      },
    },
    security: {
      allowedOrigins: ['http://localhost:3000'],
    },
  },
  validateConfig: vi.fn(),
}))

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }) => children,
}))

// Mock axios
vi.mock('axios', () => ({
  default: {
    create: vi.fn(() => ({
      get: vi.fn(),
      post: vi.fn(),
      put: vi.fn(),
      delete: vi.fn(),
      interceptors: {
        request: { use: vi.fn() },
        response: { use: vi.fn() },
      },
    })),
    isCancel: vi.fn(),
    CancelToken: {
      source: vi.fn(() => ({ token: 'test-token', cancel: vi.fn() })),
    },
  },
}))

// Setup cleanup
afterEach(() => {
  vi.clearAllMocks()
})
