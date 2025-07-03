import React from 'react'
import SkillsText from './SkillsText'
import AllSkills from './AllSkills'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

export default function SkillsMain() {
  return (
    <div id='skills'>
        <div className='max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden'>
          <div className='w-full h-[3px] bg-orange-900 mt-24'></div>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView='show'
              viewport={{once: false, amount:0}}
            ><SkillsText />
            </motion.div>
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{once: false, amount:0}}
            ><AllSkills /></motion.div>
            <div className='w-full h-[3px] bg-orange-900 mt-24'></div>
        </div>
    </div>
  )
}
