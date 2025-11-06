import * as React from "react"

export default function Lugares() {
  React.useEffect(() => {
    window.location.href = "/lugares/"
  }, [])

  return null
}
