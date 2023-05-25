import React from 'react'
import HeroImg from '../../public/HeroImg.png'
import Image from "next/image";

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className=' w-full h-screen mx-auto bg-drbgclr'>
      <div className='relative top-[4rem] md:top-[6rem] max-w-7xl mx-auto flex flex-col  gap-3 justify-center  ' >
        <div className=' relative flex flex-row items-start'>
          <div className='h-5 w-5 rounded-full bg-drfgclr ' />
          <div className='h-1 sm:w-[800px] w-[360px] bg-gradient-to-r from-drfgclr my-auto' />

        </div>
        <div className='flex flex-col md:flex-row ml-0 md:ml-5 justify-between '>

        <div className=' flex flex-col  mx-auto gap-y-5'>
          <h1 className=' text-4xl  md:text-7xl  text-drfgclr font-bold'>Souravpreet Singh
          </h1>
          <div className=' flex flex-col md:flex-row mt-6 md:mt-[4rem]  justify-between mx-auto  text-drgry text-lg'> 
          <div>I am not just a Developer, &nbsp;</div>
          <div className='text-drwht text-xl'>I AM <span className='text-drfgclr '> THE </span> DEVELOPER  </div>
            </div>
            <div className='flex flex-rows mx-auto space-x-0 mt-[2rem] md:mt-[8rem]  md:space-x-6'>
          <button>
            <span className="box ">
            ABOUT
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
              Contact
            </span>
          </button>
        </div>
        </div>
        <div className='flex justfy-center mx-auto items-centerv mt-8'>
        <Image src={HeroImg} alt='mainImage'/>
        </div>
      

       
        </div>
       
      </div>
    </section>
  )
}
export default Hero