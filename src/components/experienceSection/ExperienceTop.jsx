import React from 'react';
import ExperienceTopLeft from './ExperienceTopLeft';
import ExperienceTopMiddle from './ExperienceTopMiddle';
import ExperienceTopRight from './ExperienceTopRight';

export default function ExperienceTop() {
  return (
    <div className='flex flex-col lg:flex-row gap-4 items-center justify-evenly'>
      <ExperienceTopLeft />
      <ExperienceTopMiddle /> 
      <ExperienceTopRight />
    </div>
  );
}
