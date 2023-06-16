import React ,{useState, useEffect}from "react";
import style from "./Home.module.css";
function Home() {
  const[number,setNumber]=useState(0)
  const data=['Programmer','Front End Web Developer','Civil Engineer','Cricketer','Guitarist','Pianist','Photgrapher']



useEffect(()=>{
  setTimeout(() => {
    if(number<data.length){
      setNumber(number+1)
    }
    if(number>=data.length-1){
      setNumber(0)
    }
    console.log(number)
    // setNumber(0)
  }, 5000);

})

  return (
    <>
      <div className={style.wrapper}>
  
        <h2 >Hello I am <span className={style.nameFade}>Rohan</span></h2>
        <h2 className={style.fadeIn}>A {data[number]}</h2>
        
        
      </div>
    </>
  );
}

export default Home;
