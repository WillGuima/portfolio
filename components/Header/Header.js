import React from 'react'

import styles from './Header.module.css'

import Navbar from './Navbar'

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <img className={styles.logoImage} src="/logo.png" alt="Seed logo"/>
        <h4 className={styles.logo}>Seed</h4>
      </div>
      <Navbar />
    </header>
  )
}
