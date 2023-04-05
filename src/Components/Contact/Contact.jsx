import React from 'react'
import NavBar from '../Navbar/NavBar'
import contact from "./Contact.module.css";
import {SiMaildotru } from "react-icons/si";
function Contact() {
  return (
    <>
      <NavBar/>
      <div className={contact.div}>
      <h1 className={contact.sayHello}> Say Hello to Me</h1>
    
      <h1> <SiMaildotru/>   <a className={contact.mailMe} href="mailto:rohankumar21mar@gmail.com">rohankumar21mar@gmail.com</a></h1>

      <h1 className={contact.msg}>I would love to see your feedback suggestion and appreciation in my inbox🤍 </h1>
      </div>

    </>
  )
}

export default Contact
