import React ,{useState, useEffect}from "react";
import style from "./Home.module.css";
function Home() {
  const[number,setNumber]=useState(0)
  const data=['Programmer','Front End Web Developer','Civil Engineer','Full Stack Developer','UI/UX Designer','Web Designer']



useEffect(()=>{
  setTimeout(() => {
    if(number<data.length){
      setNumber(number+1)
    }
    if(number>=data.length-1){
      setNumber(0)
    }
    // console.log(number)
    
  }, 5000);

})

  return (
    <>
      <div className={style.wrapper}>
  
        <h2 >Hello I am <span className={style.nameFade}>Rohan</span></h2>
        <p className={style.fadeIn}>{data[number]}</p>
        
        
      </div>
    </>
  );
}

export default Home;
