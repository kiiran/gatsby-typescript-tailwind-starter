import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Bio from 'components/bio'
import Layout from 'components/layout'
import SEO from 'components/seo'
import { BlogIndexQuery } from 'graphql/generated'
import { GatsbyPage } from 'types/gatsby'

const BlogIndex: GatsbyPage<BlogIndexQuery> = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location}>
        <SEO title="All posts" />
        <Bio />
        <p>
          {`No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).`}
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location}>
      <SEO title="All posts" />
      <Bio />
      <ol className="max-w-screen-md px-4 mx-auto list-none my-8 space-y-8">
        {posts.map((post) => {
          const title = post.frontmatter?.title || post.fields?.slug

          return (
            <li key={post.fields?.slug}>
              <article itemScope itemType="http://schema.org/Article">
                <header className="space-y-2">
                  <h2 className="text-xl font-bold inline chunky-underline-violet-200">
                    <Link to={post.fields?.slug || '#'} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small className="block text-xs text-violet-500">
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
    </Layout>
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
