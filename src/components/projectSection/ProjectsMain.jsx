import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'


export default function ProjectsMain() {
    const projects = [{
        name:"Royal Bites N' Events",
        year:'June 2025',
        align:'right',
        image:'/my_portfolio/Images/project4.jpg',
        link:'https://royal-bites-n-events.vercel.app/'
    },
    {
      name:'Gaia Yoga'  ,
      year:'May 2025',
      align:'left',
      image:'/my_portfolio/Images/portfolio3.jpg',
      link:'https://gaia-yoga.vercel.app/'
    },
    {
      name:'Book Paradise'  ,
      year:'April 2025',
      align:'right',
      image:'/my_portfolio/Images/portfolio1.jpg',
      link:'https://book-paradise-zeta.vercel.app/'
    },
    {
      name:'Digital Clock'  ,
      year:'March 2025',
      align:'left',
      image:'/my_portfolio/Images/project3.jpg',
      link:'https://digital-clock-umber-five.vercel.app/'
    },
    {
      name:'Weight Converter'  ,
      year:'February 2025',
      align:'right',
      image:'/my_portfolio/Images/project8.jpg',
      link:'https://runsewemichael.github.io/Weight_Converter1/'
    },
     {
      name:'Palindrome Checker'  ,
      year:'January 2025',
      align:'left',
      image:'/my_portfolio/Images/project5.jpg',
      link:'https://runsewemichael.github.io/PalindromeChecker/'
    },
    {
      name:'Phone Number Checker'  ,
      year:'January 2025',
      align:'right',
      image:'/my_portfolio/Images/project10.jpg',
      link:'https://runsewemichael.github.io/Phone_Number_Checker/'
    },
    {
      name:'Guessing Game'  ,
      year:'January 2025',
      align:'left',
      image:'/my_portfolio/Images/project11.jpg',
      link:'https://runsewemichael.github.io/guessingGame/'
    },
]


  return (
    <motion.div 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount:0}}
        id='projects' className='max-w-[1200px] mx-auto px-4'>
      <ProjectsText />

      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects.map((project)=>{
          return <SingleProject key={project.name} name={project.name} year={project.year} align={project.align} image={project.image} link={project.link}/>
        })}
      </div>
      <div className='w-full h-[3px] bg-orange-900 mt-24'></div>
    </motion.div>
  )
}
