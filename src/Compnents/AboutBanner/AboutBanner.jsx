import React from "react";
import "./AboutBanner.css";
import grayRightArrow from "../../asset/images/fe_arrow-right.svg";
import { Link } from "react-router-dom";
const AboutBanner = ({ img, titile, link, linkPath }) => {
  return (
    <>
      <div className="about-banner">
        <div className="banner">
          <img src={img} className="img-fluid " alt="" />
        </div>
        <div className="about-text">
          <h2 className="heading2">{titile}</h2>
          <p>
            <Link className="link2" to="/">
              Home <img src={grayRightArrow} className="rightArrow" alt="" />
            </Link>
            |{" "}
            <Link className="link3" to={linkPath}>
              {link}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutBanner;
