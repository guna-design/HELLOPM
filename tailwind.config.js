/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      }, animation: {
        'spin-slow': 'spin 3s linear infinite',
      },      

    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};