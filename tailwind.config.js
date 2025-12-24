/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'], // Clean modern font (add via Google Fonts in index.html)
      },
      colors: {
        primary: '#0f172a', // Deep slate
        accent: '#2dd4bf', // Teal for business
        soft: '#fbcfe8', // Soft pink-rose for music touches
      },
    },
  },
  plugins: [],
}