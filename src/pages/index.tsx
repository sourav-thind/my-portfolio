import Header from '@/Commponents/Header'
import Hero from '@/Commponents/Hero'
import CanvasLoader from '@/Commponents/CanvasLoader'
import Skills from '@/Commponents/Skills'
import Contact from '@/Commponents/Contact'
import Project from '@/Commponents/Projects'
import ProjectCard from '@/Commponents/ProjectCard'
import About from '@/Commponents/About'




export default function Home() {

  return (
<main>
  <div className="">
    <section className="h-screen bg-drfgclr/50   snap-start w-screen">
      <CanvasLoader />
    </section>

    <Header />
    <section className="h-[90vh] snap-center " id='hero'>
      <Hero />
    </section>
    <section id='about'>
      <About/>
    </section>
    <section className="h-[90vh] snap-center" id='skills'>
      <Skills />
    </section>
    <section className='h-screen bg-drbgclr' id='projects'>
      <Project/>
      <ProjectCard/>
    </section>
    <section className="h-[90vh] snap-center" id='contact'>
      <Contact />
    </section>
  </div>
</main>

  )
}

