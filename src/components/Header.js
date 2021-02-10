import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>Welcome to Zhongxuan's Portfolio</h1>
        <Typed
          className="typed-text"
          strings={["web dev", "coursework"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link smooth={true} to="footer" className="btn-main-offer">
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Header;
