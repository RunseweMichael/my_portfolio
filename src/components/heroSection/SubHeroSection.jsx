import React from 'react'

export default function SubHeroSection() {
  return (
    <div className='w-full flex items-center justify-around gap-4 py-8 border-y border-lightGrey bg-col text-lightGrey uppercase xl:text-4xl md:text-2xl sm:text-4xl text-orange-600 subHero'>
      <p className='md:block sm:hidden'>Results Driven</p>
      <p className='md:block sm:hidden'>Team Oriented</p>
      <p>Fast Learner</p>
    </div>
  )
}
