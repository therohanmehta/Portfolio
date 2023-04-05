import React from 'react'
import NavBar from '../Navbar/NavBar'
import abt from './About.module.css'
function About() {
  return (
    <div>
      <NavBar/>
      <div className={abt.introDiv}>
      <h1 className={abt.aboutMe}>About Me</h1>
      <h4 className={abt.intro}>
        I am Rohan from Dhanbad,Jharkhand . Previously an Civil Engineer But now A FrontEnd Devloper</h4>


      </div>
      
    </div>
  )
}

export default About
