import React from 'react'

export default function ExperienceInfo({number, text}) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='font-bold text-6xl text-cyan-500'>{number}</p>
      <p className='font-bold text-xl text-gray-500 uppercase -mt-2'>{text}</p>
    </div>
  )
}
