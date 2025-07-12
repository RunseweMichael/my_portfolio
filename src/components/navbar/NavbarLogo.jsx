import React from 'react';

export default function NavbarLogo() {
  return (
    <div className="overflow-hidden max-w-full flex-shrink-0">
      <h1 className="hidden md:block text-white text-2xl truncate hover:text-orange-500 transition-colors duration-300">
        Michael Runsewe
      </h1>
      <h1 className="block md:hidden text-white font-extrabold text-2xl truncate hover:text-orange-500 transition-colors duration-300">
        MR
      </h1>
    </div>
  );
}
