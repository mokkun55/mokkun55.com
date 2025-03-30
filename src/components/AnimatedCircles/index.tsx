import styles from './styles.module.scss'

export const AnimatedCircles = () => {
  return (
    <div>
      <ul className={styles.circles}>
        {[...Array(10)].map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <li key={i} />
        ))}
      </ul>
    </div>
  )
}
