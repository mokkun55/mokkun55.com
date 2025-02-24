import dayjs from 'dayjs'
import styles from './index.module.scss'

type Props = {
  id: string
  date: Date
  title: string
  description: string
  image: string
}

export const Work = ({ id, date, title, description, image }: Props) => {
  return (
    <div className={styles.container} key={id}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.date}>{dayjs(date).format('YYYY/MM/DD')}</p>
      </div>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.textContainer}>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
