import Head from 'next/head'

import Hero from '../components/Hero'
import Projects from '../components/Projects'
import ProjectItem from '../components/ProjectItem'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>William Guimarães - Fullstack Developer</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&family=Nunito:wght@700&display=swap" rel="stylesheet"></link>
      </Head>
      <Hero />
      <Projects
        title="Commercial Projects"
        background="#22273B"
        id="portfolio"
      >
        <ProjectItem
          title="WebApp - Sua Redação"
          description="'Sua Redação' is a website that connects students with essay professors. Through the website, 
          the professor can give students feedback about their writing skills using the features built. "
          techs={[
            { tech: '/javascript.jpg', alt: 'Javascript Logo'},
            { tech: '/reactjs.png', alt: 'ReactJS Logo'},
            { tech: '/nodejs.png', alt: 'NodeJS Logo'},
            { tech: '/mongodb.svg', alt: 'MongoDB Logo'},
            { tech: '/figma.png', alt: 'Figma Logo'}, 
          ]}
          gitLink=""
          liveLink="https://www.suaredacao.com.br"
          source={false}
        />
        <ProjectItem
          title="LandingPage - Luciana Rugoni"
          description="Personal landingpage built for a Brazilian professor to advertise his services. 
          The public in mind was young highschool students aiming to go to college."
          techs={[
            { tech: '/javascript.jpg', alt: 'Javascript Logo'},
            { tech: '/reactjs.png', alt: 'ReactJS Logo'},
            { tech: '/figma.png', alt: 'Figma Logo'}, 
          ]}
          gitLink=""
          liveLink="https://www.lucianarugoni.com.br"
          source={false}
        />
      </Projects>
      <About />
      <Contact />
    </div>
  )
}
