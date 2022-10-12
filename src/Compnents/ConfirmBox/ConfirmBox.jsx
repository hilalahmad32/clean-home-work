import React from "react";
import "./ConfirmBox.css";
import Confrim from "../../asset/images/Confrim.svg";
import { Link } from "react-router-dom";

const ConfirmBox = () => {
  return (
    <>
      <div className="confrim-out-Box">
        <div className="confrim-onner-Box">
          <div className="conffirmBox">
            <img src={Confrim} className="img-fluid" alt="" />
            <h4 className="heading3">Booking Confirmed</h4>
            <p className="p8">
              We Have Received Your Booking and Will Update your Service Slot
              Soon !!!
            </p>
          </div>
          <div className="btnBox">
            <button className="btn7" > <Link to="/"> Back To Home </Link></button>
            <br />
            <button className="btn2"><Link to="/booking-details"> Booking Details</Link></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmBox;
