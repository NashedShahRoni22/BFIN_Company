const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#186BB5",
      secondary: "#C5FF41",
    },
    extend: {
      colors: {
        "custom-gray": "#333",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "serif"],
      },
    },
  },
  plugins: [],
});
