import React from 'react'

import styles from './Projects.module.css'

export default function Projects({ title, background, id, children }) {
  return (
    <section className={styles.container} style={{backgroundColor: background}} id={`${id}`}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.cardsContainer}>
          {children}
        </div>
      </div>
    </section>
  )
}
