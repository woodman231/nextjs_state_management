import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Managing AppState with Redux Toolkit (RTK)</title>
        <meta name="description" content="Demonstrates managing entire app state with nextjs using Redux Toolkit (RTK)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Home</h1>
      </header>
      <main>
        <p>Select an action on the left to modify the current count. You can update the modifier by using the spinner next to the current modifier on this page or any other page.</p>
        <p>In this demonstration we are managing the entire app state using the Redux Toolkit (RTK).</p>
      </main>
    </>
  )
}
