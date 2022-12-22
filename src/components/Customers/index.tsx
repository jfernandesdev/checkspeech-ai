import Image from 'next/image'
import { Title } from '../Title'
import { Text } from '../Text'

import styles from './styles.module.scss'

export function Customers() {
  return(
    <section className={styles.container}>
      <Title title='Nosso Clientes' />
      <Text>Somos parceiros nos mais variados projetos e desafios de grandes marcas</Text>

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