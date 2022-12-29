import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ReactFlagsSelect from 'react-flags-select'

import styles from './styles.module.scss'

const langTypes = {
  BR: 'pt-br',
  US: 'en-us',
  ES: 'es'
}

export function SelectLanguage() {
  const router = useRouter()
  const { pathname, asPath, query } = router
  const [selected, setSelected] = useState('BR')

  function handleLanguageChange(code: string) {
    router.push({ pathname, query }, asPath, { locale: [langTypes[code]].toString() })
    setSelected(code)
  }

  function findKey(value: string) {
    for (let key in langTypes)
      if (langTypes[key] === value) return key;
    return 'BR';
  }

  useEffect(() => {
    var localeValue = router.locale.toLocaleLowerCase();
    setSelected(findKey(localeValue))
  }, [router])

  return (
    <ReactFlagsSelect
      selected={selected}
      onSelect={handleLanguageChange}
      placeholder="Idioma"
      countries={["BR", "US", "ES"]}
      customLabels={{
        BR: { primary: "pt-BR" },
        US: { primary: "en-US", },
        ES: { primary: "es", },
      }}
      className={styles.languageSelection}
    />
  )
}