const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        DEFAULT: '#d3ae6b',
        dark: '#6e5e3d',
      },
      black: colors.black,
      white: colors.white,
    },
    height: {
      jumbotron: '700px',
      sm: '8px',
      full: '100%',
      header: '80px',
      subHeader: '50px',
    },
    extend: {
      backgroundImage: () => ({
        jumbotron: "url('assets/images/jumbotron-bg.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
