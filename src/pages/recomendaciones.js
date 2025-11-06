import * as React from "react"
import { Link } from "gatsby"

export default function Recomendaciones() {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/recomendaciones/")
    }
  }, [])

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Redirigiendo…</h1>
      <Link to="/recomendaciones/">Ir manualmente</Link>
    </main>
  )
}

export const Head = () => <title>Recomendaciones de viaje</title>
