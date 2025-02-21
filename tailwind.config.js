/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '350px',
      maxXs: { max: '350px' },
      min380px: '380px',
      max380px: { max: '380px' },
      sm: { min: '500px' },
      maxSm: { max: '499px' },
      md: { min: '668px' },
      maxMd: { max: '667px' },
      lg: { min: '1100px' },
      maxLg: { max: '1099px' },
      min900px: { min: '900px' },
      max900px: { max: '900px' },
      min1000px: { min: '1000px' },
      max1000px: { max: '1000px' },
      min1150px: { min: '1150px' },
      max1150px: { max: '1150px' },
      xl: { min: '1440px' },
      maxXl: { max: '1439px' }
    },
    extend: {
      colors: {
        // Primary Colors
        primary: '#57CC99',
        'primary-shade': '#57CC6A',

        // Secondary Colors
        secondary: '#CC9957',

        // Tertiary Colors
        tertiary: '#3A3653',

        // Danger Colors
        danger: '#CC5757',
        'danger-highlight': '#D0021B',

        // Warning Colors
        warning: '#ffc409',
        'warning-shade': '#e0ac08',
        'warning-tint': '#ffca22',

        // Success Colors
        success: '#57CC99',
        'success-shade': '#28ba62',
        'success-tint': '#42d77d',
        'success-dark': '#005149',
        'success-highlight': '#7ED321',

        // Medium Colors
        medium: '#666666',

        // Light Colors
        light: '#F5F5F5',
        'light-tint': '#f4f4f4',

        // Text Colors
        body: '#333333',
        secondaryText: '#666666',

        // Neutral Colors
        white: '#ffffff',
        border: '#E1E8ED',
        surface: '#F5F7FA',

        // Other Colors
        'light-blue-100': '#bde1f5',
        'medium-100': '#a8a8a8',
        'gray-100': '#e7e7e7',
        'gray-200': '#dae2e6',

        // Social Media Colors
        facebook: '#3b5a9a',
        twitter: '#1aa9e1',
        instagram: '#7c4a3a',
        linkedin: '#0073b2',
        googlePlus: '#dd4b39'
      }
    }
  },
  plugins: []
};
