import React from 'react';
import HeroText from './HeroText';
import HeroPic from './HeroPic';
import HeroGradient from './HeroGradient';

export default function HeroMain() {
  return (
    <div className='pt-35 pb-20'>
      <div className='flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between items-center relative px-4'>
        <HeroText />
        <HeroPic />
        <HeroGradient />
      </div>
    </div>
  );
}
