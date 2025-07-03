import React from 'react';

export default function HeroGradient() {
  return (
    <div>
      {/* Gradient 1: Positioned with responsiveness */}
      <div className='gradient absolute top-0 right-[100px] sm:right-[200px] md:right-[300px] lg:right-[400px] -z-10 animate-pulse'></div>

      {/* Gradient 2: Remains at top-right corner */}
      <div className='gradient2 absolute top-0 right-0 -z-10 animate-pulse'></div>
    </div>
  );
}
