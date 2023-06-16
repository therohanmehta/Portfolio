import React from "react";

import navbar from "./NavBar.module.css";
import { HiOutlineHome } from "react-icons/hi";

import { FaLaptopCode } from "react-icons/fa";

import { BsFillPersonFill } from "react-icons/bs";

import { GiSmartphone } from "react-icons/gi";


function NavBar() {
  return (
    <>
      {/* <span className={navbar.topIcon} >ROHAN</span> */}
      <div className={navbar.allIcons}>
        <h1 className={navbar.icon}>
          <a href="#home🏠">
            <HiOutlineHome />
          </a>
        </h1>
        <h1 className={navbar.icon}>
          <a href="#about😎">
            <BsFillPersonFill />
          </a>
        </h1>
        <h1 className={navbar.icon}>
          <a href="#connectme📱">
            <GiSmartphone />
          </a>
        </h1>
        <h1 className={navbar.icon}>
          <a href="#projects💻">
            <FaLaptopCode />
          </a>
        </h1>
      </div>
    </>
  );
}

export default NavBar;
