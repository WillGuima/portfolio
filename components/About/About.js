import React from 'react'

import styles from './About.module.css'

import Social from './Social'

const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.maxlayout}>
        <div className={styles.containerWrapper}>
          <article className={styles.article}>
            <h3 className={styles.title}>About me</h3>
            <p className={styles.text}>
              Cras et efficitur justo. Curabitur accumsan accumsan ipsum, eget mollis augue hendrerit non. 
              Etiam a lacus interdum, commodo erat sed, vulputate augue. Sed at metus consectetur, vulputate eros 
              sit amet, auctor tellus. Donec lobortis diam turpis. Donec in sem vitae urna tincidunt posuere id quis 
              ligula. Vivamus vulputate, tellus ut mollis semper, sem ipsum finibus tortor, nec facilisis risus 
              lectus lacinia massa. Quisque ex orci, condimentum sed pretium at, tincidunt eu lorem. Aliquam 
              faucibus aliquam odio, finibus eleifend tellus porta nec. Curabitur laoreet suscipit porttitor. 
              Etiam at urna in est rhoncus molestie sed eu neque. Vivamus ut est feugiat, pretium nibh nec, 
              sollicitudin mauris.
            </p>
          </article>
          <article className={styles.article}>
            <h3 className={styles.title}>My education</h3>
            <div className={`${styles.text} ${styles.education}`}>
              <img className={styles.logo} src='/icon-usp.png' alt='University logo' />
              <p>University of Sao Paulo</p>
            </div>
            <p className={styles.university}>(Ranked #1 University in Latin America)</p>
            <p className={styles.university}>Bachelor degree in Electrical Engineering</p>
          </article>
        </div>
        <Social />
      </div>
    </section>
  )
}

export default About;
