import Coin from "../Coin"
import styles from "./CoinList.module.css"

export default function CoinList({list}){
    return (
        <div className={styles.container}>
            
            <div className={styles.column_titles}>
                <p className={styles.title_coin}>Coin</p>
                <p> </p>
                <p className={styles.title}>Price</p>
                <p className={styles.title}>Price Change</p>
                <p className={styles.title}>Volume</p>
                <p className={styles.title}>Market Cap</p>
            </div>
            {list.map((coin) => {
                 return (
                    <Coin 
                        key={coin.id}
                        name={coin.name}
                        id={coin.id}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketCap={coin.market_cap}
                        volume={coin.total_volume}
                        image={coin.image}
                        priceChange={coin.price_change_24h}
                    />
                 )
            })}
        </div>
    )
    
}