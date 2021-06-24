/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { Helmet, HelmetProps } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import { SeoComponentQuery } from '~/graphql-types'

type SEOProps = {
  description?: string
  lang?: string
  meta?: HelmetProps['meta']
  title: string
}

const SEO: React.FC<SEOProps> = ({
  description = '',
  lang = 'en',
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery<SeoComponentQuery>(
    graphql`
      query SeoComponent {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `,
  )
  const metadata = site && site.siteMetadata

  const metaDescription = description || metadata?.description
  const defaultTitle = metadata?.title

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          property: `og:title`,
          content: title,
        },
        ...(metaDescription
          ? [
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
          : []),
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        ...meta,
      ]}
    />
  )
}

export default SEO
