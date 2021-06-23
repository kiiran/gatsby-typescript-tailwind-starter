import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'react-feather'
import { Helmet } from 'react-helmet'

export const ThemeToggle: React.FC = () => {
  const [isDarkMode, setDarkMode] = useState(true)

  useEffect(() => {
    setDarkMode(
      !!window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches,
    )
  }, [])

  return (
    <>
      <Helmet htmlAttributes={{ class: isDarkMode ? 'dark' : 'light' }} />
      <button
        title="Toggle dark mode"
        className="flex justify-center items-center w-12 h-12 rounded"
        onClick={() => setDarkMode((x) => !x)}
        type="button"
      >
        {isDarkMode ? <Moon /> : <Sun />}
      </button>
    </>
  )
}
