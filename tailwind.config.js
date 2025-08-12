/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Base colors
        'base-light': '#FAFAFC',
        'primary-dark': '#0E1012',
        'secondary': '#4A5568',
        
        // Action colors
        'primary-blue': '#2F80ED',
        'accent-mint': '#00C58E',
        'highlight-amber': '#FFC857',
        
        // Feedback colors
        'success': '#10B981',
        'warning': '#F59E0B',
        'info': '#3B82F6',
        'error': '#EF4444',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(14, 16, 18, 0.06)',
        'sm': '0 4px 12px rgba(14, 16, 18, 0.08)',
        'md': '0 10px 24px rgba(14, 16, 18, 0.10)',
        'lg': '0 24px 48px rgba(14, 16, 18, 0.12)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};