/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0A0A0A',
          primary: '#F5F5F5',
          gold: '#C9A96E',
          cream: '#E8D5B7',
          surface: '#141414',
          border: '#1F1F1F',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
