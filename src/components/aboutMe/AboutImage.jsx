import React from 'react'
import portfolio2 from '../../assets/portfolio2.jpg'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

export default function AboutImage() {
  return (
    <motion.div 
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount:0}}
        className='h-[500px] w-[300px] relative'>
        <div className='h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden'>
         <img src={portfolio2} alt="about me image" className='h-full w-auto object-cover' />
        </div>

        <div className=' h-[500px] w-[250px] bg-orange-600 absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10 '></div>
    </motion.div>
  )
}
