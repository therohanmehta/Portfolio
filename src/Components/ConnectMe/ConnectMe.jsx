import React from 'react'
import NavBar from '../Navbar/NavBar'
import cover from '../images/Rohan Kumar (1).png'
import profilepic from '../images/262436211_1049940045575782_7601169662246882175_n.jpg'
import linkedln from './ConnectMe.module.css'
import {AiOutlineHtml5  } from "react-icons/ai";
import {AiOutlineHeart  } from "react-icons/ai";
import {DiCss3  } from "react-icons/di";
import {DiJavascript1  } from "react-icons/di";
import {DiNodejsSmall  } from "react-icons/di";
import {TbBrandMongodb  } from "react-icons/tb";

function ConnectMe() {
  return (
    <>
    <div>
        <NavBar/>

    </div>
<a className={linkedln.atag} href="https://www.linkedin.com/in/therohanmehta/">
    <div className={linkedln.profile}> 
        {/* <AiOutlineLinkedin/> */}
        <img className={linkedln.banner} src={cover} alt="" />
        <img className={linkedln.dp} src={profilepic} alt="" />
       
       <div className={linkedln.bio}>

       <h3 className={linkedln.name}>Rohan Kumar(Click to redirect to Linkedln)</h3>

        <p className={linkedln.headline}>Rohan Kumar || Teaching Assistant at FunctionUp || Civil Engineer || Ex - NoBroker.com || Ex- Astra Communication</p>
        <p className={linkedln.skills}> HTML <AiOutlineHtml5/> CSS <DiCss3 /> JS <DiJavascript1/> REACT-JS <DiNodejsSmall/> MONGO-DB <TbBrandMongodb/> EXPRESS-JS NODE-JS</p>
       </div>
    </div>

    </a>

    </>
  )
}

export default ConnectMe
