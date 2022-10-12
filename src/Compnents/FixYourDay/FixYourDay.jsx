import React from "react";
import manpic from "../../asset/images/manpic.svg"
import google from "../../asset/images/google.svg"
import appstore from "../../asset/images/appstore.png"


import "./FixYourDay.css";
const FixYourDay = () => {
  return (
    <>
      <div className="Bluebanner">
        <div className="fixTextBox">
          <h1 className="heading1 ">we fix your Day To Day <span id="yellow"> problems </span></h1>
          <p className="p3">We make sure excellent service thought our expert workers</p>
          <div  className="googlwbtn">
            <img src={appstore} className="appstore"  alt="" />
            <img src={google} alt="" className="googlestore" />
          </div>
        </div>

        <div>
            <img className="manpiic img-fluid" src={manpic} alt="" />
        </div>
        
      </div>
    </>
  );
};

export default FixYourDay;
