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
        <meta name='description' content='CheckSpeech AI é um conjunto de APIs de conversão de fala em textos, bem como a interpretação do sentimento dominante nos dizeres.' />
        <meta property='og:title' content='CheckSpeech AI' />
        <meta
          property='og:description'
          content='CheckSpeech AI é um conjunto de APIs de conversão de fala em textos, bem como a interpretação do sentimento dominante nos dizeres.'
        />
        <meta property='og:type' content='website' />
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
