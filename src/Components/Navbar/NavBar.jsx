import React from 'react'
import { useNavigate } from "react-router-dom";
import navbar from './NavBar.module.css'
import {BiHomeAlt2  } from "react-icons/bi";
import {AiOutlineLinkedin  } from "react-icons/ai";
import {AiOutlineFolderOpen  } from "react-icons/ai";
import {BsPersonCircle } from "react-icons/bs";
import {TbMail } from "react-icons/tb";
import {TbHexagonLetterR  } from "react-icons/tb";
import About from '../About/About';
import ConnectMe from '../ConnectMe/ConnectMe';
import Projects from '../Projects/Projects';


function NavBar() {


  return (
    <>
     <span className={navbar.topIcon} >ROHAN</span>
        <div className={navbar.allIcons}>
       
        <h1 className={navbar.icon}><a href="#home">< BiHomeAlt2  /></a></h1>
        <h1 className={navbar.icon}><a href="#about">< BsPersonCircle  /></a></h1>
        <h1 className={navbar.icon}><a href="#connectme">< TbMail  /></a></h1>
        <h1 className={navbar.icon}><a href="#projects">< AiOutlineFolderOpen /></a></h1>
        
        </div>    

    </>
  )
}

export default NavBar
