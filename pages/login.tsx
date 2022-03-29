import type { NextPage } from 'next'
import Head from 'next/head'
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
        <input type="text" placeholder="Benutzername"></input>
        <input type="password" placeholder="Passwort"></input>
        <input type="submit"></input>
      </div>
    </div>

  )
}

export default Home
