import React from 'react'

import styles from './Navbar.module.css'

export default function Navbar(props) {
  return (
    <div className={styles.container}>
      <div className={styles.optionsContainer}>
        <ul className={styles.uList}>
          <li>
            <a className={styles.listItem} href="#home">Home</a>
          </li>
          <li>
            <a className={styles.listItem} href="#portfolio">Projects</a>
          </li>
          <li>
            <a className={styles.listItem} href="#about">About</a>
          </li>
          <li>
            <a className={styles.listItem} href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      
      <div className={styles.socialContainer}>
        <ul className={styles.uList}>
          <li>
            <a href="https://www.linkedin.com/in/william-guimaraes-58954630" target="_blank" rel="noopener noreferrer">
              <img className={styles.socialImage} src="/linkedin.png" alt="Linkedin Logo"/>
            </a>
          </li>
          <li>
            <a href="https://github.com/WillGuima" target="_blank" rel="noopener noreferrer">
              <img className={styles.socialImage} src="/github.png" alt="Github Logo"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
