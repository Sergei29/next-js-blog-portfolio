import Head from "next/head"

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
      <h1 className="text-3xl font-bold underline mx-4 text-center">Blog</h1>
    </>
  )
}

export default Home
