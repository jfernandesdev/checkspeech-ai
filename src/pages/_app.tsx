import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Poppins } from '@next/font/google'

import '../styles/global.scss'

const poppins = Poppins({
  weight: ["200", "400", "500", "600", "700"],
  style: ['normal'],
  subsets: ['latin'],
  fallback: ['system-ui', 'arial'],
  variable: '--poppins-font'
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
     <>
      {/*eslint-disable-next-line react/no-unknown-property*/}
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>

    <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App);