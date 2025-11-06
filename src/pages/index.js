import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <section className="hero-small">
        <h1>Explora el mundo</h1>
        <p>Inspírate para tu próximo destino</p>
      </section>

      <div className="grid">
        {posts.map(post => (
          <Link to={post.fields.slug} key={post.id} className="card">
            <h2>{post.frontmatter.title}</h2>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        id
        frontmatter { title }
        fields { slug }
      }
    }
  }
`
