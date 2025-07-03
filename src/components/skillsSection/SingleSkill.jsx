import React from 'react';

export default function SingleSkill({ imgSvg, text }) {
  return (
    <div className='hover:-translate-y-4 transition-all duration-500'>
      <div className='flex flex-col items-center gap-2'>
        <div className='bg-white text-cyan-500 h-[100px] w-[100px] flex items-center justify-center rounded-full text-6xl border-4 border-orange-600
                        hover:animate-spin transition-all duration-500'>
          {imgSvg}
        </div>
        <p className='text-white text-lg mt-2'>{text}</p>
      </div>
    </div>
  );
}
