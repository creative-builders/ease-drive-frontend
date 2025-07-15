/** @type {import('tailwindcss').Config} */
export default {
  content:["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors:{
        gray:{
         100:"#F5F5F5",
         200:"#E1F4E5",
         300:"#F0F1F1",
         400:"#444444",
         500:"#F6F7F6",
         600:"#666464",
         800:"#1A1A1A",
         900:"#1E1E1E",
         950:"#000000",
        },
        green:{
         100:"#DCFFDC",
         200:"#D4F9DB",
         300:"#20AE3A",
        },
        light: "#FDFDFD",
        headHighlight: "#127C71", 
        primary:{
          50:"#F1FCF2",
          100: "#DEFAE2",
          600: "#20AE3A",
          700: "#1A7B2C",
        },
        pink:{
          50:"#FFCC0014"
        },
        cardBg: "#F3F7FF",
        cardOverlay: "#E7E7E726",
        white: "#FFFFFF",
      },
      height:{
        106: "450px",
        108: "550px",
        39: "40px",
        17: "80px"
      },
      width:{
        211: "200px",
        91: "95%",
        7: "650px"
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}




