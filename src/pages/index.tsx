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
import { MediaQueryProvider, useMediaQuery } from '@/Commponents/MediaQueryContext'
import Loading from '@/Commponents/Loading'
import Head from 'next/head'



export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  // if (isLoading) {
  //   return (
  //     <div className='bg-slate-500/50 h-screen justify-center items-center'>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
const isMobile = useMediaQuery();
  return (
    <MediaQueryProvider>

    <main>
    <Head>
        <title>{" Sourav's Portfolio "}</title>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </Head>     
      <div className="h-screen scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-drfgclr">
       {isLoading && <Loading/> }
        {!isMobile && <div className="overflow-x-hidden">
          <section className="h-screen w-screen   bg-slate-600  ">
            <CanvasLoader />
          </section>
        </div>}
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
          <section className="h-screen " id='contact'>
            <Contact />
          </section>
          <Link href='#hero'>
            <footer className='sticky bottom-5 w-full cursor-pointer z-50'>
              <div className='flex items-center justify-center'>
                <Image
                  className='h-14 w-14 bg-drfgclr rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
                  src={HeroImg} alt={"image Button"} />
              </div>
            </footer>
          </Link>
        </section>
      </div>
    </main>
    </MediaQueryProvider>

  )
}

