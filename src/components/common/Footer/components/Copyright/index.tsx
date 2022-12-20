import React from "react"
import Link from "next/link"

const Copyright = (): JSX.Element => (
  <>
    &copy;
    <Link color="inherit" href="/">
      XY
    </Link>{" "}
    {new Date().getFullYear()}
  </>
)

export default Copyright
