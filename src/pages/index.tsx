import { NextPage, GetStaticProps } from "next"
import { join } from "path"

import PortfolioSummaryCard from "@/components/PortfolioSummaryCard"
import { ItemsList, BaseLayout } from "@/components/layouts"
import BlogSummaryCard from "@/components/BlogSummaryCard"
import { blogs, portfolios } from "@/constants"

import { getBlogFileNames, getBlogFileContent } from "@/lib"

export const getStaticProps: GetStaticProps = async (_ctx) => {
  const blogFileNames = await getBlogFileNames()
  const content = await getBlogFileContent(blogFileNames[0])
  console.log({ blogFileNames, content })

  return {
    props: {},
  }
}

const HomePage: NextPage = () => {
  return (
    <BaseLayout>
      <ItemsList>
        <ItemsList.Title href="/blogs">Newest Blogs</ItemsList.Title>
        <ItemsList.List>
          {blogs.map((blog) => (
            <BlogSummaryCard key={blog.slug} blog={blog} />
          ))}
        </ItemsList.List>
      </ItemsList>
      <br />
      <ItemsList>
        <ItemsList.Title href="/portfolios">Portfolios</ItemsList.Title>
        <ItemsList.List>
          {portfolios.map((portfolio) => (
            <PortfolioSummaryCard key={portfolio.slug} portfolio={portfolio} />
          ))}
        </ItemsList.List>
      </ItemsList>
    </BaseLayout>
  )
}

export default HomePage
