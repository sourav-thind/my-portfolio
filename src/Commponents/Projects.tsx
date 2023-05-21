import React from 'react';
import Tilt  from 'react-parallax-tilt'
import {motion} from 'framer-motion'
import { fadeIn , textVariant} from '../utils/motion'
import { projects } from "@/constants";
import Image, { StaticImageData } from "next/image";

type Props = {}

const ProjectCards =({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    live_app_link
  }: {
    index: number,
    name: string,
    description: string,
    tags: { name: string, color: string }[],
    image: StaticImageData,
    source_code_link: string,
    live_app_link: string
  })=>{
    const defaultOptions = {
      reverse:        false,  // reverse the tilt direction
      max:            35,     // max tilt rotation (degrees)
      perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
      scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
      speed:          1000,   // Speed of the enter/exit transition
      transition:     true,   // Set a transition on enter/exit.
      axis:           null,   // What axis should be disabled. Can be X or Y.
      reset:          true,    // If the tilt effect has to be reset on exit.
      easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    return (
        <motion.div 
        variants={fadeIn("up", "spring", index *  0.5 , 0.75)}>
            <Tilt 
            // options={{
            // // max:45, 
            // // scale:1,
            // // speed:450
            // defaultOptions
            // }}
            className='flex flex-col'
            >
                <div className="relative w-[400px] md:w-[640px] h-[200px] md:h-[320px] ">
                <Image src={image} alt='name' className='md:h-[300px] h-[200px] '/>
                </div>
                <div>   
                  <h1>{name}</h1>
                  <h3>{description}</h3>
                  <h5></h5>
                </div>
                

           </Tilt>
        </motion.div>
    )
}

const Projects = (props: Props) => {
  return (
    <div className='bg-drbgclr h-[90vh] relative  flex mx-auto justify-center'>
      <div className='flex flex-col items-center space-y-10 mt-1'>

        <h1 className='tracking-[20px] text-2xl md:text-3xl text-drgry mx:auto uppercase font-semibold '>Projects</h1>
        <div className="mt-20 flex flex-rpw gap-7 justify-center overflow-hidden ">
{projects.map((project, index)=>(
  <ProjectCards 
  key={`project-${index}`}
  index={index}
  {...project}/>
  ))}
        </div>
  </div>

    </div>
  )
}

export default Projects