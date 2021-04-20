const theme = require('./config/tailwind/theme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme,
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('./config/tailwind/plugins/chunkyUnderlines'),
  ],
}
