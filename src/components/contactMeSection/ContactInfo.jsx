import React from 'react'
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import SingleInfo from './SingleInfo';



export default function ContactInfo() {
  return (
    <div className='flex flex-col gap-4 text-white '>
      <SingleInfo text="runsewemichael39@gmail.com" Image={MdMarkEmailUnread}/>
      <SingleInfo text="+234 907 7781 076 " Image={FaPhoneVolume}/>
      <SingleInfo text="Osun, Nigeria" Image={FaLocationDot}/>
    </div>
  )
}
