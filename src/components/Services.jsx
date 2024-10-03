import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, text }) => (
  <Tilt className='xs:w-[280px] w-full h-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full h-full  p-[1px] rounded-[20px]  shadow-card border border-yellow-600/40'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary/20 rounded-[20px] py-5 px-5 min-h-[280px] min-w-[280px] flex justify-evenly items-center flex-col border border-yellow-600/30'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>

        <p className='text-[#2e2b3f] text-[15px] text-center leading-[30px]'>
          {text}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Services = () => {
  return (
    <motion.div className="">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} items-center`}> <span className="text-[#009999]">Elevate Your Cloud</span>  Strategy with  <span className="text-[#009999]">Expert Solutions</span></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Empowering businesses with tailored cloud architectures, seamless automation, and secure environments. My services are designed to drive efficiency, enhance scalability, and ensure robust performance, allowing you to focus on innovation while I manage the complexities of the cloud.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Services, "services");