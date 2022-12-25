import Head from 'next/head'

import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Solutions } from '../components/Solutions'
import { Customers } from '../components/Customers'
import { Banner } from '../components/Banner'
import { Prices } from '../components/Prices'

export default function Home() {
  return (
    <>
      <Head>
        <title>CheckSpeech AI</title>
      </Head>

      <main>
        <Navbar />
        <Hero />
        <Solutions />
        <Customers />
        <Banner />
        <Prices />
      </main>
    </>
  )
}
