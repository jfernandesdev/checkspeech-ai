import Head from 'next/head'

import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>CheckSpeech AI</title>
      </Head>

      <main>
        <Navbar />
        <Hero />
        <h1>Hello World!</h1>
      </main>
    </>
  )
}
