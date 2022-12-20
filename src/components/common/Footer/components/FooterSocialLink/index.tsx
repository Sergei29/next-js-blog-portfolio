import React from "react"

type Props = {
  link: {
    name: string
    href: string
    icon: (props: any) => JSX.Element
  }
}

const FooterSocialLink = ({ link }: Props): JSX.Element => (
  <a
    rel="noreferrer"
    target="_blank"
    key={link.name}
    href={link.href}
    className="text-gray-400 hover:text-gray-500"
  >
    <span className="sr-only">{link.name}</span>
    <link.icon className="h-6 w-6" aria-hidden="true" />
  </a>
)

export default React.memo(FooterSocialLink)
