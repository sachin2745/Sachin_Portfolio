/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: "#FF3131",
        charcol_black: "#2a1617",
        secondary: "#eb1f00",
      },
    },
    fontFamily: {
      Quicksand: ["Quicksand", "sans-serif"],
      LavishlyYours: ["Lavishly Yours", "cursive"],
      RumRaisin: ["Rum Raisin", "sans-serif"],
      Nosifer: ["Nosifer", "sans-serif"],
    },
  },
  plugins: [require('flowbite/plugin')],
}

