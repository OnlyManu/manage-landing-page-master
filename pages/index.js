import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/navbar/navbar'
import Hero from '../components/hero/hero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Manage landing page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png"/>
      </Head>

      <header className={styles.header}>
        <Navbar />
        <Hero />
      </header>
      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
