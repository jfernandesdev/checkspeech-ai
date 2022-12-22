import styles from './styles.module.scss'

interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  return (
    <h2 className={styles.title}>
      {title}
    </h2>
  )
}