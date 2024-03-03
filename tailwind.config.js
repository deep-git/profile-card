/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh_sans: ["Kumbh Sans", "sans-serif"]
      },
      colors: {
        primary_darkcyan: "hsl(185, 75%, 39%)",
        verydark_desaturatedblue: "hsl(229, 23%, 23%)",
        dark_grayishblue: "hsl(227, 10%, 46%)",
        neutral_darkgray: "hsl(0, 0%, 59%)"
      }
    },
  },
  plugins: [],
}

