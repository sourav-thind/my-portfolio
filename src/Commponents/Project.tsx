import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { projects } from "@/constants";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { EffectCoverflow, Pagination, Navigation } from 'swiper';
type Props = {}


interface ProjectCardsProps {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: StaticImageData;
  source_code_link: string;
  live_app_link: string;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_app_link
}) => {


  return (

      <SwiperSlide>

        <div className="relative w-[400px] md:w-[640px] h-full">
          <Image src={image} alt='name' className='md:h-[300px] h-[200px]' />

          <div className='text-drwht'>
            <h1>{name}</h1>
            <h3>{description}</h3>
            <h5></h5>
          </div>
        </div>
      </SwiperSlide>

  );
};
const Project = (props: Props) => {

  return (
    <div className='bg-drbgclr h-[90vh] relative  flex mx-auto justify-center swiper-container'>
      <div className='flex flex-col items-center space-y-10 mt-1'>

        <h1 className='tracking-[20px] text-2xl md:text-3xl text-drgry mx:auto uppercase font-semibold '>Projects</h1>
        <div className="mt-20 flex flex-rpw gap-7 justify-center ">
          {projects.map((project, index) => (
            <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
              <Tilt className='flex flex-col'>
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination]}
                >
                  <ProjectCards
                    key={`project-${index}`}
                    index={index}
                    {...project} />
                </Swiper>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Project