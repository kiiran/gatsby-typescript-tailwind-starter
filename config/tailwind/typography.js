module.exports = (theme) => ({
  DEFAULT: {
    css: {
      a: {
        textDecoration: 'none',
      },
      pre: {
        color: theme('colors.blueGray.200'),
        backgroundColor: theme('colors.blueGray.900'),
      },
    },
  },
  dark: {
    css: {
      color: 'white',
      '[class~="lead"]': {
        color: theme('colors.primary.400'),
      },
      a: {
        color: theme('colors.primary.50'),
      },
      strong: {
        color: theme('colors.primary.50'),
      },
      'ol > li::before': {
        color: theme('colors.primary.400'),
      },
      'ul > li::before': {
        backgroundColor: theme('colors.primary.600'),
      },
      hr: {
        borderColor: theme('colors.primary.600'),
      },
      blockquote: {
        color: theme('colors.primary.50'),
        borderLeftColor: theme('colors.primary.700'),
      },
      h1: {
        color: theme('colors.primary.50'),
      },
      h2: {
        color: theme('colors.primary.50'),
      },
      h3: {
        color: theme('colors.primary.50'),
      },
      h4: {
        color: theme('colors.primary.50'),
      },
      'figure figcaption': {
        color: theme('colors.primary.400'),
      },
      code: {
        color: theme('colors.primary.50'),
      },
      'a code': {
        color: theme('colors.primary.50'),
      },
      pre: {
        color: theme('colors.blueGray.200'),
        backgroundColor: theme('colors.blueGray.900'),
      },
      thead: {
        color: theme('colors.primary.50'),
        borderBottomColor: theme('colors.primary.700'),
      },
      'tbody tr': {
        borderBottomColor: theme('colors.primary.800'),
      },
    },
  },
})
