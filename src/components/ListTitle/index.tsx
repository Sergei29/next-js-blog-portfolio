import React from "react"
import Link from "next/link"

type Props = {
  children: React.ReactNode
  href: string
}

const ListTitle = ({ children, href }: Props): JSX.Element => (
  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
    {children}
    <Link href={href} className="text-sm ml-1 text-indigo-600">
      (See All)
    </Link>
  </h2>
)

export default ListTitle
