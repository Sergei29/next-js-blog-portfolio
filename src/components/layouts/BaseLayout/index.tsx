import React from "react"
import Head from "next/head"
import Image from "next/legacy/image"

import { Header, Footer, Navigation } from "@/components/common"
import HeroLayout from "@/components/layouts/HeroLayout"

type Props = {
  children: React.ReactNode
}

const BaseLayout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Personal App - Serge Blog</title>
        <meta
          name="description"
          content="Personal application - blog and portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <div className="mx-auto max-w-7xl px-4 space-y-8 sm:px-6 lg:px-8">
          <HeroLayout>
            <HeroLayout.Left>
              <Navigation />
              <Header />
            </HeroLayout.Left>
            <HeroLayout.Right>
              <Image
                priority
                layout="fill"
                alt=""
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1369&q=60"
              />
            </HeroLayout.Right>
          </HeroLayout>

          <main className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            {children}
          </main>
        </div>
        <Footer />
      </>
    </>
  )
}

export default BaseLayout
