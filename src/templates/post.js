import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Post({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <main className="post-content fade-in">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <a href="/" className="back-link">← Volver</a>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter { title }
      html
    }
  }
`
