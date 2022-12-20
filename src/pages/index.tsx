import Head from "next/head"
import Image from "next/legacy/image"
import Link from "next/link"

import PortfolioSummaryCard from "@/components/PortfolioSummaryCard"
import BlogSummaryCard from "@/components/BlogSummaryCard"
import HeroSection from "@/components/HeroSection"
import Navigation from "@/components/Navigation"
import ListTitle from "@/components/ListTitle"
import { blogs, portfolios } from "@/constants"
import Footer from "@/components/Footer"

const Home = () => {
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
          <section className="relative">
            <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
              <Navigation />
              <HeroSection />
            </div>
            <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <Image
                priority
                layout="fill"
                alt=""
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1369&q=60"
              />
            </div>
          </section>

          <section className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <ListTitle href="/blogs">Newest Blogs</ListTitle>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {blogs.map((blog) => (
                <BlogSummaryCard key={blog.slug} blog={blog} />
              ))}
            </div>

            <br />

            <ListTitle href="/portfolios">Portfolios</ListTitle>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {portfolios.map((portfolio) => (
                <PortfolioSummaryCard
                  key={portfolio.slug}
                  portfolio={portfolio}
                />
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </>
    </>
  )
}

export default Home
