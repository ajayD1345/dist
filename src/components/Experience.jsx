import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(224, 240, 241, 0.2)",
        color: "#fff",
        borderTop: `3px solid ${experience.iconBg}`,
        borderRadius: "20px",
        boxShadow: "0 0 30px 0 rgba(0, 0, 0, 0.7)",
      }}
       className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      contentArrowStyle={{ borderRight: "7px solid  rgba(224, 240, 241, 0.2)" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain '
          />
        </div>
      }
    >
      <div>
        <h3 className='text-yellow-400 text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-black text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}> Cloud <span className="text-[#FF6F61]">Visionary</span> in <span className="text-[#00FFFF]">Action.</span>
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
        As a Cloud Visionary, I’ve driven cloud, DevOps, and Linux system administration projects, automating and optimizing infrastructures with a focus on scalability and security.
        </p>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
