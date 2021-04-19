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
          social {
            twitter
          }
        }
      }
    }
  `)
  const metadata = data.site?.siteMetadata

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = metadata?.author
  const social = metadata?.social

  return (
    <div className="flex items-center px-4 mx-auto space-x-2 max-w-screen-md">
      <StaticImage
        className="rounded-full h-12 w-12"
        layout="fixed"
        formats={['auto', 'webp', 'avif']}
        src="../images/profile-pic.png"
        width={48}
        height={48}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong>, {author?.summary || null}
          {` `}
          <a
            href={`https://twitter.com/${social?.twitter || ``}`}
            className="chunky-underline-violet-200"
          >
            You should follow them on Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
