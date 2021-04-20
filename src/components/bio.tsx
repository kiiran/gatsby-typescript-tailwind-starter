/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { BioQuery } from 'graphql/generated'

const Bio: React.FC = () => {
  const data = useStaticQuery<BioQuery>(graphql`
    query Bio {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const metadata = data.site?.siteMetadata

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = metadata?.author

  return (
    <div className="flex mx-auto max-w-screen-sm space-x-2">
      <StaticImage
        className="rounded-full h-12 w-12 flex-shrink-0"
        layout="fixed"
        formats={['auto', 'webp', 'avif']}
        src="../images/profile-pic.png"
        width={48}
        height={48}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <div>
          <p>
            Written by <strong>{author.name}</strong>, {author?.summary || null}
          </p>
        </div>
      )}
    </div>
  )
}

export default Bio
