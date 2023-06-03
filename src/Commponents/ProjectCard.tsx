import React, { useEffect, useState } from 'react'
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
import { SocialIcon } from 'react-social-icons';
import { useMediaQuery } from './MediaQueryContext';
type Props = {}


interface ProjectCardsProps {
  index: number;
  name: string;
  description: string;
  tags: { name: string; image: StaticImageData }[];
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


    <div className=' bg-gradient-to-br from-drgry to-black rounded-lg border-4  w-[330px] md:w-[560px] mx-auto py-2  border-drfgclr '>
      <div className="relative w-[300px] md:w-[520px] h-full flex flex-col justify-center items-center mx-auto sm:gap-y-2 gap-y-0">
        <Image src={image} alt='name' className='md:h-[220px] h-[160px]  Img' />

        <div className='text-drwht flex flex-col items-center justify-center md:gap-y-1 md:space-y-1'>
          <h1 className='text-3xl mx-auto underline mt-6 md:mt-1 font-semibold decoration-drfgclr uppercase'>{name}</h1>
          <h3 className='text-md text-justify mt-4 md:mt-1 '>{description}</h3>
          <div className={`flex flex-row gap-8 mt-4  justify-evenly md:mt-1s`}>
            {tags.map((tag) => (
              <div key={tag.name} >
                <Image src={tag.image} alt={tag.name} className='h-10 w-10' />
              </div>
            )

            )}
          </div>
          <div className='justify-evenly flex gap-x-12 mt-2 md:mt-1'>
            <a href={source_code_link} target='_blank'>
             <button className='w-[100px] hover:scale-110 border-drwht border-4 font-bold text-drbgclr bg-drfgclr rounded-md mt-2' > Github </button>
            </a>
            <a href={live_app_link} target='_blank'>
              <button className='w-[100px]  hover:scale-110 border-drwht border-4 font-bold text-drbgclr bg-drfgclr rounded-md mt-2' > Live Demo </button>
            </a>
          </div>
        </div>
      </div>
    </div>


  );
};
const Project = (props: Props) => {
  const slides: JSX.Element[] = [];
  projects.map((project, index) => (
    slides.push(
      <SwiperSlide key={project.name} className='py-5'>
        <Tilt tiltReverse={true} tiltMaxAngleX={4} tiltMaxAngleY={4} transitionSpeed={100}>
          <ProjectCards
            key={`project-${index}`}
            index={index}
            {...project} />
        </Tilt>
      </SwiperSlide>
    )
  ));
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 840px)");
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event: { matches: boolean | ((prevState: boolean) => boolean); }) => {
      setIsMobile(event.matches);
      };
      mediaQuery.addListener(handleMediaQueryChange);
      return () => mediaQuery.removeListener(handleMediaQueryChange);
    });  

// const isMobile = useMediaQuery();
  return (

    <div  >
      <div className='mx-1 mt-8 justify-center items-center'>


        <div >

          <Swiper
            effect={"coverflow"}
            loop={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 0,
              modifier: 1,
            }}
            spaceBetween={isMobile? -100 :-440}
            navigation={true}
            modules={[EffectCoverflow, Navigation]}
            className="mySwiper items-center flex justify-center z-20"

          >
            {/* <SwiperSlide>
                  <ProjectCards
                    key={`project-${index}`}
                    index={index}
                    {...project} />
                    </SwiperSlide> */}
            {slides}
          </Swiper>

        </div>
      </div>
    </div>

  )
}
export default Project