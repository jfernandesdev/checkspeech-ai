import { useRouter } from 'next/router'
import { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'

import styles from './styles.module.scss'

const langTypes = {
  BR: 'pt-BR',
  US: 'en-US',
  ES: 'es'
}

function findKey(value: string) {
  for (let key in langTypes)
    if (langTypes[key] === value) return key;
}

export function SelectLanguage() {
  const router = useRouter()
  const [selected, setSelected] = useState(findKey(router.query.locale.toString()))

  function handleLanguageChange(code: string) {
    const anchorTag = window.location.hash && `/${window.location.hash}`;
    router.push(`/${langTypes[code]}${anchorTag}`)
    setSelected(code)
  }

  return (
    <ReactFlagsSelect
      selected={selected}
      onSelect={handleLanguageChange}
      rfsKey="select-the-language"
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