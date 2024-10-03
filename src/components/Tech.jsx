import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { technologies, professionalSkills } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <motion.div variants={textVariant()}>
      <motion.div className="flex flex-col justify-center mb-12">
        <h1 className="text-[#E6E6FA] text-[40px] font-bold pt-[20px] text-center" style={{ textShadow: '2px 2px 4px rgba(0, 255, 255, 0.5)' }}>$kills</h1>
        <motion.div className=" ml-[16.5rem] md:ml-[35rem] border border-[#FF6F61] border-[2px] w-[100px]" style={{ boxShadow: '2px 2px 4px rgba(0, 255, 255, 0.5)' }} />
      </motion.div>

      <motion.div variants={textVariant()} className="flex flex-col">
        <motion.h2>
          <span className='text-[#00FFFF] text-3xl font-bold text-center'>Core Expertise</span>
        </motion.h2>

        <motion.p variants={textVariant()} className="mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]">
          <span className='text-secondary text-[17px] max-w-3xl leading-[30px]'>Mastery over a broad range of tools and technologies, ensuring efficient and scalable cloud and DevOps solutions.</span>
        </motion.p>
      </motion.div>

      <motion.div variants={textVariant()} className='flex flex-col md:flex-row justify-center mt-8 gap-10'>
        {/* Technical Skills Section */}
        <motion.div className='w-full md:w-1/2'>
          <motion.h3 className=" flex md:flex items-center justify-center md:w-[12vw] md:ml-4 ml-[1.1rem] w-[30vw] bg-[#FF6F61] rounded-[10px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <span className='text-[#E6E6FA] text-xl font-bold p-[6px]'>Technical Skills</span>
          </motion.h3>
          {technologies.map((technology) => (
            <motion.div className='flex flex-col m-4 p-5 bg-teal-300/20 rounded-[10px] border border-yellow-500/40 shadow-card transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg' key={technology.name}>
              <motion.p className='flex flex-row text-[#00FFFF] justify-between text-[15px] font-bold mb-[9px]'>
                {technology.name}
                <span className='flex flex-row text-yellow-400 ml-2 text-[15px] font-bold'>{technology.percentage}%</span>
              </motion.p>
              <motion.div className='flex items-center'>
                <div className='w-full bg-gray-200/20 rounded-[20px] h-[10px]'>
                  <div
                    className='bg-[#FF6F61] h-[10px] rounded-[20px]'
                    style={{ width: `${technology.percentage}%` }}
                  ></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Skills Section */}
        <motion.div  variants={textVariant()} className='w-full md:w-1/2'>
          <motion.h3 className='flex md:flex items-center justify-center md:ml-4 ml-[1.1rem] md:w-[12vw] w-[35vw] bg-[#FF6F61] rounded-[10px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
            <span className='text-[#E6E6FA] text-xl font-bold p-[6px]'>Professional Skills</span>
          </motion.h3>

          {professionalSkills.map((skill, index) => (
            <motion.div className='flex flex-col m-4 p-5 bg-teal-300/20 rounded-[10px] border border-yellow-500/40 shadow-card transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg' key={skill.name}>
              <motion.p className='flex flex-row text-[#00FFFF] justify-between text-[15px] font-bold mb-[9px]'>
                {skill.name}
                <span className='flex flex-row text-yellow-400 ml-2 text-[15px] font-bold'>
                  {skill.percentage}%
                </span>
              </motion.p>
              <motion.div className='flex items-center'>
                <div className='w-full bg-gray-200/20 rounded-[20px] h-[10px]'>
                  <div
                    className='bg-[#FF6F61] h-[10px] rounded-[20px]'
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, "skills");
