'use client';
import { skills } from '@/data/index';
import { motion } from 'framer-motion';
import React from 'react';
import { fadeIn } from '@/data/variants';

const Skills = () => {
  return (
    <div className="py-40 " id="skills">
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial={{ opacity: 0, y: 100 }}
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
      >
        <h1 className="heading text-white-100 ">
          My <span className="text-blue-400">Skills</span>
        </h1>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 0.1)}
        initial={{ opacity: 0, y: 100 }}
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-wrap items-center justify-center  p-8 gap-8 mt-10 "
      >
        {skills.map(({ id, title, iconLists, nameLists }) => (
          <div
            key={id}
            className=" flex flex-col items-center justify-center text-white  "
          >
            <div className=" flex  w-full justify-center items-center mb-8">
              <h1 className="text-4xl text-white-200 font-semibold text-center">
                {title}
              </h1>
            </div>
            <div className="  p-5 w-full  gap-4 flex-wrap flex items-center justify-center">
              {nameLists.map((icon, index) => (
                <div
                  key={index}
                  className=" p-5 ease-in-out transform hover:scale-150 transition-transform duration-300 flex flex-col justify-center items-center"
                >
                  <img
                    src={iconLists[index]}
                    alt={title}
                    className="w-14 h-14 object-contain mb-3  rounded-lg"
                  />
                  <p className="text-white-200 text-lg">{icon}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
