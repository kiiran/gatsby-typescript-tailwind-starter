import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Bio from 'components/bio'
import Layout from 'components/layout'
import SEO from 'components/seo'
import { BlogPostBySlugQuery } from 'graphql/generated'
import { GatsbyPage } from 'types/gatsby'

const BlogPostTemplate: GatsbyPage<BlogPostBySlugQuery> = ({
  data,
  location,
}) => {
  const post = data.markdownRemark!
  const { previous, next } = data

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter?.title || `Title`}
        description={post.frontmatter?.description || post.excerpt || undefined}
      />
      <article itemScope itemType="http://schema.org/Article">
        <header className="prose dark:prose-dark mx-auto">
          <h1 className="text-3xl font-bold mb-4" itemProp="headline">
            {post.frontmatter?.title}
          </h1>
          <p>{post.frontmatter?.date}</p>
        </header>
        <section
          className="prose dark:prose-dark mx-auto"
          dangerouslySetInnerHTML={{ __html: post.html || '' }}
          itemProp="articleBody"
        />
        <hr className="bg-violet-50 h-px border-none" />
        <footer className="py-4">
          <Bio />
        </footer>
      </article>
      <nav className="px-4">
        <ul className="flex flex-wrap justify-between list-none p-0">
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
    </Layout>
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
