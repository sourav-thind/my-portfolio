import React, { useRef } from 'react'
import { technologies } from '../constants'
import BallCanvas from './BallCanvas'
import {useScroll, useTransform ,motion} from 'framer-motion'
type Props = {}

const Skills = (props: Props) => {
    const refDiv = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: refDiv,
        offset:["start end", "end start"],
    }
    )
    const y  = useTransform(scrollYProgress, [0,0.3,0.8, 1], [300,0, 0, -250]);
   
    return (
        <motion.div ref={refDiv}
        initial={{ y: 200 }} 
        style={{ y }}
        transition={{ duration: 1 }} 
         className='h-screen bg-drbgclr mx-auto '>
            <div className='flex flex-col items-center justify-center gap-y-8 lg:gap-y-0  z-30'>
                <div>
                <h1 className='text-3xl tracking-[20px] uppercase text-drwht font semibold mt-0 lg:mt-[4rem]'>Skills</h1>
            </div>

            <div className='flex flex-row flex-wrap justify-center p-8 gap-8 md:gap-16 mx-0 md:mx-12 lg:mx-32 md:gap-x-16 lg:gap-x-20 floating mt-8 lg:mt-4'>
                {technologies.map((technology) => (
                    <div className='w-20 h-20 md:w-24 md:h-24 lg:h-28 lg:w-28 hover:scale-110' key={technology.name}>
                        <BallCanvas icon={technology.icon.src}/>
                    </div>

                ))
                }
            </div>
        </div>
        </motion.div>
    )
}

export default Skills