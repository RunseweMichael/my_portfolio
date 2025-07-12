import React from 'react'
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import AboutMain from './components/aboutMe/AboutMain'
import SkillsMain from './components/skillsSection/SkillsMain'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import ProjectsMain from './components/projectSection/ProjectsMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FootersMain from './components/footer/FootersMain'



export default function App() {
  return (
   <main className='font-montserrat'>
    <NavbarMain />
    <HeroMain />
    <SubHeroSection />
    <AboutMain />
    <SkillsMain />
    <ExperienceMain />
    <ProjectsMain />
    <ContactMeMain />
    <FootersMain />
   </main>
  )
}