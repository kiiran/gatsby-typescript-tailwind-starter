import React from 'react'

import Layout from './src/components/layout'

// custom typefaces
import '@fontsource/manrope/400.css' // Weight 400.
import '@fontsource/manrope/variable.css' // Contains ONLY variable weights and no other axes.
import '@fontsource/lora/400.css' // Weight 400.
import '@fontsource/lora/variable.css' // Contains ONLY variable weights and no other axes.
import '@fontsource/lora/variable-italic.css' // Italic variant.
// Highlighting for code blocks
import './src/style/prism-theme.css'
import './src/style/index.css'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
