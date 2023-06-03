import Image from 'next/image'
import React, { useRef } from 'react'
import aboutImg from '../../public/aboutImg.jpg'
import {useScroll, useTransform ,motion} from 'framer-motion'
import { Element } from 'react-scroll';
type Props = {}

const About = (props: Props) => {

    const refText = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: refText,
        offset:["start end", "end start"],
    }
    )
    const x  = useTransform(scrollYProgress, [0,0.2,0.6, 0.9, 1], [800 , 0, 0, 700, 1000]);
    const x2 = useTransform(scrollYProgress, [0,0.2,0.6,0.9, 1], [-300, 0, 0, -300, -600]);
    const y  = useTransform(scrollYProgress, [0,0,0.4, 1], [0, 0, 0,250]);
    return (
        <div className='bg-drbgclr relative top-24 lg:top-12 flex mx-auto justify-center  z-40'>
            <div className='flex flex-col items-center space-y-4 lg:space-y-10 mt-6'>
                <h1 className='tracking-[20px] text-2xl md:text-3xl text-drwht uppercase font-semibold'>About</h1>
            
                <div className='flex flex-row md:gap-x-8 lg:gap-x-20'>
                    <Element name='aboutPic'>
                    <motion.div
                    initial={{ x: -300 , y: 0 }}  
                    style={{ x: x2, y:y }}
                    transition={{ duration: 1 }} 
                    className='hidden md:block border-drfgclr border-4 rounded-md p-3 lg:p-6 w-[16rem] lg:w-[18rem]'>
                        <Image className='rounded-md h-[26rem] ' src={aboutImg} alt='mainImage'/>
                    </motion.div>
                    </Element>
                    <Element name='aboutText'>
                    <motion.div
                    ref={refText}
                    initial={{ x: 300, y: 0 }}   
                    style={{ x: x , y:y}} 
                    transition={{ duration: 1 }} 
                    className=' border-drfgclr border-4 rounded-md px-2 lg:px-6 pb-6 lg:w-[50rem] w-[21rem] md:w-[25rem] '>
                        <h1 className='text-drwht lg:text-4xl text-lg font-semibold  lg:font-bold pb-2 lg:pb-6 uppercase'>Here are some Me things</h1>
                         <p className='text-drwht text-justify text-sm md:text-md lg:text-lg'>
                     Heyy, this is Souravpreet Singh, the guy who thinks in 0️⃣ binary 1️⃣. Well, I was 14 when I got to know there is something else than Games🎮 and Paint🎨 in Computers, was called Coding💻. Made my debut in the field, won&apos;t lie I was&apos;t the debut prodigy but was sure an 🚀emerging player. Continued programming with studies, Contributed in a few real-time applications with friends👨‍💻. Still have some 👬friends👫 who I chat with about new app ideas and how they can change the world. 🌎 After High School🏫, Decided to move to Canada to study Computer Science. I Just achieved my diploma from Sheridan College🎓. Well, College wasn&apos;t the only place I learned from, YouTube ▶ and VS Code🆚 gets launched automatically when I open my laptop. Learned App Security on a security job🔒. I am Single🤷, GitHub Commit and SQL Table relationships are the closest things to Commitment and Relationships in my life🤦‍♂😄. I have an ex named Stack Overflow❗, not so close these days, but I visit her sometimes💀.
                     Don&apos;t tell this to ChatGpt she gets little jelous.
                    </p>  
                    </motion.div>
                    </Element>
                </div>
            </div>

        </div>
    )
}

export default About