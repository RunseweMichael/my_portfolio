import React from 'react'
import {Link} from 'react-scroll';

export default function NavbarLinks() {
    const links = [
        { name: 'About Me', href: 'about' },
        { name: 'Skills', href: 'skills' },
        { name: 'Experience', href: 'experience' },
        { name: 'Projects', href: 'projects' },
        { name: 'Contact', href: 'contact' }
    ];
  return (
    <div>
     <ul className="flex flex-col gap-6 text-white font-bold text-center 
               absolute top-[120%] left-[50%] -translate-x-[50%] 
               w-full py-4 bg-cyan-950 backdrop-blur-lg text-xl
               lg:flex-row lg:relative lg:top-auto lg:left-auto lg:translate-x-0 
               lg:bg-black lg:text-md">
        {links.map((link) => (
            <li key={link.name} className='group'>
                <Link to={link.href} 
                smooth={true}
                spy={true}
                duration={500}
                offset={-130}
                className='text-white cursor-pointer hover:text-orange-500 transition-colors duration-500'>
                  {link.name}
                </Link>
                <div className='mx-auto bg-orange-500 w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
            </li>
        ))}
     </ul>
    </div>
  )
}
