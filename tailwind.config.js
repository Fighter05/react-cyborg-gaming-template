/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'black': '#1f2122',
        'white': '#ffffff',
        'gray': '#27292a',
        'lightgray': '#5c615a',
        'pink': '#e75e8d',
      },
      backgroundImage: {
        'home-banner': "url('./components/assets/images/banner-bg.jpg')",
        'fortnite-right': "url('./components/assets/images/feature-right.jpg')",

      }

    },
  },
  plugins: [],
}
