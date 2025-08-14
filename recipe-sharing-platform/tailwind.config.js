// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",              // root index.html
    "./public/index.html",       // include public HTML
    "./src/**/*.{js,ts,jsx,tsx}" // all source files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}