import styles from './index.module.scss'

type Props = {
  title: string
}

export const SectionTitle = ({ title }: Props) => {
  return (
    <p className={styles.title}>
      {'<'}
      {title}
      {'/>'}
    </p>
  )
}
