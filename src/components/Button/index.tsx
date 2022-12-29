import Link from 'next/link'
import styles from './styles.module.scss'

interface ButtonProps {
  title: string;
  url: string;
}

export function Button({ title, url }: ButtonProps) {
  return (
    <Link href={url} passHref>
      <button className={styles.button} aria-label={title}>
        {title}
      </button>
    </Link>
  )
}