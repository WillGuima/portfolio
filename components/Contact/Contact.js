import React from 'react'

import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.container} id="contact">
      <h4 className={styles.title}>Get in touch!</h4>
      <div className={styles.buttonContainer}>
        <a href="" className={styles.button}>
          <img className={styles.icon} src="/icon-email.png" alt="A letter icon" />
          william.moura.guimaraes@gmail.com
        </a>
      </div>
    </section>
  )
}
