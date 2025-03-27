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
        'light': 'linear-gradient(180deg, rgb(149 204 255) 10%, rgba(219, 234, 254, 1) 100%)',
        'dark': 'linear-gradient(180deg, rgba(1,10,20,1) 10%, rgba(0,68,159,1) 100%)',
        'light2': 'linear-gradient(180deg, rgb(228 241 249) 3%, rgba(219, 234, 254, 1) 40%, rgba(191, 218, 255, 1) 90%)',
        'dark2': 'linear-gradient(180deg, rgb(228 241 249) 3%, rgb(16 72 146) 7%, rgb(1 30 67) 90%)',
      },
      boxShadow: {
        'inset-blue': 'inset 0px -3px 10px #b8c3d3',
      },
    },
  },
  plugins: [],
}
