import React, { useState } from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import image from '../assets/image.png';
import { EnvelopeIcon, PhoneIcon, UserIcon, CalendarIcon, HomeIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

const About = () => {
  // State to manage which text and button are visible
  const [isTextAVisible, setIsTextAVisible] = useState(true);

  // Handlers to toggle visibility
  const showTextB = () => {
    setIsTextAVisible(false);
  };

  const showTextA = () => {
    setIsTextAVisible(true);
  };

  return (
    <section className="px-4">
      <motion.div variants={textVariant()} className="text-center mb-8">
        <h2 className={styles.sectionHeadText}>About <span className="text-[#FF6F61]">Me</span></h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center mt-8">

        <motion.div 
          className="flex items-center m-8 p-8"
          variants={fadeIn("left", "spring", 0, 0.75)}
        >
          <motion.img 
            src={image}
            alt='About Image'
            className='sm:w-[500px] sm:h-[500px] xs:w-[250px] xs:h-[250px] object-cover rounded-[80px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
          />
        </motion.div>

        <motion.div 
          className="flex flex-col md:align-center items-center m-8 xs:mt-4 p-8" 
          variants={textVariant()}
        >
          {isTextAVisible && (
            <>
              <motion.h2 className="text-center">
                <span className='text-yellow-400 text-[20px] font-bold italic'>Shaping the Future of Cloud, One Solution at a Time</span>
              </motion.h2>

              <motion.p
                className='mt-4 text-secondary text-[17px] text-center leading-[30px] max-w-lg'
              >
                As a Cloud Visionary, I specialize in designing and optimizing cloud infrastructures that drive innovation and efficiency. With extensive experience in cloud technologies and DevOps, I deliver scalable, secure, and tailored solutions that transform businesses. From seamless cloud migrations to automating workflows and enhancing operational agility, I focus on creating future-proof, cost-effective environments that meet the unique needs of each organization. Let's collaborate to unlock the full potential of the cloud and propel your business forward.
              </motion.p>
             
              <motion.button
                className="mt-4 px-6 py-2 bg-[#FF5722] text-white rounded-full"
                onClick={showTextB}
              >
                More
              </motion.button>
            </>
          )}

          {!isTextAVisible && (
            <>
             <motion.div className=" "> 
          <motion.h3  className=" pt-7  pb-3 flex flex-row justify-center">
             <span className=" text-[#FF5722] text-[15px]">Extra <span className="text-[#E6E6FA]">Information</span></span>
          </motion.h3>
        <motion.div className="border border-[#00CFC1] w-[500px]" />
            <motion.div className="flex flex-row gap-1 items-center justify-between mt-4">
              <motion.div className=" flex flex-row gap-2 items-center">
                <UserIcon className="w-4 h-4 text-[#FF5722]" />
                <span className="text-secondary text-[15px]">hamed ayojide</span> 
              </motion.div>
              <motion.div className="relative right-[70px] flex flex-row gap-2 items-center">
                <PhoneIcon className="w-4 h-4 text-[#FF5722]" />
                <span className="text-secondary text-[15px]">+2347045459124</span>
              </motion.div>
            </motion.div>

            <motion.div className="flex flex-row gap-1 items-center justify-between mt-2">
              <motion.div className=" flex flex-row gap-2 items-center">
                <EnvelopeIcon className="w-4 h-4 text-[#FF5722]" />
                <span className="text-secondary text-[15px]">hamedayojide58@gmail.com</span> 
              </motion.div>
              <motion.div className="relative right-[30px] flex flex-row gap-2 items-center">
                <CalendarIcon className="w-4 h-4 text-[#FF5722]" />
                <span className="text-secondary text-[15px]">Born on 19th june,2003</span>
              </motion.div>
            </motion.div>

            <motion.div className="flex flex-row gap-1 items-center justify-between mt-2">
              <motion.div className=" flex flex-row gap-2 items-center">
                <HomeIcon className="w-4 h-4 text-[#FF5722]" />
                <span className="text-secondary text-[15px]">195 meiran road,LA,Nigeria</span> 
              </motion.div>
              <motion.div className=" relative left-[30px]  flex flex-row gap-1 items-center">
                <AcademicCapIcon className="w-4 h-4 text-[#FF5722]" />
                <span className="text-secondary text-[15px]">Diploma on Cloud engineering</span>
              </motion.div>
            </motion.div>

              <motion.button
                className="mt-4 ml-[10rem] px-6 py-2 bg-[#FF5722] text-white rounded-full"
                onClick={showTextA}
              >
                About me
              </motion.button>
              </motion.div>
            </>
          )}
        </motion.div>

      </div>
    </section>
  );
};

// Assuming SectionWrapper adds some additional functionality
export default SectionWrapper(About, "about");
