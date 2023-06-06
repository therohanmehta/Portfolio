import React from 'react'
import { useNavigate } from "react-router-dom";
import navbar from './NavBar.module.css'
import {BiHomeAlt2  } from "react-icons/bi";
import {AiOutlineLinkedin  } from "react-icons/ai";
import {AiOutlineFolderOpen  } from "react-icons/ai";
import {BsPersonCircle } from "react-icons/bs";
import {TbMail } from "react-icons/tb";
import {TbHexagonLetterR  } from "react-icons/tb";

// import { useNavigate } from 'react-router-dom';
function NavBar() {

  function goToHome(){
    alert('1')
  }
  function goToAbout(){
    alert('2')
  }
  function goToContact(){
    alert('3')
  }
  function goToLinkedln(){
    alert('4')
  }
  function goToMiniProjects(){
    alert('5')
  }
const icons=[< BiHomeAlt2 onClick={goToHome} />,
<BsPersonCircle onClick={goToAbout}/>,
<TbMail onClick={goToContact}/>,
 <AiOutlineFolderOpen onClick={goToMiniProjects}/>]
  return (
    <>
     {/* <span className={navbar.topIcon} ><TbHexagonLetterR /></span> */}
        <div className={navbar.allIcons}>
        {
            icons.map((ele,index)=>(<h1 className={navbar.icon}>{icons[index]}</h1>))
        }    
        </div>    

        

        
      
        
       
        
    </>
  )
}

export default NavBar
