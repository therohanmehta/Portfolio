import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import style from "./Bottom.module.css";
export default function Bottom() {
  return (
    <div className={style.wrapper}>
      <h2>Created with 🖤 </h2>
      <h2>Copyright ©️ 2023  </h2>

      <div className={style.icons}>
        <a
          href="https://github.com/therohanmehta"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <BsGithub />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/therohanmehta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <BsLinkedin />
        </a>
        <a
          href="https://www.facebook.com/therohanmetha"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <BsFacebook />
        </a>
        <a
          href="https://twitter.com/the_rohanmehta"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <BsTwitter />
        </a>
        <a
          href="https://www.instagram.com/the.rohanmehta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <BsInstagram />
        </a>
      </div>
    </div>
  );
}
