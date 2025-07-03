import React from 'react'
import { Link } from 'react-scroll';

export default function FooterMain() {
     const links = [
        { name: 'About Me', href: 'about' },
        { name: 'Skills', href: 'skills' },
        { name: 'Experience', href: 'experience' },
        { name: 'Projects', href: 'projects' },
        { name: 'Contact', href: 'contact' }
    ];
  return (
    <div className='px-4'>
      <div className='w-full h-[3px] bg-orange-900 mt-24'></div>
      <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto'>
        <p className='text-3xl text-orange-700'>Michael Runsewe</p>
        <ul className='flex gap-4 text-orange-700 text-xl'>
            {links.map((item,index)=>{
                return <li key={index}>
                    <Link to={item.href} className='hover:text-white transition-all duration-500 cursor-pointer'>{item.name}</Link>
                </li>
            })}
        </ul>
      </div>
      <div>
        <p className='max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-orange-700'>&copy; 2025 Michael Runsewe | All Rights Reserved.</p>
      </div>
    </div>
  )
}
