/** @type {import('tailwindcss').Config} */
export default {
  content:["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        gray:{
         2:"#AEAEB2",
         50: "#E4E4E454",
         100:"#DEFAE2",
         200:"#E1F4E5",
         300:"#F0F1F1",
         400:"#444444",
         500:"#F6F7F6",
         600:"#666464",
         800:"#1A1A1A",
         700:"#333333",
         900:"#1E1E1E",
         950:"#000000",
        },
        placeholder: "#AEAEB2",
        green:{
          
          50:"#F1FCF2",

         100:"#DEFAE2",
         200:"#D4F9DB",
         250:"#BEF4C7",
         300:"#20AE3A",
         600:"#20AE3A",
         700:"#1A7B2C",
         900:"#175023",
         950:"#072C0F"
        },
        neutral:{
          400:"#A1A1A1",
          950:"#262626",
        },
        accent:{
          50:"#EDF3FF",
          100:"#EDF3FF",
          500:"#5E69F6",
          600:"#4847EB"
        },
        light: "#FDFDFD",
        headHighlight: "#127C71", 
        primary:{
          50:"#F1FCF2",
          100:"#DEFAE2",
          200:"#BEF4C7",
          300:"#8BEA9B",
          500:"#2ABD45",
          600:"#20AE3A",
          700:"#1A7B2C",
          950:"#072C0F"
        },
        pink:{
          50:"#FFCC0014"
        },
        red:{
          50:"#EA433514",
          500:"#D60000"
        },
        cardBg: "#F3F7FF",
        cardOverlay: "#E7E7E726",
        white: "#FFFFFF",
      },
     borderRadius:{
        'lg32':"32px",
        "lg36":"36px",
        "lg48":"48px"
      },
      height:{
        106: "450px",
        108: "550px",
        39: "40px",
        17: "80px"
      },
        fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

       screens: {
        'max-990': { max: '990px' }, // applies from 0px to 990px
      },
      width:{
        211: "200px",
        91: "95%",
        7: "650px"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(123.39deg, #FDFDFD 3.85%, #F4EDFA 35.05%, #ddddddc9 57.05%, #EEE1F8 79.94%, #FDFDFD 99.96%)',
        "gradient-bg": "linear-gradient(123deg, #FDFDFD 3.85%, #F4EDFA 35.58%, #F1FBF2 56%, #EEE1F8 81.24%, #FDFDFD 101.6%);"
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}




