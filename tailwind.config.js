const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        laptop4: { max: '990px' },
        tablet: { max: '768px' },
        phone: { max: '500px' }
      }
    },
  },
  plugins: [],
});