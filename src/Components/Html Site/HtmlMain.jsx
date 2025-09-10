import React from 'react'
import Header from './Header'
import Hero from './Hero'
 import About from './/About'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
const HtmlMain = () => {
  return (
    <main>
    
      <title>{" Sourav's Portfolio "}</title>


    <div className="h-screen overflow-x-hidden scrollbar-hide">
      <section className=' bg-drbgclr'>

        <Header />
      
        <section className="h-screen  " id='hero'>
          <Hero/>
        </section>
        <section className='overflow-hidden '>
        </section>
          <section id='about' className='h-screen'>
            <About />
          </section>

          
      <section className='h-screen bg-drbgclr ' id='projects'>
          <Projects />

        </section>
           <section className="" id='contact'>
          <Contact /> 
         </section> 
          <footer className='sticky bottom-5 md:bottom-0 w-full cursor-pointer z-50 flex flex-row justify-evenly space-x-[30vw]  '>
        <a href='#hero'>
            <div className='flex items-center justify-center'>
              <img
                className='h-14 w-14 bg-drfgclr rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
                src="/assets/HeroImg.png" alt={"image Button"} />
            </div>
        </a>
        <button className=" w-auto rounded-xl animate-pulse bg-drfgclr text-drbgclr ">
            <a href="https://drive.google.com/file/d/1knQNOE9QVauFPLxZYifSS2lgtQSuNWp3/view?usp=sharing" target="_blank" className='flex flex-row'>
              <span className='font-semibold flex flex-row text-md px-3'>
                  Resume &nbsp; <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </span>
            </a>
        </button>
          </footer>
       
      </section>
    </div>
  </main>
  )
}

export default HtmlMain