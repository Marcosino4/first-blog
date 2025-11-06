import * as React from "react"
import { Link } from "gatsby"

export default function Paises() {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/paises/")
    }
  }, [])

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Redirigiendo…</h1>
      <Link to="/paises/">Ir manualmente</Link>
    </main>
  )
}

export const Head = () => <title>Países</title>
