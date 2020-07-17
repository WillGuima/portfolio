import React from 'react'

import styles from './ProjectItem.module.css'

export default function ProjectItem({ 
  title, description, techs, gitLink, liveLink, source
}) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        {title}
      </h3>
      <p className={styles.description}>
        {description}
      </p>
      <div className={styles.techContainer}>
        {techs.map((tech) => {
          return <img key={tech.alt} className={styles.tech} src={tech.tech} alt={tech.alt}/>
        })}
      </div>
      <div className={styles.divider} />
      <div className={styles.sourceContainer}>
        {source
          ? (<a href={gitLink} className={styles.sourceItem}>
              <img className={styles.github} src="/github.svg" alt="Github Logo"/>
              <p className={styles.source}>Source code</p>
            </a>)
          : null
        }
      </div>
      <a href={liveLink} className={styles.button}>
        Live view
      </a>
    </div>
  )
}
