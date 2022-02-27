import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../components/Carousel'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eco Bio Friendly</title>
        <meta name="description" content="Eco bio friendly helps everyone safe the world." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Features />
      <Carousel />
      <Footer />

      

      
    </div>
  )
}

export default Home
