import React, { useState, useEffect } from 'react'
import Scrollspy from 'react-scrollspy'
import Image from 'next/image'

import ReactFlagsSelect  from 'react-flags-select'

import styles from './styles.module.scss'

const optionsMenu = [
  { name: 'Home', key: 'home'},
  { name: 'Soluções', key: 'solutions' },
  { name: 'Clientes', key: 'customers' },
  { name: 'Preços', key: 'prices' },
  { name: 'Contato', key: 'contact' },
]

export function Navbar() {
  const [navbarIsActive, setNavbarIsActive] = useState(false)
  const [selected, setSelected] = useState('BR')

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

  const onSelect = (code:string): void => setSelected(code)

  return (
    <header className={`${styles.headerContainer} ${navbarIsActive && styles.active}`}>
      <div className={styles.headerContent}>
        <a href="#home">
          <Image 
            src="/logo-checkspeech.svg" 
            alt="CheckSpeech AI" 
            width={182} 
            height={23} 
          />
        </a>

        <Scrollspy 
          items={optionsMenu.map(item => item.key)} 
          offset={-100}
          currentClassName={styles.active} 
          className={styles.nav}
        >
            {optionsMenu.map(item => (
              <li key={item.key}>
                <a  href={"#" + item.key} >
                  {item.name}
                </a>
              </li>
            ))} 

          <ReactFlagsSelect
            selected={selected}
            onSelect={onSelect}
            placeholder="Idioma"
            countries={["BR", "US", "ES"]}
            customLabels={{
              BR: { primary: "PT-BR" },
              US: { primary: "US", },
              ES: { primary: "ES", },
            }}
            className={styles.languageSelection}
          />
        </Scrollspy>
      </div>
    </header>
  )
}