'use client';
import React from 'react';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { TbLocationFilled } from 'react-icons/tb';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { socialMedia } from '@/data/index';
import { motion } from 'framer-motion';
import { fadeIn } from '@/data/variants';

const Hero = () => {
  return (
    <div className="pb-20 pt-36 mb-8">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="pink"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] "
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        <Spotlight
          className="top-80 left-full h-[90vh] w-[50vw]"
          fill="white"
        />
      </div>

      <div className="h-screen w-full dark:bg-black-100  bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0 ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center">
          {/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2> */}

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="I'm Klark a Full-stack Developer "
          />

          <motion.div
            variants={fadeIn('up', 0.1)}
            initial={{ opacity: 0, y: 100 }}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
          >
            <p className="text-center text-white md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl ">
              Located in Calgary Alberta
            </p>

            <p className="text-center text-white md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl ">
              {' '}
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.1)}
            initial={{ opacity: 0, y: 100 }}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className="flex flex-between gap-5"
          >
            <a href="#projects">
              <MagicButton
                title="Show my Work"
                icon={<TbLocationFilled />}
                position="right"
              />
            </a>
            <a href="/resume.pdf" download={true}>
              <MagicButton
                title="My Resume"
                icon={<IoCloudDownloadOutline />}
                position="right"
              />
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.1)}
            initial={{ opacity: 0, y: 100 }}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className="flex items-center md:mt-6 mt-7 gap-5 "
          >
            {socialMedia.map((icon) => (
              <div
                key={icon.id}
                className="p-2 rounded-full backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border-black-300 transform transition-transform duration-300 hover:scale-110"
              >
                <a href={icon.link} target={'_blank'}>
                  <img
                    src={icon.img}
                    alt={icon.id.toString()}
                    width={25}
                    height={25}
                  />
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
