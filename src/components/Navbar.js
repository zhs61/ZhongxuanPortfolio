import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <Link smooth={true} to="home" className="navbar-brand" href="#">
          Zhongxuan
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="aboutMe"
                offset={-50}
                className="nav-link"
                href="#"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="experience"
                offset={-50}
                className="nav-link"
                href="#"
              >
                Experiences
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                smooth={true}
                to=""
                offset={-50}
                className="nav-link"
                href="#"
              >
                Projects
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                smooth={true}
                to="footer"
                offset={-50}
                className="nav-link"
                href="#"
              >
                contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
