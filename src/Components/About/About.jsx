import React from "react";
import { Carousel } from "3d-react-carousal";
import style from "./About.module.css";
function About() {
  const images = [
    "https://quintagroup.com/cms/js/js-image/react.js-logo.png/@@images/a9bf22bd-373a-4fae-a900-c22fd12c87c7.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
    "https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
    "https://miro.medium.com/v2/resize:fit:1400/1*Smbj_VLH7JRp9GhLaKyiUQ.png",
    "https://cyberlancers.com/images/default-source/blog/bootstrap-logo.png?sfvrsn=106f9c97_1",
    "https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png",
    "https://www.pngmart.com/files/22/GitHub-PNG-File.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png",
    'https://inapp.com/wp-content/uploads/elementor/thumbs/express-js-01-1-q05uw85vt1jqloiy5k82sfy7tgvysgt1uqld8slsbc.png',
    'https://www.creative-tim.com/blog/content/images/wordpress/2020/03/node-js-736399_1280.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png',
    'https://quolum.com/blog/wp-content/uploads/2023/01/coverimage.png'
  ];

  let slides = [
    <div className={style.percard}>
      <h1>Web Development</h1>
      <h3>FunctionUp</h3>
      <h3>Frontend Developer Trainee </h3>
      <h4>Feb 2023 - Present</h4>
    </div>,
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
    </div>,
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
    </div>,
  ];

  return (
    <>
      <div className={style.wholepage}>
        <div className={style.skills}>
          <h1 className={style.headingText}>Programming Skills</h1>
          <div className={style.inner}>
            <div className={style.wrapper}>
              <section style={{ "--speed": `${20000}ms` }}>
                {images.map((image, index) => (
                  <div className="image" key={index}>
                    <img className={style.skillImg} src={image} alt={index} />
                  </div>
                ))}
              </section>
              <section style={{ "--speed": `${20000}ms` }}>
                {images.map((image, index) => (
                  <div className="image" key={index}>
                    <img className={style.skillImg} src={image} alt={index} />
                  </div>
                ))}
              </section>
              <section style={{ "--speed": `${20000}ms` }}>
                {images.map((image, index) => (
                  <div className="image" key={index}>
                    <img className={style.skillImg} src={image} alt={index} />
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
        <div className={style}>
          <h1 className={style.headingText}>Education and Experience</h1>
          <Carousel slides={slides} autoplay={true} interval={3000} />
        </div>
      </div>
    </>
  );
}

export default About;
