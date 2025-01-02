import React from 'react'

const Landing = () => {
  return (
    <div>
    <div className=' w-[2400px] h-[1950px] bg-drbgclr mx-auto'>
        <div className='  flex flex-col 
        w-[1200px] h-[1950px] md:flex-row md:w-[2000px] lg:w-[2200px]'>
            <div className='mt-[10vh] md:ml-[30vw] md:mt-[20vh] lg:ml-[20vw] '>
                <h1 className='text-[8rem] mt-12 font-bold text-drfgclr md:text-8xl lg:text-[9rem] '>I, Souravpreet Singh </h1>
                <h2 className='text-[6rem] font-semibold text-drgry md:text-6xl md:mt-12 md:font-bold lg:text-[6rem] lg:mt-16'>Welcomes you</h2>
                <p className=' text-drgry mt-4
                text-[3rem] md:text-3xl  md:font-semibold lg:text-[3rem] md:mt-12'>-- to a showcase of my skills, projects and passion for excellence</p>
                <p className='hidden md:block tracking-wider font-bold text-[7rem] md:text-[4rem] mt-8 text-drwht md:tracking-widest lg:text-[5rem] lg:mt-16'>CLICK TO BEGIN</p>  
                <p className='sm:block md:hidden tracking-wider font-bold text-[7rem] md:text-[4rem] mt-8 text-drwht md:tracking-widest '>Touch TO BEGIN</p>
            </div>
            <div className='md:mt-[20vh]  mx-auto lg:ml-0'>
            <img src="/assets/HeroImg.png " alt="mainImage" className="object-contain h-[800px] lg:h-[800px] " />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Landing