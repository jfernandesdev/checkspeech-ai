import { useTranslation } from 'next-i18next'

import { Title } from '../Title'
import { Text } from '../Text'
import { Button } from '../Button'

import styles from './styles.module.scss'

export function Banner() {
  const { t } = useTranslation('banner')
  
  return (
    <div className={styles.container}>
      <div>
        <Title>{t('title')}</Title>
        <Text>{t('subtitle')}</Text>
      </div>
      <Button 
        title={t('cta').toString()}
        url="#contact" 
      />
    </div>
  )
}