import React ,{useState, useEffect}from "react";
import style from "./Home.module.css";
function Home() {
  const[number,setNumber]=useState(0)
  const data=['Programmer','Front End Web Developer','Civil Engineer','Cricketer','Guitarist','Pianist','Photgrapher']
const bgWallpaper=['https://i.pinimg.com/736x/77/fe/96/77fe96340a9296d59acbfce203c704e2.jpg',
'https://res.cloudinary.com/practicaldev/image/fetch/s--U5-_LOw7--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/an073jdwgkc1ztij8sj7.png',
'https://wallpapers.com/images/hd/helmet-for-civil-engineering-eb0kjqx8al9rsjkk.jpg',
'https://wallpaperaccess.com/full/1088580.jpg',
'https://c4.wallpaperflare.com/wallpaper/963/490/355/guitar-strings-music-blur-wallpaper-preview.jpg ',
'https://rare-gallery.com/thumbs/769520-Closeup-Piano.jpg',
'https://images4.alphacoders.com/255/thumb-1920-255596.jpg'
]

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
  }, 3000);

},[number])

  return (
    <>
      <div className={style.wrapper}>
  
        <h2 >Hello I am Rohan</h2>
        <h2 className={style.fadeIn}>A {data[number]}</h2>
        
        
      </div>
    </>
  );
}

export default Home;
