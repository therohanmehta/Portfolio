import React from 'react'
import { useNavigate } from "react-router-dom";
import navbar from './NavBar.module.css'
import {BiHomeAlt2  } from "react-icons/bi";
import {AiOutlineLinkedin  } from "react-icons/ai";
import {AiOutlineFolderOpen  } from "react-icons/ai";
import {BsPersonCircle } from "react-icons/bs";
import {TbMail } from "react-icons/tb";
import {AiOutlineHeart  } from "react-icons/ai";
import {GiDrippingHoney  } from "react-icons/gi";
import {TbHexagonLetterR  } from "react-icons/tb";
import {TbHexagonLetterO } from "react-icons/tb";
import {TbHexagonLetterH  } from "react-icons/tb";
import {TbHexagonLetterA  } from "react-icons/tb";
import {TbHexagonLetterN  } from "react-icons/tb";
import mypic from '../images/dp.png'

// import { useNavigate } from 'react-router-dom';
function NavBar() {
  const navigate=useNavigate()
  function goToHome(){
    navigate('/home')
  }
  function goToAbout(){
    navigate('/about')
  }
  function goToContact(){
    navigate('/contact')
  }
  function goToLinkedln(){
    navigate('/linkedln-therohanmehta')
  }
  function goToMiniProjects(){
    navigate('/mini-projects')
  }
const icons=[< BiHomeAlt2 onClick={goToHome} />,<BsPersonCircle onClick={goToAbout}/>,<TbMail onClick={goToContact}/>, <AiOutlineLinkedin className={navbar.linkdln} onClick={goToLinkedln}/>, <AiOutlineFolderOpen onClick={goToMiniProjects}/>]
  return (
    <>
     <span className={navbar.topIcon} ><TbHexagonLetterR /></span>
        <div className={navbar.allIcons}>
        {
            icons.map((ele,index)=>(<h1 className={navbar.icon}>{icons[index]}</h1>))
        }    
        </div>    

        

        
      
        
       
        
    </>
  )
}

export default NavBar
