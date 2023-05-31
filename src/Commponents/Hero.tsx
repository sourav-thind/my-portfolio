import React from 'react'
import HeroImg from '../../public/HeroImg.png'
import Image from "next/image";
import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='w-full overflow-hidden h-screen mx-auto bg-drbgclr'>
      <div className='relative top-[4rem] md:top-[6rem] max-w-7xl mx-auto flex flex-col  gap-3 justify-center  ' >
        <div className=' relative flex flex-row items-start'>
          <motion.div
          initial= {{
          x: 200,
     
         }}
         whileInView={{
           x: 0,

       }}
         transition={{
           duration: 1.4,
         }}
          className='h-5 w-5 rounded-full bg-drfgclr ' />
          <div className='h-1 sm:w-[800px] w-[360px] bg-gradient-to-r from-drfgclr my-auto' />

        </div>
        <div className='flex flex-col md:flex-row ml-0 md:ml-5 justify-between '>

        <div className=' flex flex-col  mx-auto gap-y-5'>
          <motion.h1
          initial= {{
            y: 60,
       
           }}
           whileInView={{
             y: 0,
  
           }}
           transition={{
             duration: 1,
           }} 
           className=' text-4xl  md:text-7xl  text-drfgclr font-bold'>Souravpreet Singh
          </motion.h1>
          <motion.div
           initial= {{
             y: 60,
        
            }}
            whileInView={{
              y: 0,
   
            }}
            transition={{
              duration: 1,
            }} 
          className=' flex flex-col md:flex-row mt-6 md:mt-[4rem]  justify-between mx-auto  text-drgry text-2xl'> 
          <div>I am not just a developer, &nbsp;</div>
          <div className='text-drwht text-3xl'>I AM <span className='text-drfgclr '> THE </span> DEVELOPER  </div>
            </motion.div>
            
            <motion.div
             initial= {{
               y: 60,
          
              }}
              whileInView={{
                y: 0,
     
              }}
              transition={{
                duration: 1,
              }} 
            className='flex flex-rows mx-auto space-x-0 mt-[2rem] md:mt-[8rem]  md:space-x-6'>
              <button>
                <a href="#about">
                  <span className="box">ABOUT</span>
                </a>
              </button>

              <button>
                <a href="#skills">
                  <span className="box">Skills</span>
                </a>
              </button>

              <button>
                <a href="#projects">
                  <span className="box">Projects</span>
                </a>
              </button>

              <button>
                <a href="#contact">
                  <span className="box">Contact</span>
                </a>
              </button>

        </motion.div>
       

        </div>
        <motion.div 
         initial= {{
           x: 60,
      
          }}
          whileInView={{
            x: 0,
 
          }}
          transition={{
            duration: 1,
          }} 
        className='flex justfy-center mx-auto items-centerv mt-8'>
        <Image src={HeroImg} alt='mainImage'/>
        </motion.div>
        <div>
      
      </div>

        </div>
        
       
       
      </div>
    </section>
  )
}
export default Hero