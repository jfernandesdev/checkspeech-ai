import { useState, useEffect } from 'react'
import { parseCookies, setCookie} from 'nookies'
import { Cookie, X } from 'phosphor-react'

import styles from './styles.module.scss'

export function CookieBar() {
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

  function handleAcceptCookie() {
    setCookie(null, 'checkspeechAcceptCookies', 'true', {
      maxAge: 86400 * 400, //400 days
      path: '/'
    })

    onClose()
  }

  return (
    showAlert && (
      <div className = { styles.container } >
        <div>
          <Cookie size={32} />
          <span>
            Este website utiliza cookies para oferecer uma melhor experiência de navegação. Ao navegar pelo site, você concorda com o uso de cookies. Para mais informações, consulte a nossa <a href="#">Política de Privacidade</a>.
          </span>

          <div className={styles.actionButtons}>
            <button 
              className={styles.acceptCookieButton}
              onClick={handleAcceptCookie}
              >
              Continuar navegando
            </button>

            <button
              className={styles.closeButton}
              title="Fechar aviso"
              onClick={onClose}
            >
              <X size={25} />
            </button>
          </div>
        </div>
    </div > 
    )
  )
}