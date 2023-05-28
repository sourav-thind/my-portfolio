import React, { useRef } from 'react'
import { technologies } from '../constants'
import BallCanvas from './BallCanvas'
import {useScroll, useTransform ,motion} from 'framer-motion'
type Props = {}

const Skills = (props: Props) => {
    //console.log(technologies[0].icon)
    const refDiv = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: refDiv,
        offset:["start end", "end start"],
    }
    )
    const y  = useTransform(scrollYProgress, [0,0.4,0.8, 1], [300,0, 0, -200]);
   
    return (
        <motion.div ref={refDiv}
        initial={{ y: 200 }} 
        style={{ y }}
        transition={{ duration: 1 }} 
         className='h-screen bg-drbgclr mx-auto '>
            <div className='flex flex-col items-center justify-center gap-y-8  z-30'>
                <div>
                <h1 className='text-3xl tracking-[20px] uppercase text-drgry mt-[5rem]'>Skills</h1>
            </div>

            <div className='flex flex-row flex-wrap justify-center gap-10 md:gap-20 mx-0 md:mx-12 lg:mx-32 md:gap-x-16 lg:gap-x-24 floating mt-8'>
                {technologies.map((technology) => (
                    <div className='w-20 h-20 md:w-24 md:h-24 lg:h-28 lg:w-28 ' key={technology.name}>
                        {/* <Image src={technology.icon} alt={technology.name}/> */}
                        <BallCanvas icon={technology.icon.src} />
                    </div>

                ))
                }
            </div>
        </div>
        </motion.div>
    )
}

export default Skills