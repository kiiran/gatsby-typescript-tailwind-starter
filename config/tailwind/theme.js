const tailwindDefaults = require('tailwindcss/defaultTheme')

const colors = require('./colors')
const spacing = require('./spacing')
const typography = require('./typography')

module.exports = {
  fontFamily: {
    display: [
      'ManropeVariable',
      'Manrope',
      ...tailwindDefaults.fontFamily.sans,
    ],
    body: ['LoraVariable', 'Lora', ...tailwindDefaults.fontFamily.serif],
  },
  extend: {
    colors,
    spacing,
    typography,
  },
}
