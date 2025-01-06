import React from "react";
import { technologies } from "../../constants"; 
const LazyIcon = React.lazy(({ src }) => (
  <img src={src} alt="Skill Icon" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
));
const Skills = () => {
  return (
    <div className="bg-drbgclr text-white py-16 px-4 sm:px-8 lg:px-16 h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase">
          Skills
        </h2>
        <p className="mt-4 text-gray-400 text-sm sm:text-base">
          A showcase of tools and technologies I use to build impactful solutions.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="group flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
          >
            {/* Skill Icon */}
            <div className="w-20 h-20 md:w-32 md:h-32 flex items-center justify-center bg-drbgclr shadow-sm shadow-drgry border-black border rounded-lg">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
            </div>

            {/* Skill Name */}
            <p className="mt-4 text-sm md:text-base font-medium group-hover:text-teal-400">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
