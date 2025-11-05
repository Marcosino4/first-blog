import React, { useEffect } from "react"
import { graphql } from "gatsby"
import hero from "../images/hero.jpg"

export default function Home({ data }) {
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
  }, []);

  function toggleTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  }

  const posts = data.allMarkdownRemark.nodes;

  return (
    <>
      <header>
        <h1>Mi Blog Moderno 🍏</h1>
        <button className="theme-toggle" onClick={toggleTheme}>🌓 Tema</button>
      </header>

      <section className="hero">
        <img src={hero} alt="Portada" className="hero-img" />
        <div className="hero-text">
          <h1>Hola 👋</h1>
          <p>Bienvenido a mi blog minimalista.</p>
        </div>
      </section>

      <main>
        <ul>
          {posts.map(post => (
            <li key={post.id}><a href={post.fields.slug}>{post.frontmatter.title}</a></li>
          ))}
        </ul>
      </main>
    </>
  )
}

export const query = graphql`{ allMarkdownRemark { nodes { id frontmatter { title } fields { slug } } } }`
