import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react'

import styles from './styles.module.scss'

export function Footer() {
  const { t } = useTranslation()
  
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

          <span>{t("footer:text")}</span>

          <div className={styles.socialMedia}>
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noreferrer"
              title={t("footer:instagramButtonTitle").toString()}
            >
              <InstagramLogo size={30} />
            </a>
            <a 
              href="https://www.facebook.com/" 
              target="_blank"
              rel="noreferrer"
              title={t("footer:facebookButtonTitle").toString()}
             >
              <FacebookLogo size={30} />
            </a>
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noreferrer"
              title={t("footer:linkedinButtonTitle").toString()}
            >
              <LinkedinLogo size={30} />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noreferrer"
              title={t("footer:twitterButtonTitle").toString()}
            >
              <TwitterLogo size={30} />
            </a>
          </div>
        </div>

        <div>
          <ul>
            <strong>{t("footer:usefulLinks")}</strong>
            <li>
              <a href="#solutions">
                {t("menu:solutions")}
              </a>
            </li>
            <li>
              <a href="#customers">
                {t("menu:customers")}
              </a>
            </li>
            <li>
              <a href="#prices">
                {t("menu:prices")}
              </a>
            </li>
            <li>
              <a href="#contact">
                {t("menu:contact")}
              </a>
            </li>
            <li>
              <a href="#">
                {t("menu:termsAndPrivacy")}
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <ul>
            <strong>
              {t("footer:contact")}
            </strong>
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