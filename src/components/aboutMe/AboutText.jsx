import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

export default function AboutText() {
  return (
    <motion.div 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount:0}}
        className='flex flex-col items-center text-center md:items-start md:text-left'>
      <h2 className='text-6xl text-cyan-500 mb-10'>About Me</h2>
      <p className='text-white leading-relaxed max-w-lg'>
        Hi, I'm Michael, a Full Stack Web Developer with a knack for innovation and problem-solving. 
        I specialize in crafting custom web applications that deliver exceptional user experiences. 
        With a strong background in React and Django, I'm dedicated to staying up-to-date with 
        industry trends and best practices. Let's collaborate and create something amazing!
      </p>
      <button type='button' className='border border-orange-600 rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange-600 transition-all duration-500 cursor-pointer text-white hover:text-cyan-500 md:self-start sm:self-center'>
        My Projects
      </button>
    </motion.div>
  );
}