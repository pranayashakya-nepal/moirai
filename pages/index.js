import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moirai Corporation</title>
        <meta name="description" content="Moirai Corporation Website. Currently just the Privacy Policy and Terms and Conditions are added." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to
          
        </h1>
        <img src="/logo.svg" className={styles.logo}/>

      </main>

      <footer className={styles.footer}>
          <div className={styles.grid}>
            <p>&copy; 2022 Moirai Corporation Pvt. Ltd. | All rights reserved. </p>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Privacy Policy</h2>
            
          </a>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Terms and Condition</h2>
            
          </a>
          </div>
      </footer>
    </div>
  )
}
