import styles from "./Coin.module.css"
import Layout from "../../components/Layout"

const Coin = ({ coin }) => {
  return (
    <Layout>
        <div className={styles.container}>
            <p className={styles.help}>click title to return to search</p>
            <div className={styles.coin_page}>
                <img src={coin.image.large} alt={coin.name} className={styles.coin_image} />
                <h1 className={styles.coin_name}>{coin.name}</h1>
                <p className={styles.coin_symbol}>{coin.symbol}</p>
                <p className={styles.coin_price}>${coin.market_data.current_price.usd}</p>
            </div>
        </div>
    </Layout>
  )
}

export default Coin

export async function getServerSideProps(context){
    const {id} = context.query
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    const data = await res.json()
    return {
        props: {
            coin: data
        }
    }
}