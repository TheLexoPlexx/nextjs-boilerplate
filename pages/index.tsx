import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CryptoBot Dashboard</title>
      </Head>

      <Navbar />

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

// https://nextjs.org/examples
// https://www.freecodecamp.org/news/dynamic-navigation-in-nextjs/