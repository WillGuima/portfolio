import React from 'react'

import styles from './HeroImage.module.css'

const HeroImage = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src='/hero-startup.png' alt="A rocket startup" />
    </div>
  )
}

export default HeroImage
