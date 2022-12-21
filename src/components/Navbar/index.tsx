import Image from 'next/image'

import styles from './styles.module.scss'

const optionsMenu = [
  { title: 'Home', url: '#home'},
  { title: 'Soluções', url: '#solutions' },
  { title: 'Clientes', url: '#customer' },
  { title: 'Preços', url: '#prices' },
  { title: 'Contato', url: '#contact' },
]

export function Navbar() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a href="#home">
          <Image 
            src="/logo-checkspeech.svg" 
            alt="CheckSpeech AI" 
            width={182} 
            height={23} 
          />
        </a>

        <ul className={styles.nav}>
          {optionsMenu.map(item => (
            <li key={item.title}>
              <a href={item.url}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}