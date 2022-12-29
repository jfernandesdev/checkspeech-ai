import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Solutions } from '../components/Solutions'
import { Customers } from '../components/Customers'
import { Banner } from '../components/Banner'
import { Prices } from '../components/Prices'
import { ContactForm } from '../components/ContactForm'
import { Footer } from '../components/Footer'

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
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "menu", 
        "hero", 
        "solutions",
        "customers", 
        "banner", 
        "prices", 
        "contact", 
        "footer"
      ])),
    }
  }
}
