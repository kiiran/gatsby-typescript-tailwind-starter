import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import { LayoutQuery } from 'graphql/generated'

import { ThemeToggle } from './ThemeToggle'

export type LayoutProps = {
  location: Location
}

declare global {
  let __PATH_PREFIX__: string
}

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  const data = useStaticQuery<LayoutQuery>(graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = data.site?.siteMetadata?.title

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  const link = (
    <Link
      to="/"
      className="font-display font-black text-primary-800 dark:text-primary-200 !bg-none"
    >
      {title}
    </Link>
  )

  if (isRootPath) {
    header = <h1 className="text-3xl md:text-4xl">{link}</h1>
  } else {
    header = link
  }

  return (
    <div
      className="flex flex-col min-h-screen p-4"
      data-is-root-path={isRootPath}
    >
      <header className="flex justify-between w-full max-w-screen-sm mx-auto my-8 text-2xl space-x-2">
        {header}
        <ThemeToggle />
      </header>
      <main className="flex-grow w-full max-w-screen-sm mx-auto">
        {children}
      </main>
      <footer className="max-w-screen-sm mx-auto mt-6">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
