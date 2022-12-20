import React from "react"
import Link from "next/link"

type Props = {
  link: {
    name: string
    href: string
  }
}

const FooterNavLink = ({ link }: Props): JSX.Element => (
  <div className="px-5 py-2">
    <Link
      href={link.href}
      className="text-base text-gray-400 hover:text-gray-500"
    >
      {link.name}
    </Link>
  </div>
)

export default React.memo(FooterNavLink)
