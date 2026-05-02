import axios from 'axios'
import { config } from '../config/env'
import { errorHandler } from '../utils/errorHandler'

const api = axios.create({
  baseURL: config.api.baseUrl,
  timeout: config.api.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    config.metadata = { startTime: new Date() }

    if (!import.meta.env.PROD) {
      console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`)
    }

    return config
  },
  (error) => {
    console.error('Request interceptor error:', error)
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    const duration = new Date() - response.config.metadata.startTime
    
    if (!import.meta.env.PROD) {
      console.log(`✅ API Response: ${response.config.method?.toUpperCase()} ${response.config.url} (${duration}ms)`)
    }

    return response
  },
  async (error) => {
    const originalRequest = error.config

    if (error.code === 'ECONNABORTED') {
      error.message = 'Request timeout. Please try again.'
    } else if (error.code === 'NETWORK_ERROR') {
      error.message = 'Network error. Please check your connection.'
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refreshToken = localStorage.getItem('refreshToken')
        if (refreshToken) {
          const response = await axios.post(`${config.api.baseUrl}/auth/refresh`, {
            refreshToken
          })

          const { token } = response.data
          localStorage.setItem('authToken', token)

          originalRequest.headers.Authorization = `Bearer ${token}`
          return api(originalRequest)
        }
      } catch (refreshError) {
        localStorage.removeItem('authToken')
        localStorage.removeItem('refreshToken')
        window.location.href = '/login'
        return Promise.reject(refreshError)
      }
    }

    const errorMessage = errorHandler.handleApiError(error, {
      url: originalRequest?.url,
      method: originalRequest?.method
    })

    error.userMessage = errorMessage

    return Promise.reject(error)
  }
)

export const apiMethods = {
  auth: {
    login: (credentials) => api.post('/auth/login', credentials),
    register: (userData) => api.post('/auth/register', userData),
    logout: () => api.post('/auth/logout'),
    refresh: (refreshToken) => api.post('/auth/refresh', { refreshToken }),
    forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
    resetPassword: (token, password) => api.post('/auth/reset-password', { token, password }),
  },

  users: {
    getProfile: () => api.get('/users/profile'),
    updateProfile: (userData) => api.put('/users/profile', userData),
    deleteAccount: () => api.delete('/users/account'),
  },

  courses: {
    getAll: (params = {}) => api.get('/courses', { params }),
    getById: (id) => api.get(`/courses/${id}`),
    enroll: (courseId) => api.post(`/courses/${courseId}/enroll`),
    unenroll: (courseId) => api.delete(`/courses/${courseId}/enroll`),
    getProgress: (courseId) => api.get(`/courses/${courseId}/progress`),
    updateProgress: (courseId, progress) => api.put(`/courses/${courseId}/progress`, progress),
  },

  studio: {
    getServices: () => api.get('/studio/services'),
    bookService: (bookingData) => api.post('/studio/bookings', bookingData),
    getBookings: () => api.get('/studio/bookings'),
    cancelBooking: (bookingId) => api.delete(`/studio/bookings/${bookingId}`),
  },

  talent: {
    getProfile: () => api.get('/talent/profile'),
    updateProfile: (profileData) => api.put('/talent/profile', profileData),
    getJobs: (params = {}) => api.get('/talent/jobs', { params }),
    applyJob: (jobId, applicationData) => api.post(`/talent/jobs/${jobId}/apply`, applicationData),
    getApplications: () => api.get('/talent/applications'),
  },

  fund: {
    getCampaigns: () => api.get('/fund/campaigns'),
    createCampaign: (campaignData) => api.post('/fund/campaigns', campaignData),
    donate: (campaignId, donationData) => api.post(`/fund/campaigns/${campaignId}/donate`, donationData),
    getDonations: (campaignId) => api.get(`/fund/campaigns/${campaignId}/donations`),
  },

  creativeBase: {
    getReports: () => api.get('/creative-base/reports'),
    uploadReport: (formData) => api.post('/creative-base/reports', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }),
    deleteReport: (reportId) => api.delete(`/creative-base/reports/${reportId}`),
  },

  lms: {
    getDashboard: () => api.get('/lms/dashboard'),
    getAssignments: () => api.get('/lms/assignments'),
    submitAssignment: (assignmentId, submissionData) => api.post(`/lms/assignments/${assignmentId}/submit`, submissionData),
    getGrades: () => api.get('/lms/grades'),
  },

  admin: {
    getUsers: (params = {}) => api.get('/admin/users', { params }),
    updateUser: (userId, userData) => api.put(`/admin/users/${userId}`, userData),
    deleteUser: (userId) => api.delete(`/admin/users/${userId}`),
    getAnalytics: () => api.get('/admin/analytics'),
    getSettings: () => api.get('/admin/settings'),
    updateSettings: (settings) => api.put('/admin/settings', settings),
  }
}

export const apiUtils = {
  createCancelToken: () => axios.CancelToken.source(),

  isCancel: axios.isCancel,

  setAuthToken: (token) => {
    localStorage.setItem('authToken', token)
  },

  removeAuthToken: () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('refreshToken')
  },

  getAuthToken: () => localStorage.getItem('authToken'),

  isAuthenticated: () => !!localStorage.getItem('authToken'),

  healthCheck: async () => {
    try {
      const response = await api.get('/health')
      return response.status === 200
    } catch (error) {
      return false
    }
  }
}

export default api
