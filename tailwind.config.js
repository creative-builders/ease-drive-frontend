/** @type {import('tailwindcss').Config} */
export default {
  content:["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height:{
        106: "450px",
        39: "45px",
        17: "100px"
      },
      width:{
        211: "200px",
        91: "95%",
        7: "650px"
      }
    },
  },
  plugins: [],
}

