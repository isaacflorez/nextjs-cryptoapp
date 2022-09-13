import styles from './Coin.module.css'
import Link from 'next/link'
const Coin = (props) => {
  return (
    <Link href="/coin/[id]" as={`/coin/${props.id}`}>
      <a>
        <div className={styles.coin}>
          <div className={styles.coin_info}>
            <div className={styles.coin_title}>
              <img src={props.image} alt={props.name} className={styles.coin_image} />
              <h1 className={styles.coin_name}>{props.name}</h1>
              <p className={styles.coin_symbol}>{props.symbol}</p>
            </div>
            <div> </div>
            <p className={styles.coin_price}>${props.price}</p>
            <p id={styles.coin_price_change} 
              className= {props.priceChange > 0 ? styles.green : styles.red}>
              {props.priceChange.toFixed(4)}
            </p>
            <p className={styles.coin_volume}>${props.volume}</p>
            <p className={styles.coin_market_cap}>${props.marketCap}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Coin