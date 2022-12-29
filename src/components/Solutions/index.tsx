import { useTranslation } from 'next-i18next'

import { Title } from '../Title'
import { Text } from '../Text'
import { Button } from '../Button'
import { Accordion } from '../Accordion'

import styles from './styles.module.scss'

export function Solutions() {
  const { t } = useTranslation('solutions')
  
  return(
    <section className={styles.container} id="solutions">
      <div>
        <Title>{t("title")}</Title>
        <Text> {t("text")}
        </Text>
        <Button 
          title={t("cta")}
          url="#contact"
        />
      </div>
      
      <Accordion />
    </section>
  ) 
}