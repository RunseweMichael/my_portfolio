import React from 'react'
import ExperienceText from './ExperienceText'
import ExperienceTop from './ExperienceTop'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

export default function ExperienceMain() {
  return (
    <motion.div 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount:0}}
        div id='experience'
        className='max-w-[1200px] mx-auto px-4'>
      <ExperienceText />
      <ExperienceTop />
      <div className='w-full h-[3px] bg-orange-900 mt-24'></div>
    </motion.div>
  )
}
