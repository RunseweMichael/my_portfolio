import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSocial() {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial link='https://github.com/RunseweMichael' Icon={FaGithub}/>
       <SingleContactSocial link='https://www.linkedin.com/in/michael-runsewe' Icon={FaLinkedin}/>
        <SingleContactSocial link='https://wa.me/2349077781076' Icon={FaWhatsapp}/>
    </div>
  )
}
