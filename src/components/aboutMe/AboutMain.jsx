import React from 'react'
import AboutText from './AboutText'
import AboutImage from './AboutImage'

export default function AboutMain() {
  return (
    <div id='about' className='flex flex-col md:flex-row sm:flex-col gap-5 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center'>
     <AboutText />
     <AboutImage />
    </div>
  )
}
