import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { education, certificates } from "../constants";
import { textVariant } from "../utils/motion";

const EducationComponent = () => {
  return (
    <motion.div variants={textVariant()} >
      <motion.div className="flex flex-col justify-center mb-12">
        <h1 className="text-[#E6E6FA] text-[40px] font-bold pt-[20px] text-center" style={{ textShadow: '2px 2px 4px rgba(0, 255, 255, 0.5)' }}>Education</h1>
      </motion.div>

      <motion.div variants={textVariant()} className="flex flex-col">
        <motion.h2>
          <span className='text-[#00FFFF] text-3xl font-bold text-center'>Educational Foundation in Cloud Engineering</span>
        </motion.h2>

        <motion.p className="mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]">
          <span className='text-secondary text-[17px] max-w-3xl leading-[30px]'>Equipped with a solid technical foundation, I honed my expertise through rigorous training at Altschool Africa, completing a Diploma in Cloud Engineering in 2023. This program fostered my in-depth understanding of cloud technologies, setting the stage for my professional journey as a Cloud Visionary.</span>
        </motion.p>
      </motion.div>
      
      <motion.div variants={textVariant()} className='flex flex-col md:flex-row justify-center mt-8 gap-10'>
        {/* Education Section */}
        <motion.div className='w-full md:w-1/2'>
          <motion.h3 className="flex md:flex items-center justify-center md:w-[12vw] md:ml-4 ml-[1.1rem] w-[30vw] bg-[#FF6F61] rounded-[10px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <span className='text-[#E6E6FA] text-xl font-bold p-[6px]'>Education</span>
          </motion.h3>
          {education.map((edu) => (
            <motion.div className='flex flex-col m-4 p-5 bg-teal-300/20 rounded-[10px] border border-yellow-500/40 shadow-card transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg' key={edu.degree}>
              <motion.p className='flex flex-row text-[#00FFFF] justify-between text-[15px] font-bold mb-[9px]'>
                {edu.degree}
                <span className='flex flex-row text-yellow-400 ml-2 text-[15px] font-bold'>{edu.institution} ({edu.year})</span>
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificates Section */}
        <motion.div className='w-full md:w-1/2'>
          <motion.h3 className='flex md:flex items-center justify-center md:ml-4 ml-[1.1rem] md:w-[12vw] w-[35vw] bg-[#FF6F61] rounded-[10px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
            <span className='text-[#E6E6FA] text-xl font-bold p-[6px]'>Certificates</span>
          </motion.h3>

          {certificates.map((cert) => (
            <motion.div className='flex flex-col m-4 p-5 bg-teal-300/20 rounded-[10px] border border-yellow-500/40 shadow-card transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg' key={cert.name}>
              <motion.p className='flex flex-row text-[#00FFFF] justify-between text-[15px] font-bold mb-[9px]'>
                {cert.name}
                <span className='flex flex-row text-yellow-400 ml-2 text-[15px] font-bold'>
                  {cert.issuedBy} ({cert.year})
                </span>
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(EducationComponent, "education");
