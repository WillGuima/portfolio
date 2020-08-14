import React from 'react'

import styles from './Hero.module.css'

import Header from '../Header'
import Headline from './Headline'
import HeroImage from './HeroImage'

const Hero = () => {
  return (
    <main className={styles.container} id="home">
      <Header />
      <section className={styles.heroContainer}>
        <Headline />
        <HeroImage />
      </section>
    </main>
  )
}

export default Hero