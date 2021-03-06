import React, { useState } from 'react'

import styles from './About.module.css'

import Tab from './Tab'
import Social from './Social'

const Card = ({ children, title, image }) => (
  <div className={styles.cardContainer}>
    <div className={styles.contentContainer}>
      <div className={styles.textContainer}>
        <h2>{title}</h2>
        {children}
      </div>
      <div className={styles.pictureContainer}>
        <img className={styles.picture} src={image} alt="William's Picture"/>
      </div>
    </div>
  </div>
)

const About = () => {
  const [selected, setSelected] = useState(1)

  const selectHandler = (e) => {
    setSelected(parseInt(e.target.id))
  }

  const cardSelector = () => {
    switch(selected){
      case 1:
        return (<Card title='About me' image='/william.png' >
          <p className={styles.text}>
          I am a self-taught software developer who is able to design and build a web app from the ground up. 
          I am focused on Javascript technologies, such as ReactJS and NodeJS.
          <br/>
          <br/>
          Former project engineer for hydroelectric powerplants.
          </p>
        </Card>)
      case 2:
        return (<Card title='My education' image='/icon-mortar.png'>
          <div className={styles.uniContainer}>
            <img className={styles.uspLogo} src='/icon-usp.png' alt='USP Logo' />
            <p className={styles.usp}>University of Sao Paulo</p>
          </div>
          <p className={styles.info}>Bachelor degree in Electrical Engineering</p>
          <p className={styles.info}>(Ranked #1 University in Latin America)</p>
        </Card>)
      case 3:
        return (<Card title='Professional Experience' image='/portfolio.png'>
          <div className={styles.profContainer}>
            <img className={styles.srLogo} src='/suaredacao-logo.png' alt='Sua Redação Logo' />
            <p className={styles.sr}>Sua Redação. Fullstack Developer - jan/2019 </p>
          </div>
          <p className={styles.info}>
            I helped build the web app from the ground up using technologies such as: ReactJS, NodeJS, 
            ExpressJS and MongoDB. Also resposible for design changes planning with Figma.
          </p>
          <div className={styles.profContainer}>
            <img className={styles.geLogo} src='/ge.png' alt='Sua Redação Logo' />
            <p className={styles.sr}>GE Renewable Energy. Senior Engineer  oct/2018 - dec/2019</p>
          </div>
          <p className={styles.info}>
          Senior engineer for hydroelectric powerplants, specifically with the electrical balance of plant 
          (overall electrical infrastructure). Worked remotely with the Canadian team and with projects from Europe and Asia.
          </p>
          <div className={styles.profContainer}>
            <img className={styles.voithLogo} src='/voith.png' alt='Sua Redação Logo' />
            <p className={styles.sr}>Voith Hydro. Project Engineer  jan/2012 - feb/2018</p>
          </div>
          <p className={styles.info}>
            Project engineer for hydroelectric powerplants, responsible for design calculations and technical documents 
            for the electrical balance of plant of new powerplants.
          </p>
        </Card>)
    }
  }

  return (
    <section className={styles.container} id="about">
      <div className={styles.maxlayout}>
        <div className={styles.containerWrapper}>
          <div className={styles.tabsContainer}>
            <Tab name="About me" type={1} selected={selected === 1 ? true : false} clickHandler={selectHandler} />
            <Tab name="My education" type={2} selected={selected === 2 ? true : false} clickHandler={selectHandler} />
            <Tab name="Professional Exp." type={3} selected={selected === 3 ? true : false} clickHandler={selectHandler} />
          </div>
          {cardSelector()}
        </div>

        <Social />
      </div>
    </section>
  )
}

export default About;
