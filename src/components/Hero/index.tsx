import { useState, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { parseCookies } from 'nookies'
import Image from 'next/image'

import { CookieBar } from '../CookieBar'

import styles from './styles.module.scss'

export function Hero() {
  const { t } = useTranslation('hero')
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
      <div>
        <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: t("title") }} />
        <p dangerouslySetInnerHTML={{ __html: t("subtitle") }} />
       
        <a href="#solutions" className={styles.ctaHome}>
          {t("knowMore")}
        </a>
      </div>

      <Image
        src='/mesh-sound.svg'
        className={styles.meshSound}
        alt=''
        width={1125}
        height={360}
        priority
      />

      {showAlert && <CookieBar onClose={onClose} />}
    </section>
  ) 
}