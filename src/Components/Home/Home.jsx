import React from "react";
import NavBar from "../Navbar/NavBar";
import style from "./Home.module.css";
function Home() {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.intro}>
          <h1>Welcome to my Portfolio</h1>
          <h2>Hello , I am Rohan Mehtaa </h2>
          <h4>A UI/UX designer and React Developer</h4>
          <button>Projects</button>
        </div>
      </div>
    </>
  );
}

export default Home;
