import { useState, useEffect } from 'react'
import { parseCookies } from 'nookies'
import Image from 'next/image'

import { CookieBar } from '../CookieBar'

import styles from './styles.module.scss'

export function Hero() {
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    const cookies = parseCookies()

    if (cookies.checkspeechAcceptCookies) {
      return setShowAlert(false)
    }

    setShowAlert(true)
  }, [])

  function onClose() {
    setShowAlert(false)
  }

  return(
    <section className={styles.container} id="home">
      <h1 className={styles.title}>
        Transforme suas falas <br />em textos usando <br /><span> Inteligência Artificial</span>
      </h1>

      <p>
        CheckSpeech AI é um conjunto de APIs de conversão de fala em textos, <br />bem como a interpretação do sentimento dominante nos dizeres.
      </p>

      <a href="#solutions" className={styles.ctaHome}>
        Saiba mais
      </a>

      <Image
        src='/mesh-sound.svg'
        className={styles.meshSound}
        alt=''
        width={1125}
        height={360}
      />

      {showAlert && <CookieBar onClose={onClose} />}
    </section>
  ) 
}