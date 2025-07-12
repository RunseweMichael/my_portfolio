
import React from 'react'
import AboutText from './AboutText'
import AboutImage from './AboutImage'

export default function AboutMain() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto px-4 gap-10'>
     <AboutText />
     <AboutImage />
    </div>
  )
}
