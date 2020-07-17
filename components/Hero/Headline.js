import React from 'react'

import styles from './Headline.module.css'

import ButtonHero from '../Buttons/ButtonHero'

export default function Headline() {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>
        Hello, I am <br />
        <span className={styles.name}>William Guimarães</span>
      </h1>
      <h2 className={`${styles.headline} ${styles.marginButton}`}>Fullstack developer based in Brazil</h2>
      <ButtonHero />
    </div>
  )
}
