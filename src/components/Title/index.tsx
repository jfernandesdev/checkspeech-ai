import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface TitleProps {
  children: ReactNode
}

export function Title({ children }: TitleProps) {
  return (
    <h2 className={styles.title}>
      {children}
    </h2>
  )
}