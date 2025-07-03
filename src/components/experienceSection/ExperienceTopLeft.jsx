import React from 'react'
import ExperienceInfo from './ExperienceInfo'

export default function ExperienceTopLeft() {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className='text-orange-600 font-bold uppercase text-3xl text-center'>Since 2024</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo number='1' text='Year' />
        <p className='font-bold text-6xl text-gray-700'>-</p>
        <ExperienceInfo number='7' text='Websites'/>
        
      </div>
      <div>
        <p className='text-center text-white'>With 1 year of experience building dynamic and user-friendly web applications.</p>
      </div>
      {/* <ExperienceInfo /> */}
    </div>
  )
}
