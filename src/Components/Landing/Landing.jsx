import React from 'react'

const Landing = () => {
  return (
    <div>
    <div className=' w-[2400px] h-[1950px] bg-drbgclr mx-auto'>
        <div className=' w-[1200px] h-[1950px] flex flex-col md:flex-row '>
            <div className='mt-[10vh] md:mt-[20vh]'>
                <h1 className='text-[8rem] mt-12 font-bold text-drfgclr md:text-6xl '>I, Souravpreet Singh </h1>
                <h2 className='text-[6rem] font-semibold text-drgry md:text-4xl md:font-bold'>Welcomes you</h2>
                <p className='text-[3rem] text-drgry mt-4 md:text-lg md:font-semibold'>-- to a showcase of my skills, projects and passion for excellence</p>
                <p className='hidden md:block tracking-wider font-bold text-[7rem] mt-8 text-drwht md:tracking-widest '>CLICK TO BEGIN</p>
                <p className='sm:block md:hidden tracking-wider font-bold text-[7rem] mt-8 text-drwht md:tracking-widest '>Touch TO BEGIN</p>
            </div>
            <div className='md:mt-[20vh]  mx-auto'>
            <img src="/assets/HeroImg.png " alt="mainImage" className="object-contain h-[800px]" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Landing