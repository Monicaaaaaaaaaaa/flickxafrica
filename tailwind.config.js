/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      colors: {
        'deep-blue': '#0057A0',
        'sky-blue': '#32A8E0',
        'navy-blue': '#1e3a8a',
        'light-blue': '#3b82f6',
        'charcoal': '#2D3748',
        'soft-white': '#F8FAFC',
        'accent-yellow': '#F59E0B',
      },
    },
  },
  plugins: [],
}
