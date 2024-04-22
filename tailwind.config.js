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
        'blue-custom': '#93BABB',
        'blue-custom2': '#4D7C7D',
        'red-custom': '#DA654F',
        'red-custom2': '#C64936',
      },
    },
  },
  plugins: [],
}