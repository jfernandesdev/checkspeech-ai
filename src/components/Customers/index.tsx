import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { Title } from '../Title'
import { Text } from '../Text'

import styles from './styles.module.scss'

export function Customers() {
  const { t } = useTranslation('customers')
  
  return(
    <section className={styles.container} id="customers">
      <Title>{t("title")}</Title>
      <Text>{t("subtitle")}</Text>

      <ul className={styles.customerList}>
        {Array.from({ length: 8 }).map((_, index) => (
          <li key={index}>
            <Image 
              src={`/customer/${index+1}.svg`} 
              alt={`Cliente ${index+1}`} 
              width={250} 
              height={115} 
              priority
            />
          </li>
        ))}
      </ul>
    </section>
  )
}