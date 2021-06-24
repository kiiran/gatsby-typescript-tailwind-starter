import * as React from 'react'
import { graphql, Link } from 'gatsby'

import { BlogPostBySlugQuery } from '~/graphql-types'

import Bio from 'components/bio'
import SEO from 'components/seo'
import { GatsbyPage } from 'types/gatsby'

const BlogPostTemplate: GatsbyPage<BlogPostBySlugQuery> = ({ data }) => {
  const post = data.markdownRemark!
  const { previous, next } = data

  return (
    <>
      <SEO
        title={post.frontmatter?.title || `Title`}
        description={post.frontmatter?.description || post.excerpt || undefined}
      />
      <article
        className="mb-6 space-y-6"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="mx-auto prose dark:prose-dark">
          <h1 className="mb-4 text-3xl font-bold" itemProp="headline">
            {post.frontmatter?.title}
          </h1>
          <p className="text-sm font-semibold text-primary-800 dark:text-primary-200">
            {post.frontmatter?.date}
          </p>
        </header>
        <section
          className="mx-auto prose dark:prose-dark"
          dangerouslySetInnerHTML={{ __html: post.html || '' }}
          itemProp="articleBody"
        />
        <hr className="mt-8 h-px bg-primary-50 border-none" />
        <footer className="py-4">
          <Bio />
        </footer>
      </article>
      <nav className="my-6">
        <ul className="flex flex-wrap justify-between p-0 list-none">
          {previous && previous.fields?.slug && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter?.title}
              </Link>
            </li>
          )}
          {next && next.fields?.slug && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter?.title} →
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
