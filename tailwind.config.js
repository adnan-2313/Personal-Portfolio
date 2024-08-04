/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "complex-gradient": `
          radial-gradient(at 100% 10%, hsl(181, 69%, 14%) 0px, transparent 30%),
          radial-gradient(at -30% 20%, hsl(181, 69%, 14%) 100px, transparent 40%)
        `,
      },
      backgroundColor: {
        "custom-hsla": "hsla(180,100%,0%,1)",
      },
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
