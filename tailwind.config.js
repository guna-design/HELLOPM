/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'Times New Roman', 'serif'],
      },
       animation: {
        'spin-slow': 'spin 3s linear infinite',
      },      

    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};