/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#ff89ef',
        accentbg: '#5e426684',
        accentbghover: '#5e426689',
        primary: {
          100: '#f2cadf',
          200: '#ebadce',
          300: '#e490bd',
          400: '#dd73ac',
          500: '#d6579b',
          600: '#cf3a8a',
          700: '#b92d77',
          800: '#9c2665',
          900: '#7f1f52',
        },
        background: {
          100: '#4c597b',
          200: '#3e4965',
          300: '#30394f',
          400: '#232939',
          500: '#151923',
          600: '#08090d',
          700: '#000000',
          800: '#000000',
          900: '#000000',

        }
      }
    },
  },
  plugins: [],
};
