import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2015-2019</h3>
            <p>
              I graduated from the Miami University in 2019 with a Bachelor
              Degree in Computer Science. I listed 3 times in the President's
              List. I took Data Structure, Algorithms, Computer Graphics and
              many more interesting courses.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-2021</h3>
            <p>
              I am a Master student at the University of Pittsburgh studying
              Computer Science. I expected to graduate in May 2021.{" "}
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-06</h3>
            <p>
              I started to work at HERL to develop products which can benefit
              the community. I practice my Web development skills in the
              process.I love React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
