import React from "react";

import navbar from "./NavBar.module.css";
import { BiHomeAlt2 } from "react-icons/bi";

import { AiOutlineFolderOpen } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { TbMail } from "react-icons/tb";

function NavBar() {
  return (
    <>
      {/* <span className={navbar.topIcon} >ROHAN</span> */}
      <div className={navbar.allIcons}>
        <h1 className={navbar.icon}>
          <a href="#home">
            <BiHomeAlt2 />
          </a>
        </h1>
        <h1 className={navbar.icon}>
          <a href="#about">
            <BsPersonCircle />
          </a>
        </h1>
        <h1 className={navbar.icon}>
          <a href="#connectme">
            <TbMail />
          </a>
        </h1>
        <h1 className={navbar.icon}>
          <a href="#projects">
            <AiOutlineFolderOpen />
          </a>
        </h1>
      </div>
    </>
  );
}

export default NavBar;
