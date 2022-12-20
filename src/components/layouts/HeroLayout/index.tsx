import React from "react"

type Props = {
  children: React.ReactNode
}

const Left = ({ children }: Props): JSX.Element => {
  return (
    <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
      {children}
    </div>
  )
}

const Right = ({ children }: Props): JSX.Element => {
  return (
    <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      {children}
    </div>
  )
}

const HeroLayout = ({ children }: Props): JSX.Element => {
  return <section className="relative">{children}</section>
}

HeroLayout.Left = Left
HeroLayout.Right = Right

export default HeroLayout
