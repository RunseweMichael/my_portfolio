import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

export default function ContactMeRight() {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <img src='/Images/email-img.jpg' alt="Contact Me" className='max-w-[300px] emailImg'/>
      <ContactInfo />
      <ContactSocial />
    </div>
  )
}
