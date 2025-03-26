/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'hue-rotate': 'hue-rotate 3s infinite', // Define o tempo e a repetição da animação
      },
      keyframes: {
        'hue-rotate': {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
      },
      backgroundImage: {
        'light': 'linear-gradient(180deg, rgba(75 152 255) 10%, rgba(219,234,254,1) 100%)',
        'dark': 'linear-gradient(180deg, rgba(1,10,20,1) 10%, rgba(0,68,159,1) 100%)', // Exemplo de gradiente para o modo escuro
      },
    },
  },
  plugins: [],
}
