const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    colors: {
      primary: {
        DEFAULT: '#d3ae6b',
        dark: '#6e5e3d',
        light: '#FFE2AD',
      },
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      decoration: '#300C4B',
      homepageDeco: '#FFA400',
      errorColor: colors.red,
    },
    extend: {
      backgroundImage: () => ({
        jumbotron: "url('assets/images/jumbotron-bg.jpeg')",
      }),
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus', 'active'],
      backgroundOpacity: ['hover', 'focus', 'active'],
    },
  },
  plugins: [],
};
