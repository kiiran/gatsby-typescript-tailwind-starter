import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Bio from 'components/bio'
import SEO from 'components/seo'
import { BlogIndexQuery } from 'graphql/generated'
import { GatsbyPage } from 'types/gatsby'

const BlogIndex: GatsbyPage<BlogIndexQuery> = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <>
        <SEO title="All posts" />
        <Bio />
        <p>
          {`No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).`}
        </p>
      </>
    )
  }

  return (
    <>
      <SEO title="All posts" />
      <Bio />
      <ol className="my-8 mx-auto space-y-8 max-w-screen-sm list-none">
        {posts.map((post) => {
          const title = post.frontmatter?.title || post.fields?.slug
          const link = post.fields?.slug

          return (
            <li key={link}>
              <article
                className="space-y-2"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header className="space-y-2">
                  <h2 className="inline text-xl md:text-2xl font-bold chunky-underline-primary-100 dark:chunky-underline-primary-800">
                    {link ? (
                      <Link to={link} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    ) : (
                      <span itemProp="headline">{title}</span>
                    )}
                  </h2>
                  <small className="block text-xs font-semibold text-primary-700 dark:text-primary-200">
                    {post.frontmatter?.date}
                  </small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        post.frontmatter?.description || post.excerpt || '',
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
