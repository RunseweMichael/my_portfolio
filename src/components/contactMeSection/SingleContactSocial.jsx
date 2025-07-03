import React from 'react'

export default function SingleContactSocial({Icon, link}) {
  return (
    <div className='text-2xl h-12 w-12 border border-orange-700 text-orange-700 rounded-full p-3 flex item-center justify-center'>
    <a href={link} className='cursor-pointer'>
        <Icon />
    </a>
    </div>
  )
}
