/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        'inner-2xl': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06), inset 0 2px 10px 0 rgba(0, 0, 0, 0.07)',
        'inner-4xl': 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.06), inset 0 4px 20px 0 rgba(0, 0, 0, 0.07)',
      },
    },
  },
  plugins: [],
}
