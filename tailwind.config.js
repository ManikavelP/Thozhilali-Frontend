/** @type {import('tailwindcss').Config} */


import {fontFamily} from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MainFont: ['Inter var', ...fontFamily.sans],
      },
      colors: {
        backGround: "#132D3A"
      },
      boxShadow:{
        panelShadow: "rgba(17 , 12 , 46 , 0.15) 0px 48px 100px 0px;",

      },

    }
  },
  plugins: [],
};
