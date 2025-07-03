import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

export default function NavbarBtn() {
  return (
    <a href="mailto:runsewemichael39@gmail.com?subject=Hire%20Me" target='_blank'><button className="px-4 py-2 rounded-full text-xl font-bold text-white border-none flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-800 hover:border-orange-500 hover:scale-110 transition-all duration-500">
      Hire Me
      <div className="hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
    </a>
  );
}
