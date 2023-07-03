/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: '#303030',
          secondary: "#696969",
          nuetral: '#C0C0C0',
          light_neutral: '#F0F0F0',
          accent: "#0047AB"
      }
    },
  },
  plugins: [],
}