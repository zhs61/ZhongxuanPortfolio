import React from "react";
import Muffin from "../zhongxuan.jpg";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profil-img" src={Muffin} alt="Zhongxuan" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            My name is Zhongxuan Song, I am a second-year Master Computer
            Science student at the University of Pittsburgh. I am currently
            working at the Human Engineering Research Laboratories as an Intern
            Software Engineer. I am leading the re-build of the WheelFit System
            which can significant benefit people with disabilities.
            <br></br>
            <br></br>I am interested in Full-Stack Web development. React is my
            favorite, but I also used Angular, Express.Js, and Flask.
            <br></br>
            <br></br>I am volunteering at Curve to build a Research searching
            platform to help the student find their dream opportunity.
            <br></br>
            <br></br>
            <b>I am looking for Full-time SDE position in May 2021.</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
