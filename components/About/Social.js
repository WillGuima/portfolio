import React from 'react'

import styles from './Social.module.css'

const Social = () => {
  return (
    <article className={styles.container}>
      <h3 className={styles.title}>Networks</h3>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src='/linkedin-green.png' alt='Linkedin Green Logo' />
        <img className={styles.logo} src='/github-green.png' alt='Github Green Logo' />
      </div>
    </article>
  )
}

export default Social;
