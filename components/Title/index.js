import styles from './Title.module.css'
const Title = () => {
  return (
    <div className={styles.title_content}>
        <div className={styles.title}>Crytpo App</div>
        <p className={styles.sub_title}>API form coingecko.com</p>
    </div>
  )
}

export default Title