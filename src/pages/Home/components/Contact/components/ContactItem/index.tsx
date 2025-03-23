import type { ReactNode } from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router'

type Props = {
  title: string
  text: string
  icon: ReactNode
  url?: string
}

export const ContactItem = ({ title, text, icon, url }: Props) => {
  return (
    <Link className={styles.container} to={url || '/'}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </Link>
  )
}
