import React from "react";
import "./EveryDay.css";
import group from "../../asset/images/group.svg";
import mobIcon from "../../asset/images/mobIcon.svg";
import profileIcon from "../../asset/images/profileIcon.svg";
import virus from "../../asset/images/virus.svg";
import light from "../../asset/images/light.svg";

const EveryDay = () => {
  return (
    <>
      <div className="everydayBox">
        <div className="container everdqaywrapper">
          <div >
            <div className="everdayTextBox">
              <h1 className="heading2">Everyday life made easier</h1>
              <p className="p4">
                When life gets busy, you don’t have to tackle it alone. Get time
                back for what you love without breaking the bank.
              </p>
            </div>

            <div className="everytext">
              <div className="icontext">
                <img src={mobIcon} alt="" />
                <p className="p5">
                  Hassle-Free booking of services through our application
                </p>
              </div>
              <div className="icontext">
                <img src={profileIcon} alt="" />
                <p className="p5">
                Trained and Experienced Professionals vetted by Kanchha
                </p>
              </div>
              <div className="icontext">
                <img src={virus} alt="" />
                <p className="p5">
                Vaccinated Professionals following all Hygiene and Covid Guidelines
                </p>
              </div>
              <div className="icontext">
                <img src={light} alt="" />
                <p className="p5">
                Guaranteed Quality with Instant Dispute Resolution
                </p>
              </div>
            </div>
          </div>
          <div className="img-box">
            <img src={group} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EveryDay;
