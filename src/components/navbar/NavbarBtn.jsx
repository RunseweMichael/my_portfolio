import React from 'react';
import { LuArrowDownRight } from "react-icons/lu";

export default function NavbarBtn() {
  return (
    <a
      href="mailto:runsewemichael39@gmail.com?subject=Hire%20Me"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block max-w-full"
    >
      <button
        className="w-full sm:w-auto px-4 py-2 rounded-full text-base sm:text-lg font-bold text-white border-none 
        flex items-center justify-center gap-1 bg-gradient-to-r from-orange-500 to-red-800 
        hover:border-orange-500 hover:scale-105 transition-all duration-300 overflow-hidden"
      >
        Hire Me
        <span className="hidden md:inline-flex">
          <LuArrowDownRight />
        </span>
      </button>
    </a>
  );
}
