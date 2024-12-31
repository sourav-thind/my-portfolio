import React from 'react';

import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden h-screen md:h-[90vh] md:ml-6 bg-drbgclr">
      <div className="relative top-[4rem] md:top-[3rem] lg:max-w-[90vw] md:max-w-6xl flex flex-col gap-3 md:gap-0 justify-center">
     
        <div className="flex flex-col md:flex-row ml-0  md:ml-5 lg:ml-6 lg:mt-[6rem] justify-between">
          <div className="flex flex-col mx-auto gap-y-5">
            <motion.h1
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl lg:text-7xl mt-6 md:text-6xl md:mt-4 lg:mt-[4rem] text-drfgclr font-bold " 
            >
              Souravpreet Singh
            </motion.h1>
            <motion.div
              initial={{ y: 60 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-row items-center mt-6 md:mt-2 text-drgry text-2xl justify-center"
            >
              <div>I am not just a developer,&nbsp;</div>
              <div className="text-drwht text-3xl">
                I AM <span className="text-drfgclr">THE</span> DEVELOPER
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 60 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-row mx-auto space-x-3 mt-[2rem] md:mt-6 lg:mt-[4rem] lg:space-x-10 md:space-x-4"
            >
              <button>
                <a href="#about">
                  <span className="box">ABOUT</span>
                </a>
              </button>
              <button>
                <a href="#skills">
                  <span className="box">Skills</span>
                </a>
              </button>
              <button>
                <a href="#projects">
                  <span className="box">Projects</span>
                </a>
              </button>
              <button>
                <a href="#contact">
                  <span className="box">Contact</span>
                </a>
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: 60 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className="flex"
          >
            <img src="/assets/HeroImg.png" alt="mainImage" className="object-contain" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
