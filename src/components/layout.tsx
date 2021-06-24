import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import { LayoutQuery } from '~/graphql-types'

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
      className="flex flex-col p-4 min-h-screen"
      data-is-root-path={isRootPath}
    >
      <header className="flex justify-between my-8 mx-auto space-x-2 w-full max-w-screen-sm text-2xl">
        {header}
        <ThemeToggle />
      </header>
      <main className="flex-grow mx-auto w-full max-w-screen-sm">
        {children}
      </main>
      <footer className="mx-auto mt-6 max-w-screen-sm">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
