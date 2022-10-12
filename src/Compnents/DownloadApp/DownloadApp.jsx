import React from "react";
import "./DownloadAp.css";
import google from "../../asset/images/google.svg";
import appstore from "../../asset/images/appstore.png";
import mobView from "../../asset/images/mobView.svg";

const DownloadApp = () => {
  return (
    <>
      <div className="downloadapp">
        <div className="container downloadappWrapper ">
          <div className="downloadText">
            <h3 className="heading6">
              One-Stop Solution To your Day To Day problems Download the HOME
              CLAP mobile app
            </h3>
            <div className="googlwbtn">
              <img src={appstore}  className="appstore" alt="" />
              <img src={google} alt="" className="googlestore" />
            </div>
          </div>
          
            <img src={mobView} className="mobView img-fluid" alt="" />
          
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
