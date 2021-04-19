import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import { LayoutQuery } from 'graphql/generated'

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

  if (isRootPath) {
    header = (
      <h1 className="text-3xl font-bold">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = <Link to="/">{title}</Link>
  }

  return (
    <div
      className="flex flex-col min-h-screen py-4"
      data-is-root-path={isRootPath}
    >
      <header className="max-w-screen-md px-4 mx-auto">{header}</header>
      <main className="flex-grow">{children}</main>
      <footer className="max-w-screen-md px-4 mx-auto">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
