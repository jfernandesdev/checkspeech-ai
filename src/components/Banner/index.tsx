import { Title } from "../Title";
import { Text } from "../Text";
import { Button } from "../Button";

import styles from './styles.module.scss'

export function Banner() {
  return (
    <div className={styles.container}>
      <div>
        <Title>Experimente nossa solução</Title>
        <Text>O CheckSpeech AI pode ser um parceiro estratégico para o seu negócio.</Text>
      </div>
      <Button title="Comece agora" url="#contact" />
    </div>
  )
}