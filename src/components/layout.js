import React, { useEffect } from "react"
import { Link } from "gatsby"

export default function Layout({ children }) {
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark")
  }, [])

  function toggleTheme() {
    document.body.classList.toggle("dark")
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light")
  }

  return (
    <>
      <header className="nav">
        <div className="nav-left">
        <span className="logo">Viajes</span>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/paises">Paises</Link>
            <Link to="/lugares">Lugares que ver</Link>
            <Link to="/recomendaciones">Recomendaciones</Link>
          </nav>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>🌓</button>
      </header>

      <main className="fade-in">
        {children}
      </main>
    </>
  )
}
