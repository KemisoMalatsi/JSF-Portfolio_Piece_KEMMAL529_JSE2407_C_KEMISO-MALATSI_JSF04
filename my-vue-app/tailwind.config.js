/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode using a class
  theme: {
    extend: {
      // You can add custom styles here if needed
    },
  },
  plugins: [],
}
