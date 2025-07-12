import React from 'react'
import ContactMeRight from './ContactMeRight'
import ContactMeLeft from './ContactMeLeft'

export default function ContactMeMain() {
  return (
    <div id='contact' className='max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 '>
      <h2 className='text-6xl text-cyan-600 mb-10 text-center'>Contact Me</h2>
      <div className='flex flex-col md:flex-row justify-between gap-24 p-8 rounded-2xl'>
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  )
}
