
import React from 'react'
import style from './Projects.module.css'
function Projects() {
  return (
    <>
    <div className={style.wholepage}>

      <h1>Here are some projects that i created</h1>
    
      <div className={style.project}>
      
      <img src="kanban.png" alt="kanban board sample" />

      <div className={style.projectDesc}>
        <ul>
        <button>Github</button>
        <button>Github</button>
        <li>This project is a Web-App that provides a visual representation of tasks and workflows</li>
        <li>By using cards and columns to represent tasks and their progress</li>
        <li> We can add description on any particular task according to our requirement
</li>
        <li> We can customize our board with any image across the internet
</li>
        </ul>



      </div>

      </div>

      <div className={style.project}>

      
      <img src="docs.png" alt="kanban board sample" />
      <div className={style.projectDesc}>
        <ul>
        <button>Github</button>         <button>Github</button>

        <li>This project is a Web-App that provides a visual representation of tasks and workflows</li>
        <li>By using cards and columns to represent tasks and their progress</li>
        <li> We can add description on any particular task according to our requirement
</li>
        <li> We can customize our board with any image across the internet
</li>
        </ul>



      </div>

      </div>
      <div className={style.project}>

      
      <img src="gym.png" alt="kanban board sample" />
      <div className={style.projectDesc}>
        <ul>
        <button>Github</button>
        <button>Github</button>
        <li>This project is a Web-App that provides a visual representation of tasks and workflows</li>
        <li>By using cards and columns to represent tasks and their progress</li>
        <li> We can add description on any particular task according to our requirement
</li>
        <li> We can customize our board with any image across the internet
</li>
        </ul>



      </div>

      </div>

    </div>
    </>
  )
}

export default Projects
