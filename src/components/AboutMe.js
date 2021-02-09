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
          <p>Self intro</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
