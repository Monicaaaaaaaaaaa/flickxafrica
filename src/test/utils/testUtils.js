import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ErrorBoundary } from 'react-error-boundary'
import React from 'react'

// Test wrapper with providers
export const TestWrapper = ({ children }) => (
  <HelmetProvider>
    <BrowserRouter>
      <ErrorBoundary fallback={<div>Error boundary fallback</div>}>
        {children}
      </ErrorBoundary>
    </BrowserRouter>
  </HelmetProvider>
)

// Custom render function
export const renderWithProviders = (ui, options = {}) => {
  return render(ui, { wrapper: TestWrapper, ...options })
}

// Mock API responses
export const mockApiResponse = (data, status = 200) => {
  return Promise.resolve({
    status,
    data,
    headers: {},
    config: {},
    statusText: 'OK',
  })
}

// Mock API error
export const mockApiError = (message = 'API Error', status = 500) => {
  const error = new Error(message)
  error.response = { status, statusText: 'Error' }
  error.config = {}
  return Promise.reject(error)
}

// Fire event helpers
export const clickElement = (element) => {
  fireEvent.click(element)
}

export const typeIntoElement = (element, text) => {
  fireEvent.change(element, { target: { value: text } })
}

export const submitForm = (form) => {
  fireEvent.submit(form)
}

// Wait for element to appear
export const waitForElement = async (element) => {
  return await waitFor(() => screen.getByTestId(element))
}

// Check if element is in DOM
export const elementExists = (element) => {
  return screen.queryByTestId(element) !== null
}

// Mock user data
export const mockUser = {
  id: 1,
  name: 'Test User',
  email: 'test@example.com',
  role: 'user',
  createdAt: '2024-01-01T00:00:00.000Z',
}

// Mock course data
export const mockCourse = {
  id: 1,
  title: 'Test Course',
  description: 'Test course description',
  instructor: 'Test Instructor',
  progress: 50,
  modulesCompleted: 5,
  totalModules: 10,
  image: '/test-course.jpg',
}

// Mock studio service data
export const mockStudioService = {
  id: 1,
  title: 'Film Production',
  description: 'Professional film production services',
  price: 1000,
  duration: '2 days',
}

// Mock talent job data
export const mockTalentJob = {
  id: 1,
  title: 'Video Editor',
  company: 'Test Company',
  location: 'Remote',
  type: 'Full-time',
  description: 'Test job description',
  requirements: ['Test requirement 1', 'Test requirement 2'],
  salary: '$50,000 - $70,000',
}

// Mock fund campaign data
export const mockFundCampaign = {
  id: 1,
  title: 'Test Campaign',
  description: 'Test campaign description',
  goal: 10000,
  raised: 5000,
  endDate: '2024-12-31',
  creator: 'Test Creator',
}

// Mock report data
export const mockReport = {
  id: 1,
  title: 'Test Report',
  description: 'Test report description',
  fileName: 'test-report.pdf',
  fileSize: '2.5 MB',
  uploadDate: '2024-01-01',
}

// Helper to mock localStorage
export const mockLocalStorage = () => {
  const store = {}
  return {
    getItem: vi.fn((key) => store[key] || null),
    setItem: vi.fn((key, value) => {
      store[key] = value.toString()
    }),
    removeItem: vi.fn((key) => {
      delete store[key]
    }),
    clear: vi.fn(() => {
      Object.keys(store).forEach(key => delete store[key])
    }),
  }
}

// Helper to mock fetch
export const mockFetch = (response, options = {}) => {
  global.fetch.mockResolvedValueOnce({
    ok: true,
    status: 200,
    json: () => Promise.resolve(response),
    ...options,
  })
}

// Helper to test async operations
export const testAsyncOperation = async (operation, expectedValue) => {
  const result = await operation
  expect(result).toEqual(expectedValue)
}

// Helper to test error scenarios
export const testErrorScenario = async (operation, expectedError) => {
  await expect(operation).rejects.toThrow(expectedError)
}

// Helper to test loading states
export const testLoadingState = async (ui, loadingTestId) => {
  renderWithProviders(ui)
  expect(screen.getByTestId(loadingTestId)).toBeInTheDocument()
}

// Helper to test form validation
export const testFormValidation = async (formElement, validationRules) => {
  const { getByLabelText, getByRole } = screen
  
  // Test each validation rule
  for (const [field, rule] of Object.entries(validationRules)) {
    const input = getByLabelText(field)
    
    // Test invalid input
    fireEvent.change(input, { target: { value: rule.invalid } })
    fireEvent.blur(input)
    
    // Check for error message
    if (rule.errorMessage) {
      expect(screen.getByText(rule.errorMessage)).toBeInTheDocument()
    }
    
    // Test valid input
    fireEvent.change(input, { target: { value: rule.valid } })
    fireEvent.blur(input)
    
    // Check error message is gone
    if (rule.errorMessage) {
      expect(screen.queryByText(rule.errorMessage)).not.toBeInTheDocument()
    }
  }
}
