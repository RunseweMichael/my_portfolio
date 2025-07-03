import React from 'react';
import { PiHexagonLight } from "react-icons/pi";
import mikeImg from '../../assets/mike.jpg';
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

export default function HeroPic() {
  return (
    <motion.div 
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount:0}}
        className='h-full flex items-center justify-center relative'>
      <img 
        src={mikeImg} 
        alt="Michael Runsewe"  
        className='max-h-[330px] w-auto z-10 mt-5 img' 
      />
      
      <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
        <PiHexagonLight  
          className='h-[120%] sm:h-[100%] md:h-[80%] min-h-[500px] w-auto text-cyan-800 blur-md animate-[spin_20s_linear_infinite]'
        />
      </div>
    </motion.div>
  );
}
