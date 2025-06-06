/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#EEECEC',
        'header': '#5F5C58',
        'sidebar': '#474542',
        'accent': '#3B91A9',
        'surface': {
          light: '#DFDEDE',
          dark: '#D1CFCF',
        }
      }
    },
  },
  plugins: [],
}
