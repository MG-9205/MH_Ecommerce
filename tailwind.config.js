/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Montserrat:["Montserrat", "sans-serif"],
        DancingScript:["Dancing Script" ,"cursive"]
      },
      colors:{
        "custom_shade1":"#FEF2F2",
        "custom_shade2":"#E4C2C1",
        "custom_shade3":"#B6666F",
        "custom_shade4":"#F53163",
        "custom_shade5":"#D1A080"
      }
    },
  },
  plugins: [],
}

