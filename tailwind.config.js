/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ea4e15',
          200: '#e74e15',
          300: '#e34e15',

        },
        secondary: {
          100: '#e34e15',
          200: '#e34e15',
          300: '#e34e15',
        },
      },
      fontFamily: {
        Lato: ['Lato', 'Arial', 'sans-serif'],
        // You can add more custom font families here
      },

    },
  },
  plugins: [],
}