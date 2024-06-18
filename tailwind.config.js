/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#195D7E',
      },
      fontSize: {
        'xs': '0.75rem', 
        'sm': '0.875rem', 
        'base': '1rem', 
        'lg': '1.125rem', 
        'xl': '1.20rem', 
        '2xl': '1.5rem', 
        '3xl': '1.875rem', 
        '4xl': '2.25rem', 
        '5xl': '3rem',
        '6xl': '4rem',
        'mob-8': '8vw',
        'mob-10': '10vw'
      },
    },
  },
  plugins: [],
}

