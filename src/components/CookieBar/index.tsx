import { useTranslation } from 'next-i18next'
import { setCookie } from 'nookies'
import { Cookie, X } from 'phosphor-react'

import styles from './styles.module.scss'

interface CookieBarProps {
  onClose: () => void
}

export function CookieBar({ onClose }: CookieBarProps) {
  const { t } = useTranslation('hero')
  
  function handleAcceptCookie() {
    setCookie(null, 'checkspeechAcceptCookies', 'true', {
      maxAge: 86400 * 400, //400 days
      path: '/'
    })
    onClose()
  }

  return (
    <div className = { styles.container }>
      <div>
        <Cookie size={32} />
        <span>
          {t("cookieConsentText")} <a href="#">{t("privacyPolicy")}</a>
        </span>

        <div className={styles.actionButtons}>
          <button 
            className={styles.acceptCookieButton}
            onClick={handleAcceptCookie}
            >
            {t("continueBrowsing")}
          </button>

          <button
            className={styles.closeButton}
            title={t("closeButton").toString()}
            onClick={onClose}
          >
            <X size={25} />
          </button>
        </div>
      </div>
    </div> 
  )
}