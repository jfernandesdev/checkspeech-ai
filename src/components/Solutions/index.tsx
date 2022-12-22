import { Title } from '../Title'
import { Text } from '../Text'
import { Button } from '../Button'
import { Accordion } from '../Accordion'

import styles from './styles.module.scss'

export function Solutions() {
  return(
    <section className={styles.container}>
      <div>
        <Title>Nossas Soluções</Title>
        <Text>
          Nossa IA é treinada em mais de 500.000 horas de áudios,<br /> transcritos por humanos de uma ampla variedade de idades, <br />nacionalidades, sotaques e níveis de instruções. A API é <br />comercializada no modelo SAAS (software as a service).
        </Text>
        <Button title="Comece agora" url="#contact" />
      </div>
      
      <Accordion />
    </section>
  ) 
}