import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Element } from 'react-scroll';

const About = () => {
    const refText = useRef(null);

    return (
        <div className='bg-drbgclr relative md:top-2 lg:top-12 flex mx-auto justify-center z-40'>
            <div className='flex flex-col items-center space-y-4 lg:space-y-10 mt-6'>
                <h1 className='tracking-[20px] text-2xl md:text-3xl text-drwht uppercase font-semibold'>About</h1>

                <div className='flex flex-row md:gap-x-8 lg:gap-x-6'>
                    <Element name='aboutPic'>
                        <motion.div
                            initial={{ x: -100, y: 0 }}
                            whileInView={{ x: 0, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className='hidden md:block border-drfgclr border-4 rounded-md lg:p-2 lg:py-3 w-[16rem] lg:w-[15rem] md:max-h-[28rem]  lg:max-h-[28rem]'
                        >
                            <img className='rounded-md max-h-[26rem] md:max-h-[24rem]' src="/aboutImg.jpg" alt='mainImage' />
                        </motion.div>
                    </Element>
                    <Element name='aboutText'>
                        <motion.div
                            ref={refText}
                            initial={{ x: 80, y: 0 }}
                            whileInView={{ x: 0, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className='border-drfgclr border-4 rounded-md px-2 lg:p-5 md:p-2 lg:w-[40rem] w-[21rem] md:w-[25rem] max-h-[30rem] md:max-h-[28rem]'
                        >
                            <h1 className='text-drwht lg:text-4xl text-lg font-semibold md:mx-auto md:justify-center lg:font-bold pb-2 lg:pb-6 uppercase'>
                                Here are some Me things
                            </h1>
                            <p className='text-drwht text-justify sm:text-sm md:text-md lg:font-semibold lg:text-md xl:text-lg'>
                            Hi, I’m Souravpreet Singh. I’ve been passionate about technology ever since I discovered coding in my early teens. Over the years, I’ve worked on a variety of real-time projects with friends and teams, learning and growing with each experience. I recently graduated with a diploma in Computer Science from Sheridan College, but my learning has never been limited to classrooms.
                            I’ve taught myself many skills through platforms like YouTube and hands-on practice. I also gained experience with application security, which gave me a deeper understanding of building safe and reliable systems. I enjoy working on challenging problems, writing clean code, and exploring new technologies. For me, coding isn’t just a profession—it’s something I genuinely love doing.
                            </p>
                        </motion.div>
                    </Element>
                </div>
            </div>
        </div>
    );
};

export default About;
