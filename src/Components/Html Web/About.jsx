import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Element } from 'react-scroll';

const About = () => {
    const refText = useRef(null);

    return (
        <div className='bg-drbgclr relative md:top-2 lg:top-12 flex mx-auto justify-center z-40'>
            <div className='flex flex-col items-center space-y-4 lg:space-y-10 mt-6'>
                <h1 className='tracking-[20px] text-2xl md:text-3xl text-drwht uppercase font-semibold'>About</h1>

                <div className='flex flex-row md:gap-x-8 lg:gap-x-20'>
                    <Element name='aboutPic'>
                        <motion.div
                            initial={{ x: -100, y: 0 }}
                            whileInView={{ x: 0, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className='hidden md:block border-drfgclr border-4 rounded-md p-3 lg:p-6 w-[16rem] lg:w-[18rem] md:max-h-[28rem]'
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
                            className='border-drfgclr border-4 rounded-md px-2 lg:p-6 md:p-2 lg:w-[50rem] w-[21rem] md:w-[25rem] max-h-[30rem] md:max-h-[28rem]'
                        >
                            <h1 className='text-drwht lg:text-4xl text-lg font-semibold md:mx-auto md:justify-center lg:font-bold pb-2 lg:pb-6 uppercase'>
                                Here are some Me things
                            </h1>
                            <p className='text-drwht text-justify text-sm md:text-md lg:text-lg'>
                                Heyy, this is Souravpreet Singh, the guy who thinks in binary. Well, I was 14 when I got to know
                                there is something else than Games in Computers, was called Coding. Made my debut in the field,
                                won&apos;t lie I wasn&apos;t the debut prodigy but was sure an emerging player. Continued programming with
                                studies, Contributed in a few real-time applications with friends. After High School, Decided to
                                move to Canada to study Computer Science. I Just achieved my diploma from Sheridan College.
                                Well, College wasn&apos;t the only place I learned from, YouTube and VS Code gets launched
                                automatically when I open my laptop. Learned App Security on a security job. I am Single,
                                GitHub Commit and SQL Table relationships are the closest things to Commitment and Relationships
                                in my life. I have an ex named Stack Overflow, not so close these days, but I visit her sometimes💀.
                                Don&apos;t tell this to ChatGPT she gets a little jealous.
                            </p>
                        </motion.div>
                    </Element>
                </div>
            </div>
        </div>
    );
};

export default About;
