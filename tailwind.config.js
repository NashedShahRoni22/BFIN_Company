const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#186BB5",
        secondary: {
          DEFAULT: "#BAFF29",
          light: "#C5FF41",
        },
        softGray: "#d4d4d8",
        "custom-gray": "#333",
        "gray-soft": "#F8F9FA",
        accent: "#A5D9C8",
        background: "#F1FFE7",
        dark: "#1E1E1E",
        "sky-blue": "#31C5F4",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "serif"],
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
});
