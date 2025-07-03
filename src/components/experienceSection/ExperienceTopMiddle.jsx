import React from 'react'
import experienceImg from '../../assets/portfolio1.jpg'

export default function ExperienceTopMiddle() {
  return (
    <div className='lg:w-[30%] md:w-[45%] sm:w-[70%]'>
      <img src={experienceImg} alt="Experience IMage" width={350} height={200} className='exp-img'/>
    </div>
  )
}
