import * as React from "react"
import { Link } from "gatsby"

export default function Lugares() {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/lugares/")
    }
  }, [])

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Redirigiendo…</h1>
      <Link to="/lugares/">Ir manualmente</Link>
    </main>
  )
}

export const Head = () => <title>Lugares que visitar</title>
