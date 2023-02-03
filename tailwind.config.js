module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        gray_700: "#5d6469",
        bluegray_50: "#eaf0f7",
        black_900: "#000000",
        indigo_A400: "#4461f2",
        gray_200: "#ebebeb",
        white_A700: "#ffffff",
        red_50: "#fff3f3",
      },
      borderRadius: { radius8: "8px", radius15: "15px" },
      fontFamily: { inter: "Inter" },
      letterSpacing: { ls1: "1px", ls2: "2px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
