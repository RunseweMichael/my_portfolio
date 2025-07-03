import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

export default function HeroText() {
  return (
    <div className='flex flex-col gap-4 h-full justify-center text-center md:text-left'>
      
      <motion.h2
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount:0}}
        className='text-xl sm:text-2xl lg:text-3xl uppercase text-cyan-800'>
          Full-Stack Web Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount:0}}
        className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500'>
        Michael Runsewe
      </motion.h1>

      <motion.p
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount:0}}
        className='text-base sm:text-lg text-white leading-relaxed'>
        A passionate web developer with 1 year of expertise,<br className='hidden sm:inline' />
        crafting seamless digital experiences from front to back,<br className='hidden sm:inline' />
        one line of code at a time.
      </motion.p>
    </div>
  );
}
