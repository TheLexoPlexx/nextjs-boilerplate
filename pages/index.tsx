import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CryptoBot Dashboard</title>
        <meta name="description" content="Dashboard für den CryptoBot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <h1>Login</h1>
        <h3>Hier steht Text.</h3>
        <Link href="/login">
          <a>Link</a>
        </Link>
      </div>
    </div>
  )
}

export default Home
