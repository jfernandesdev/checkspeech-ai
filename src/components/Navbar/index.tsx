import { useState, useEffect } from 'react'
import Scrollspy from 'react-scrollspy'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

import styles from './styles.module.scss'
import { SelectLanguage } from '../SelectLanguage'

export function Navbar() {
  const { t } = useTranslation('menu')
  const [navbarIsActive, setNavbarIsActive] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 15) {
        setNavbarIsActive(true);
      } else {
        setNavbarIsActive(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  const optionsMenu = [
    { name: t("home"), slug: 'home' },
    { name: t("solutions"), slug: 'solutions' },
    { name: t("customers"), slug: 'customers' },
    { name: t("prices"), slug: 'prices' },
    { name: t("contact"), slug: 'contact' },
  ]

  return (
    <header className={`${styles.headerContainer} ${navbarIsActive && styles.active}`}>
      <div className={styles.headerContent}>
        <a href="#home">
          <Image 
            src="/logo-checkspeech.svg" 
            alt="CheckSpeech AI" 
            width={182} 
            height={23} 
            priority
          />
        </a>

        <Scrollspy
          items={['home', 'solutions', 'customers', 'prices', 'contact']}
          offset={-100}
          currentClassName={styles.active}
          className={styles.nav}
        >
          {optionsMenu.map((item) => (
            <li key={item.slug}>
              <a href={`#${item.slug}`}>
                {item.name}
              </a>
            </li>
          ))} 
          <SelectLanguage />
        </Scrollspy>
      </div>
    </header>
  )
}