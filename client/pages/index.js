import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Main from '../components/Main'
import TransactionHistory from '../components/TransactionHistory'

export default function Home() {
  const styles = {
    wrapper:`bg-uniswapColor h-screen w-screen`,
  }
  return (
    <div className={styles.wrapper}>
      <Header/>
      <Main/>
      <TransactionHistory/>
    </div>
  )
}
