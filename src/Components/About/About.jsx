import React from 'react'
import {Carousel} from '3d-react-carousal';
import style from './About.module.css'
function About() {
  // let slides = [
  //   <img  src="https://picsum.photos/800/300/?random" alt="1" />,
  // <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
  // <img  src="https://picsum.photos/800/302/?random" alt="3" />  , 
  // <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
  // <img src="https://picsum.photos/800/304/?random" alt="5" />  ];
  let slides = [
  
<div  className={style.percard}>
<h1>Web Development</h1>
  <h3>FunctionUp</h3>
  <h3>Frontend Developer Trainee  </h3>
  <h4>Feb 2023 - Present</h4>
</div>
,
<div className={style.percard}>
<h1>NoBroker.com</h1>
  <h3>Bengaluru, Karnataka</h3>
  <h3>Loan and Legal Advisory</h3>
  <h4>Sep 2022 - Dec 2022</h4>
</div>,

<div className={style.percard}>
<h1>Astra Communication</h1>
  <h3>Dhanbad , Jharkhand</h3>
  <h3>Sales and Managing Assistant </h3>
  <h4>Jan 2022 - Aug 2022</h4>
</div>
,
<div className={style.percard}>
<h1>Graduation</h1>
  <h3>Jharkhand University of Technology</h3>
  <h3>Civil Engineering 2018-2021</h3>
  <h4>Grade 80.19%</h4>
</div>,

<div className={style.percard}>
<h1>Intermediate(XII)</h1>
  <h3>Indian School of Learning Jharia</h3>
  <h3>Science 2016-2018</h3>
  <h4>Grade 84%</h4>
</div>,
<div className={style.percard}>
<h1>Matriculation(X)</h1>
  <h3>Indian School of Learning Jharia</h3>
  <h3>Science 2016</h3>
  <h4>Grade 8.2 / 10 CGPA</h4>
</div>
];

const skills=['HTML 5' ,'CSS3 ','JAVASCRIPT','REACT JS','GIT','GITHUB','NPM','REDUX','RECOIL']
  return (
<>
<div className={style.wrapper}>
<div className={style.skills}>
<h1>Skills</h1>
<div>

{skills.map((ele,ind)=><p className={style.perskill}>{ele}</p>)}
</div>

</div>
<div className={style.edu}>
<h1>Education and Experience</h1>
<Carousel slides={slides} autoplay={true} interval={3000}/>
</div>
</div>
</>
  )
}

export default About
