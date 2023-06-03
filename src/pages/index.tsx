import Header from '@/Commponents/Header'
import Hero from '@/Commponents/Hero'
import CanvasLoader from '@/Commponents/CanvasLoader'
import Skills from '@/Commponents/Skills'
import Contact from '@/Commponents/Contact'
import Project from '@/Commponents/Projects'
import About from '@/Commponents/About'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import HeroImg from '../../public/HeroImg.png'
import Image from 'next/image'
import Head from 'next/head'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'



export default function Home() {

  return (


    <main>
      <Head>
        <title>{" Sourav's Portfolio "}</title>

      </Head>

      <div className="h-screen scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-drfgclr">

        <div className="overflow-x-hidden">
          <section className="h-screen w-screen   bg-slate-600  ">
            <CanvasLoader />
          </section>
        </div>
        <section className=' bg-drbgclr'>

          <Header />

          <section className="h-screen  " id='hero'>
            <Hero />
          </section>
          <section className='overflow-hidden '>
            <section id='about' className='h-screen'>
              <About />
            </section>

            <section className="h-screen " id='skills'>
              <Skills />
            </section>
          </section>
          <section className='h-screen bg-drbgclr ' id='projects'>
            <Project />

          </section>
          <section className="" id='contact'>
            <Contact />
          </section>
         
            <footer className='sticky bottom-5 w-full cursor-pointer z-50 flex flex-row justify-evenly '>
          <Link href='#hero'>
              <div className='flex items-center justify-center'>
                <Image
                  className='h-14 w-14 bg-drfgclr rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
                  src={HeroImg} alt={"image Button"} />
              </div>
          </Link>
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

