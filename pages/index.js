import Head from 'next/head'
import CoinList from '../components/CoinList/index.js'
import SearchBar from '../components/SearchBar'
import Title from '../components/Title/index.js'
import Layout from '../components/Layout'
import { useState } from 'react'

// prop is deconstructed. instead of passing props
// we can put the prop value in {}
export default function Home({coinsListObject}) {
  // state to handle search bar data
  const [search, setSearch] = useState('')

  // this variable will contain a list of all coins 
  // that include the typed in search value
  const allCoinsFromSearch = coinsListObject.filter(
    coin => coin.name.toLowerCase().includes(search.toLowerCase())
  )

  // when a change happens we update search state to
  // contain the current value of search bar
  const handleChange = e => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
  }
  return (
    <Layout>
      <SearchBar type="text" placeholder="Search..." onChange={handleChange}/>
      <CoinList list={allCoinsFromSearch}/>
    </Layout>
  )
}

// async await f(x) that gets data from coin api
// returns a prop containing coin list object
// coin list object is a list of individual coin objects
export const getServerSideProps = async() => {
  const apiURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
  const res = await fetch(apiURL)
  const coinsListObject = await res.json()
  return {
    props: {
      coinsListObject
    }
  }
}