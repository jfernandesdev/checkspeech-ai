import Head from 'next/head'

import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>CheckSpeech AI</title>
      </Head>

      <main>
        <Navbar />
        <h1>Hello World!</h1>
      </main>
    </>
  )
}
