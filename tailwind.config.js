const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'primary': '#186BB5',
      'secondary': '#C5FF41',
    },
    extend: {},
  },
  plugins: [],
});