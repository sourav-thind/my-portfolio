import React from 'react'
import { technologies } from '../constants'
import BallCanvas from './BallCanvas'
import Image from 'next/image'
type Props = {}

const Skills = (props: Props) => {
    //console.log(technologies[0].icon)
    return (
        <div className='h-screen bg-drbgclr mx-auto '>
            <div className='flex flex-col items-center justify-center gap-y-8 '>
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
        </div>
    )
}

export default Skills