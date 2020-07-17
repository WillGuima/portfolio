import Head from 'next/head'

import Hero from '../components/Hero'
import Projects from '../components/Projects'
import ProjectItem from '../components/ProjectItem'
import Cta from '../components/CTA'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>William Guimarães</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&family=Nunito:wght@700&display=swap" rel="stylesheet"></link>
      </Head>
      <Hero />
      <Projects
        title="Portfolio Projects"
        background="#22273B"
        id="portfolio"
      >
        <ProjectItem
          title="QuizAPP"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia ex in erat sollicitudin, 
            eget venenatis nisi finibus. Donec ullamcorper odio urna, at laoreet nibh luctus vel. 
            Suspendisse potenti."
          techs={[
            { tech: '/javascript.jpg', alt: 'Javascript Logo'}, 
            { tech: '/figma.png', alt: 'Figma Logo'}, 
          ]}
          gitLink=""
          liveLink=""
          source={true}
        />
      </Projects>
      <Projects
        title="Commercial Projects"
        background="#1E2336"
        id="commercial"
      >
        <ProjectItem
          title="QuizAPP"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia ex in erat sollicitudin, 
            eget venenatis nisi finibus. Donec ullamcorper odio urna, at laoreet nibh luctus vel. 
            Suspendisse potenti."
          techs={[
            { tech: '/javascript.jpg', alt: 'Javascript Logo'}, 
            { tech: '/figma.png', alt: 'Figma Logo'}, 
          ]}
          gitLink=""
          liveLink=""
          source={false}
        />
      </Projects>
      <Cta />
    </div>
  )
}
