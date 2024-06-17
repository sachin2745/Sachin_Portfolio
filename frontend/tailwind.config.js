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
        secondary: "#B10000",
        tertiary: "#0C0404",
        quaternary: "#1f1f1f",
      },
    },
    fontFamily: {
      Quicksand: ["Quicksand", "sans-serif"],
      LavishlyYours: ["Lavishly Yours", "cursive"],
      RumRaisin: ["Rum Raisin", "sans-serif"],
      Englebert: ["Englebert", "cursive"],
      Crushed: ["Crushed", "sans-serif"],
      Limelight: ["Limelight", "sans-serif"],
      Festive: ["Festive", "cursive"],
      Carattere: ["Carattere", "cursive"],
      Preahvihear: ["Preahvihear", "sans-serif"],
      SirinStencil: ["Sirin Stencil", "sans-serif"],
      Allura: ["Allura", "cursive"],
      Jost: ["Jost", "sans-serif"],
      Josefin_Sans: ["Josefin Sans", "sans-serif"],
      Rammetto_One: ["Rammetto One", "sans-serif"],
    },
  },
  plugins: [require('flowbite/plugin')],
}

