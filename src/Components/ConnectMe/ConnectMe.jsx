import React from 'react'
import style from './ConnectMe.module.css'
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { FaDownload } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
function ConnectMe() {
  return (
    <>
    <div className={style.wholepage}>
      <h1 style={{paddingTop:'5px'}}>Dont be a stranger ! Connect with me </h1>
     
   
      <h2></h2>
      <div className={style.pdf}>
       <a href="Resume.pdf" target="_blank" rel="noopener noreferrer"><span>If want to know more </span> </a>
       <a href="Resume.pdf" target="_blank" rel="noopener noreferrer"><span className={style.rohan}>Here is my Resume <FaDownload/></span> </a>
       <img src="" alt="" />

      </div>
       <div className={style.content}>
     <a href="https://github.com/therohanmehta" target="_blank" rel="noopener noreferrer">
      <div className={style.github}>
      <h1><BsGithub/></h1>
      <p>Check my projects on Github</p>
      <p>@therohanmehta</p>
      </div>
     </a>

     <a href="http://instagram.com/the.rohanmehta" target="_blank" rel="noopener noreferrer">
       
     <div className={style.insta} >
      <h1><BsInstagram/></h1>
      <p>Follow me on Insta</p>
      <p>@the.rohanmehta</p>
      </div>
     </a>
      
   
     <a href="  https://twitter.com/the_rohanmehta" target="_blank" rel="noopener noreferrer">
     <div className={style.twitter} >
      <h1><BsTwitter/></h1>
      <p>Follow me on twitter</p>
      <p>@therohanmehta</p>
      </div>
     </a>
     <a href="https://www.linkedin.com/in/therohanmehta/" target="_blank" rel="noopener noreferrer">

      <div className={style.linkedin} >
      <h1><BsLinkedin/></h1>
      <p>Connect with me on Linkedin</p>
      <p>@therohanmehta</p>
      </div>
     </a>
      <a href="http://google.com" target="_blank" rel="noopener noreferrer">
      <div className={style.facebook} >
      <h1><BsFacebook/></h1>
      <p>Add me on Facebook</p>
        <p >@therohanmehta</p>
      
      </div>
        </a>
    </div>
</div>
    </>
  )
}

export default ConnectMe

