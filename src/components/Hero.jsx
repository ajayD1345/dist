import { motion } from "framer-motion";
import { styles } from "../styles";
import TextEffect from "./TextEffect";
import Stats from "./Stats";
import Lottie from "lottie-react";
import animationData3 from "../assets/Animation - 1726258614031(3).json";
import { ArrowDownTrayIcon, ArrowDownIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Animation Variants
const slideIn = {
  hidden: { opacity: 0, x: -100 }, // start state: hidden and slightly to the left
  show: { opacity: 1, x: 0, transition: { duration: 1 } }, // final state: visible and centered with 1s transition
};

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto">
      <div
        className={`relative w-[88%] grid-cols-1 mx-auto grid lg:grid-cols-2 lg:gap-[4rem] lg:p-0 gap-[1rem] h-[75%] items-center pt-[7rem] pb-[13rem]`}
      >
        {/* Left content (text) */}
        <motion.div
          variants={slideIn}
          initial="hidden"
          animate="show"
          className="text-section"
        >
          <h1 className={`${styles.heroHeadText} text-[30px] text-[#E6E6FA] font-bold`}>
            Hi, I'm <span className='text-[#FF6F61]'>Hamed Ayojide</span>
          </h1>
          <TextEffect />
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Let’s build the future together, leveraging the cloud and modern DevOps practices to deliver innovation, agility, and success.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-4">
            <a
              href="https://x.com/AjaxD1345"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full"
            >
              <FaTwitter className="w-6 h-6 text-[#E55D87] transition-all duration-300 transform hover:scale-110 hover:shadow-[0px_0px_20px_10px_rgba(229,93,135,0.7)]" />
            </a>
            <a
              href="https://github.com/ajayD1345"
              target="_blank"
              rel="noopener noreferrer"
              className=" p-4 rounded-full"
            >
              <FaGithub className="w-6 h-6 text-[#FBC2EB] transition-all duration-300 transform hover:scale-110 hover:shadow-[0px_0px_20px_10px_rgba(251,194,235,0.7)]" />
            </a>
            <a
              href="https://www.linkedin.com/in/hamed-ayojide-10a2b72ba/"
              target="_blank"
              rel="noopener noreferrer"
              className=" p-4 rounded-full"
            >
              <FaLinkedin className="w-6 h-6 text-[#00C9FF] transition-all duration-300 transform hover:scale-110 hover:shadow-[0px_0px_20px_10px_rgba(0,201,255,0.7)]" />
            </a>
            <a href="mailto:yourmail@example.com" className=" p-4 rounded-full">
              <FaEnvelope className="w-6 h-6 text-[#FF7E5F] transition-all duration-300 transform hover:scale-110 hover:shadow-[0px_0px_20px_10px_rgba(255,126,95,0.7)]" />
            </a>
          </div>

          {/* Buttons */}
          <div className="mt-2 flex-col space-y-6 sm:flex sm:flex-row items-center sm:space-x-6 !space-y-0 xs:flex xs:flex-row xs:space-x-6 ">
            <button className="px-[30px] py-[15px] text-[15px] bg-[#009999] rounded-[12px] text-white-100 flex items-center space-x-2 hover:bg-[#008080] hover:scale-105 hover:shadow-lg transition-transform transition-shadow transition-colors duration-300 ease-in-out">
              <a href="#contact" className="transition-opacity duration-300 ease-in-out hover:opacity-90">
                Download CV
              </a>
              <ArrowDownTrayIcon className="w-6 h-6 text-white-100 transition-transform duration-300 ease-in-out hover:translate-y-1" />
            </button>

            <button className=" px-[30px] py-[15px] m-0 text-[15px] bg-[#2196F3] rounded-[12px] text-white-100 flex items-center space-x-2 hover:bg-[#444444] hover:scale-105 hover:shadow-lg transition-transform transition-shadow transition-colors duration-300 ease-in-out">
              <a href="#contact" className="transition-opacity duration-300 ease-in-out hover:opacity-90">
                Hire Me
              </a>
              <EnvelopeIcon className="w-6 h-6 text-white-100 transition-transform duration-300 ease-in-out hover:translate-y-1" />
            </button>
          </div>
        </motion.div>

        {/* Right content (animation) */}
        <motion.div
          variants={slideIn}
          initial="hidden"
          animate="show"
          className="relative lg:w-[700px] lg:h-[700px] lg:flex items-center h-[378px] w-[500px] flex"
        >
          <Lottie animationData={animationData3} className="object-cover" />
        </motion.div>
      </div>
      <Stats />
      
      <motion.div>
  <div className="flex flex-col items-center justify-center mt-5">
    {/* Scroll Down Text */}
    <motion.p
      className="text-[#FF6F61] text-[17px] font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      Scroll Down
    </motion.p>

    {/* Arrow Animation */}
    <a
      href="#about"
      className="flex items-center justify-center p-4 text-[#FF6F61] text-[20px] font-bold rounded-full hover:bg-[#FF6F61] hover:text-[#E6E6FA] transition-all duration-300 ease-in-out"
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDownIcon className="w-6 h-6" />
      </motion.div>
    </a>
  </div>
</motion.div>

  
    </section>
  );
};

export default Hero;

