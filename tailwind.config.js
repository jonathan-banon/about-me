/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#195D7E', // Remplacez cela par votre couleur primaire personnalisée
      },
      fontSize: {
        'xs': '0.75rem', // Taille de police extra petite
        'sm': '0.875rem', // Taille de police petite
        'base': '1rem', // Taille de police de base (16px)
        'lg': '1.125rem', // Taille de police grande
        'xl': '1.25rem', // Taille de police très grande
        '2xl': '1.5rem', // Taille de police encore plus grande
        '3xl': '1.875rem', // Taille de police encore plus grande
        '4xl': '2.25rem', // Taille de police très grande
        '5xl': '3rem', // Taille de police extrêmement grande
        '6xl': '4rem', // Taille de police énorme
      },
    },
  },
  plugins: [],
}

