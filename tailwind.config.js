/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        "tablet":'800px',
        "min-tablet":'700px',
        "min-tab":'580px',
        "phone":'500px',
        "sm-phone":'430px'
      },
      backgroundImage: {
        "background-gradient": `linear-gradient(98deg,#02b09b61,#5a89fd2e)`,
      },
      backgroundColor: {
        "custom-hsla": "hsla(180,100%,0%,1)",
      },
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        playwrite: ["Playwrite AR", " cursive"],
        DMSANS: ["DM Sans", "sans-serif"],
      },
      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation:{
        'border-spin':'border-spin 7s linear infinite'
      },
    },
  },
  plugins: [],
};
