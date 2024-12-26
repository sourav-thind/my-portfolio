import React from 'react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div> <div
  
    className=' bg-drbgclr z-5 top-24 lg:top-20 relative mx-auto  h-screen overflow-x-visible'>
      <div className='flex flex-col items-center space-y-10 mt-10'>

        <h1 className='tracking-[20px] text-2xl md:text-3xl text-drwht mx:auto uppercase font-semibold '>Projects</h1>
        </div>
        <ProjectCard />
    </div>
    </div>
  )
}

export default Projects