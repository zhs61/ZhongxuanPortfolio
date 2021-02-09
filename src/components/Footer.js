import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>1420 Centre Ave. Pittsbrugh, Pennsylvania, 15219</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">(248) 525-4380</a>
            </div>
            <div className="d-flex">
              <p>zhongxuancareer@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Experience</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
