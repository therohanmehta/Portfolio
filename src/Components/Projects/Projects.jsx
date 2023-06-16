import React from "react";
import style from "./Projects.module.css";
import { BsGithub } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";

function Projects() {
  return (
    <>
      <div className={style.wholepage}>
        <h1 className={style.heading}>Here are some Projects that I created</h1>

        <div className={style.project}>
          <a
            href="https://monday-com.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="kanban.png" alt="kanban board sample" />
          </a>
          <div className={style.projectDesc}>
            <ul>
              <button>
                {" "}
                <a
                  href="https://github.com/therohanmehta/Kanban-Board"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1>
                    <BsGithub /> Github
                  </h1>
                </a>
              </button>
              <button>
                {" "}
                <a
                  href="https://monday-com.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1>
                    <BsDisplay /> Website
                  </h1>
                </a>
              </button>
               <li> <b>React JS , Material UI , React-Beautiful-Dnd , Recoil</b> </li> 
              <li>
                This project is a Web-App that provides a visual representation
                of tasks and workflows
              </li>
              <li>
                By using cards and columns to represent tasks and their progress
              </li>
              <li>
                {" "}
                We can add description on any particular task according to our
                requirement
              </li>
              <li>
                {" "}
                We can customize our board with any image across the internet
              </li>
            </ul>
          </div>
        </div>

        <div className={style.project}>
          <a
            href="https://googledocs-smoky.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="docs.png" alt="kanban board sample" />
          </a>
          <div className={style.projectDesc}>
            <ul>
              <button>
                {" "}
                <a
                  href="https://github.com/therohanmehta/Google-Docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1>
                    <BsGithub /> Github
                  </h1>
                </a>
              </button>
              <button>
                {" "}
                <a
                  href="https://googledocs-smoky.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1>
                    <BsDisplay /> Website
                  </h1>
                </a>
              </button>
              <li> <b>React JS , Material UI , Exec-command , JS2PDF , HTML2CANVAS</b> </li> 
              <li>
                {" "}
                This is a Web-App created to provide user a Text area for
                writing their notes, thought
              </li>
              <li>
                It has all the features of formatting, customizing, adding
                images according to our need
              </li>
              <li> We can print the sheet within a click</li>
              <li>
                {" "}
                We can also convert the sheet into a compressed PDF for easy
                sharing
              </li>
            </ul>
          </div>
        </div>
        <div className={style.project}>
          <a
            href="https://twitter-sigma-five.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="twitter.png" alt="twitter sample" />
          </a>
          <div className={style.projectDesc}>
            <ul>
              <button>
                {" "}
                <a
                  href="https://github.com/therohanmehta/Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1>
                    <BsGithub /> Github
                  </h1>
                </a>
              </button>
              <button>
                {" "}
                <a
                  href="https://twitter-sigma-five.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1>
                    <BsDisplay /> Website
                  </h1>
                </a>
              </button>
              <li> <b>React JS , Material UI , React-router-dom , Recoil ,Axios</b> </li> 
              <li>
              This project is a clone of twitter where user can register and login
              </li>
              <li>
              Also we can able to add tweet whatever we want
              </li>
              <li>
                {" "}
                User can access the website form any device Smartphone, Tablets, PC
              </li>
            </ul>
          </div>
        </div>
        <div className={style.project}>
          <a
            href="https://gym-website-liard-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="gym.png" alt="kanban board sample" />
          </a>
          <div className={style.projectDesc}>
            <ul>
              <button>
                {" "}
                <a
                  href="https://github.com/therohanmehta/GymWebsite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1>
                    <BsGithub /> Github
                  </h1>
                </a>
              </button>
              <button>
                {" "}
                <a
                  href="https://gym-website-liard-eight.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1>
                    <BsDisplay /> Website
                  </h1> 
                </a>
              </button>
              <li> <b>React JS , Material UI , React-router-dom , Recoil </b> </li> 
              <li>
                This is a promotional static website for representing our gym
                across the people
              </li>
              <li>
                User can go through the website to know about our faculties,
                membership & many more
              </li>
              <li>
                {" "}
                We can add description on any particular task according to our
                requirement
              </li>
            </ul>
          </div>
        </div>

   
      </div>
    </>
  );
}

export default Projects;
