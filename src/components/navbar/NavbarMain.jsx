import React, { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavbarMain() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-1/2 -translate-x-1/2 z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange-500">
        <NavbarLogo />
        
        {/* Desktop links (lg and up) */}
        <div className="hidden lg:block">
          <NavbarLinks />
        </div>
        
        <NavbarBtn />
      </div>

      {/* Mobile hamburger menu toggle */}
      <div className="flex lg:hidden p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange-500 hover:bg-orange-500 transition-colors duration-300 cursor-pointer">
        <button
          className="text-2xl p-3 border border-orange-500 rounded-full hover:bg-orange-500 transition-colors duration-300"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu className="text-white text-2xl" />
        </button>
      </div>

      {/* Mobile menu (below navbar) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-orange-500 lg:hidden">
          <NavbarLinks />
        </div>
      )}
    </nav>
  );
}
