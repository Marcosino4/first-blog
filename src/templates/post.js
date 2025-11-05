import React from "react"
import { graphql } from "gatsby"

export default function Post({ data }) {
  const post = data.markdownRemark;
  return (
    <main className="post-content">
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <a href="/" className="back-link">Volver</a>
    </main>
  )
}

export const query = graphql`query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) { frontmatter { title } html }
}`
