/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-custom': '#B5BD93',
        'green-custom2': '#80895C',
      },
    },
  },
  plugins: [],
}