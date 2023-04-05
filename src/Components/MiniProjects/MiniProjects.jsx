import React from 'react'
import NavBar from '../Navbar/NavBar'
import project from "./MiniProjects.module.css";
function MiniProjects() {
    const projectData=[{Name:"Stop Watch", Description : 'The App that is used for calculating time using react'},
                        {Name:"ToDoList", Description:'This is basicsally used for storing the data'},
                        {Name:"TicTacToe Game", Description:"The old game tic tack toe"},
                        {Name:"Weather App", Description:"The Weather App Which will show you the weather of the location you want"},]
  return (
    <>
      <NavBar/>
      <div className={project.allCard}>
{
    projectData.map((ele,ind)=><div className={project.card}>
        <h1 className={project.name}>{ind + 1}  {ele.Name}</h1>
        <h3 className={project.desc}>{ele.Description}</h3>
    </div>)

}
      </div>
    <h1 className={project.soon}> Projects will added soon </h1>
    </>
  )
}

export default MiniProjects
