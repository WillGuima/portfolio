import React from 'react'

import styles from './ButtonHero.module.css'

const ButtonHero = () => {
  return (
    <button className={styles.container}>
      <a className={styles.anchor} href="#portfolio">
        See my work
      </a>
    </button>
  )
}

export default ButtonHero