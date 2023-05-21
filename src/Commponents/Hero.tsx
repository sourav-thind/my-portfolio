import React from 'react'
import PhoneCanvas from './MainCanvas'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className=' w-full h-screen mx-auto bg-drbgclr'>
      <div className='relative inset-0 top-[60px] md:top-[100px] max-w-7xl mx-auto flex flex-col items-start gap-5 justify-center' >
        <div className=' relative flex flex-row justify-between ml-5  '>
          <div className='h-5 w-5 rounded-full bg-drfgclr ' />
          <div className='h-1 sm:w-[800px] w-[400px] bg-gradient-to-r from-drfgclr my-auto' />

        </div>
        <div className=' flex flex-col  mx-auto'>
          <h1 className='  text-[50px] md:text-[70px] text-drfgclr font-bold'>Souravpreet Singh
          </h1>
          <div className=' flex flex-col mt-5 justify-between mx-auto text-drgry text-lg
                    '> <p>I am not just a Developer, <span className='text-drwht text-xl'>I AM <span className='text-drfgclr '> THE
            </span> DEVELOPER </span> </p></div>
            <div>
          {/* {image secion}*/}
        </div>
      

        <div className='flex flex-rows mx-auto space-x-0  md:space-x-16'>
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
       
      </div>
    </section>
  )
}
export default Hero