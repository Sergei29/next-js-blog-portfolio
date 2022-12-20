import { NextPage } from "next"

import PortfolioSummaryCard from "@/components/PortfolioSummaryCard"
import { ItemsList, BaseLayout } from "@/components/layouts"
import BlogSummaryCard from "@/components/BlogSummaryCard"
import { blogs, portfolios } from "@/constants"

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
