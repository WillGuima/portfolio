import React from 'react'

import styles from './Social.module.css'

const Social = () => {
  return (
    <article className={styles.container}>
      <h3 className={styles.title}>Networks</h3>
      <div className={styles.logoContainer}>
        <a 
          className={styles.netIcon} 
          href="https://www.linkedin.com/in/william-guimaraes-58954630" 
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <img className={styles.logo} src='/linkedin-green.png' alt='Linkedin Green Logo' />
        </a>
        <a 
          className={styles.netIcon} 
          href="https://github.com/WillGuima" 
          target="_blank" 
          rel="noopener noreferrer" 
        >
          <img className={styles.logo} src='/github-green.png' alt='Github Green Logo' />
        </a>
      </div>
    </article>
  )
}

export default Social;
