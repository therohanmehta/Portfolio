import React from 'react'
// import './App.css';
import {AiOutlineApple } from "react-icons/ai";
import HomeStyle from './Home.module.css'
import NavBar from '../Navbar/NavBar'
function Home() {
  return (
    <>
      <NavBar/>
   <div className={HomeStyle.intro}>

    <h1 className={HomeStyle.name}>Rohan Kumar</h1>
    <h2 className={HomeStyle.bio}>A MERN STACK DEV. </h2>

   </div>
  
    </>
  )
}

export default Home
