/** @type {import('tailwindcss').Config} */
import { DefaultTheme } from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        MainFont: ['Inter var', ...DefaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

