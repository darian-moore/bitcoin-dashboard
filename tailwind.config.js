module.exports = {
  mode: 'jit',
  purge: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'before-sm-cols': {'min': '0px', 'max': '954px'},
        'sm-cols': '955px',
        'lg-cols': '1235px',
      }
    },
  },
  plugins: [],
}
