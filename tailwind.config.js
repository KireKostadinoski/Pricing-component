/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm: '480px',
      md:'768px',
      lg:'1130px',
      xl:'1440px',
    },
    extend: {
      colors: {
        SoftCyan: "hsl(174, 77%, 80%)",
        StrongCyan: "hsl(174, 86%, 45%)",
        LightGrayishRed: "hsl(14, 92%, 95%)",
        LightRed: "hsl(15, 100%, 70%)",
        PaleBlue: "hsl(226, 100%, 87%)",
        White: "hsl(0, 0%, 100%)",
        VeryPaleBlue: "hsl(230, 100%, 99%)",
        LightGrayishBlue: "hsl(224, 65%, 95%)",
        LightGrayishBlue1: "hsl(223, 50%, 87%)",
        GrayishBlue: "hsl(225, 20%, 60%)",
        DarkDesaturatedBlue: "hsl(227, 35%, 25%)",
      },
      
      fontFamily:{
         sans: [ "Manrope", 'sans-serif']
      },
      borderRadius:{
        customBL: "50%",
      },
      backgroundImage: () =>({
        bgPattern: "url('../images/bg-pattern.svg')",
        circles:"url('./images/pattern-circles.svg')"
      })
    },
  },
  plugins: [],
};
