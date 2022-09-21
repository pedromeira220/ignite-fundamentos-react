/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      gray: {
        100: '#F2F2F2',
        200: '#D9D9D9',
        300: '#808080',
        400: '#333333',
        500: '#262626',
        600: '#1A1A1A',
        700: '#0D0D0D',
      },
      blue: '#4EA8DE',
      'blue-dark': '#1E6F9F',
      white: '#ffffff',
      purple: '#8284FA',
      'purple-dark': '#5E60CE',
      danger: '#E25858',
    },

    extend: {
      color: {},
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
