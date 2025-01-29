/** @type {import('tailwindcss').Config} */
export default {
  content:["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        gray:{
         300:"#F0F1F1",
         400:"#444444",
         500:"#F6F7F6",
         900:"#666464",
         950:"#000000",
        },
        green:{
         100:"#DCFFDC",
         200:"#D4F9DB",
         300:"#20AE3A",
        }
      },
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
  plugins: [require("@tailwindcss/forms")],
}




