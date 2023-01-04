import { useState, useEffect } from 'react'
import Scrollspy from 'react-scrollspy'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

import styles from './styles.module.scss'
import { SelectLanguage } from '../SelectLanguage'

export function Navbar () {
  const { t } = useTranslation('menu')
  const [mounted, setMounted] = useState(false);
  const [navbarIsActive, setNavbarIsActive] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 15) {
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

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

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
        <a href="#home" className={styles.logo}>
          <Image 
            src="/logo-checkspeech.svg" 
            alt="CheckSpeech AI" 
            width={182} 
            height={23} 
            priority
          />
        </a>

        <div className={styles.nav}>
          {mounted && (
            <Scrollspy
              items={optionsMenu.map(item => item.slug)}
              offset={-100}
              currentClassName={styles.active}
              className={`${menuIsOpen && styles.openMenu}`}
            >
              {optionsMenu.map((item) => (
                <li key={item.slug}>
                  <a href={`#${item.slug}`} onClick={() => setMenuIsOpen(false)}>
                    {item.name}
                  </a>
                </li>
              ))} 
            </Scrollspy>
          )}

          <SelectLanguage />

          <button
            className={`${styles.navbarToggler} ${menuIsOpen && styles.active}`}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-pressed="true"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} />
            ))}
          </button>
        </div>
      </div>
    </header>
  )
}