import * as React from "react"

export default function Paises() {
  React.useEffect(() => {
    window.location.href = "/paises/"
  }, [])

  return null
}
