import React from "react"
import Link from "next/link"

type Props = {
  children: React.ReactNode
}

type TitleProps = {
  href: string
} & Props

const Title = ({ children, href }: TitleProps): JSX.Element => (
  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
    {children}
    <Link href={href} className="text-sm ml-1 text-indigo-600">
      (See All)
    </Link>
  </h2>
)

const List = ({ children }: Props): JSX.Element => (
  <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {children}
  </div>
)

const ItemsList = ({ children }: Props): JSX.Element => <>{children}</>

ItemsList.Title = Title
ItemsList.List = List

export default ItemsList
