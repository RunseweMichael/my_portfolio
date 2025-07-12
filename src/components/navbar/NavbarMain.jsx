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
    <>
      <nav className="w-full sticky top-2 left-0 z-20 bg-transparent">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between bg-black p-3 sm:p-4 lg:p-6 rounded-full border border-orange-500 overflow-hidden">
          
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <NavbarLogo />
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center space-x-6 flex-shrink">
            <NavbarLinks />
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block flex-shrink-0">
            <NavbarBtn />
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex-shrink-0">
            <button
              onClick={toggleMenu}
              className="p-2 border border-orange-500 rounded-full hover:bg-orange-500 transition-colors duration-300"
            >
              <GiHamburgerMenu className="text-white text-2xl" />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-black border-t border-orange-500 mt-1 rounded-b-xl max-w-[1200px] mx-auto w-full px-4 sm:px-6">
            <NavbarLinks />
          </div>
        )}
      </nav>

      {/* Prevent content from going under the navbar */}
      <div className="h-[80px] lg:h-[100px]"></div>
    </>
  );
}
