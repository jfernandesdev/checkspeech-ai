import Image from 'next/image'
import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react'

import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div>
          <Image 
          src="/logo-checkspeech.svg" 
          alt="CheckSpeech AI" 
          width={217} 
          height={39} 
        />

          <span>Temos uma das melhores engines de <br/> reconhecimento de fala do mundo!</span>

          <div className={styles.socialMedia}>
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noreferrer"
              title="Explore nosso Instagram!" 
            >
              <InstagramLogo size={30} />
            </a>

            <a 
              href="https://www.facebook.com/" 
              target="_blank"
              rel="noreferrer"
              title="Curta nosso Facebook!" 
             >
              <FacebookLogo size={30} />
            </a>

            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noreferrer"
              title="Conexe com nosso Linkedin!" 
            >
              <LinkedinLogo size={30} />
            </a>

            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noreferrer"
              title="Siga nosso Twitter!" 
            >
              <TwitterLogo size={30} />
            </a>
          </div>
        </div>

        <div>
          <ul>
            <strong>Links úteis</strong>
            <li>
              <a href="#solutions">Soluções</a>
            </li>
            <li>
              <a href="#customers">Clientes</a>
            </li>
            <li>
              <a href="#prices">Preços</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
            <li>
              <a href="#">Termos & Privacidade</a>
            </li>
          </ul>
        </div>
        
        <div>
          <ul>
            <strong>Contato</strong>
            <li>+55 (99) 9999-9999</li>
            <li>
              <a href="#">contato@checkspeechai.com</a>
            </li>
            <li>Rua Desembargador Edésio <br/>Fernandes, 148 Conj 208 Estoril - Belo <br/>Horizonte/MG - Brasil CEP: 30494-450</li>
          </ul>
        </div>
      </div>
      <div className={styles.copy}>
        <span>
          Copyright &copy; 2022 CheckSpeech AI. All Rights Reserved.
        </span>

        <span>
          By <a href="https://jfernandes.dev.br/" target="_blank" rel="noreferrer">Jeferson Fernandes</a>
        </span>
      </div>
    </footer>
  )
}