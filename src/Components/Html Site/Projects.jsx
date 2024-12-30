import React from 'react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'



const Projects = () => {
  return (
    <div> <div
  
    className=' bg-drbgclr z-5 top-0 lg:top-0 relative mx-auto  h-screen overflow-x-visible'>
      <div className='flex flex-col items-center space-y-10 mt-10'>

        <h1 className='tracking-[20px] text-md md:text-3xl text-drwht mx:auto uppercase font-semibold '>Projects</h1>
        </div>
        <ProjectCard />
    </div>
    </div>
  )
}

export default Projects