import Header from '@/Commponents/Header'
import Hero from '@/Commponents/Hero'
import CanvasLoader from '@/Commponents/CanvasLoader'
import Skills from '@/Commponents/Skills'
import Contact from '@/Commponents/Contact'
import Project from '@/Commponents/Projects'
import ProjectCard from '@/Commponents/ProjectCard'




export default function Home() {

  return (
<main>
  <div className="snap-y snap-mandatory overflow-y-scroll">
    <section className="h-screen bg-drfgclr/50   snap-start">
      <CanvasLoader />
    </section>
    <Header />
    <section className="h-screen snap-center">
      <Hero />
    </section>
    <section className="h-screen snap-center">
      <Skills />
    </section>
    <section className='h-screen bg-drbgclr'>
      <Project/>
      <ProjectCard/>
    </section>
    <section className="h-screen snap-center">
      <Contact />
    </section>
  </div>
</main>

  )
}

