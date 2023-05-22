import React from 'react'
import HeroImg from '../../public/HeroImg.png'
import Image from "next/image";

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className=' w-full h-screen mx-auto bg-drbgclr'>
      <div className='relative inset-0 top-[3rem] md:top-[5rem] max-w-7xl mx-auto flex flex-col items-start gap-6 justify-center  ' >
        <div className=' relative flex flex-row justify-between  '>
          <div className='h-5 w-5 rounded-full bg-drfgclr ' />
          <div className='h-1 sm:w-[800px] w-[400px] bg-gradient-to-r from-drfgclr my-auto' />

        </div>
        <div className='flex flex-col md:flex-row ml-5 '>

        <div className=' flex flex-col  mx-auto'>
          <h1 className=' text-5xl  md:text-7xl  text-drfgclr font-bold'>Souravpreet Singh
          </h1>
          <div className=' flex flex-col mt-[3rem] justify-between mx-auto  text-drgry text-lg
                    '> <p>I am not just a Developer, <span className='text-drwht text-xl'>I AM <span className='text-drfgclr '> THE
            </span> DEVELOPER </span> </p>
            </div>
            <div className='flex flex-rows mx-auto space-x-0 mt-2 md:mt-[8rem]  md:space-x-6'>
          <button>
            <span className="box ">
            ABOUT ME
            </span>
          </button>
        
        
          <button>
            <span className="box">
              Skills
            </span>
          </button>
          <button>
            <span className="box">
              Projects
            </span>
          </button>
          <button>
            <span className="box">
              Contact Me
            </span>
          </button>
        </div>
        </div>
        <div className='flex justfy-center mx-auto items-center ml-0 md:ml-[8rem]'>
        <Image src={HeroImg} alt='mainImage'/>
        </div>
      

       
        </div>
       
      </div>
    </section>
  )
}
export default Hero