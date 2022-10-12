import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import "../MyAccount/MyAccount.css";
import "./BookingDetails.css";
import scervice1 from "../../asset/images/scervice1.svg";
import tick from "../../asset/images/tick.svg";
const BookingDetails = () => {
  return (
    <>
      <div className="accountDetaila">
        <h1 className="heading5 my-4 px-3">My Booking </h1>
        <div>
          <div className="nameEdit booking my-2">
            <div className="d-flex gap-4 align-items-center ">
              <div className="servicCircle">
                <img src={scervice1} alt="" />
              </div>
              <div>
                <h3 className="heading5 ">Drainage services</h3>

                <p className="heading6 delivertTExt">
                  Delivery Timing 1 May,2020
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-around my-4 mt-lg-5 mt-sm-3">
              <div className="d-flex align-itmes-center gap-3">
                <img  className="tick" src={tick} alt="" />
                <h3 className="heading5 blue  "> Completed </h3>
              </div>

              <button className="btn4">View Details</button>
            </div>
          </div>
          <div className="nameEdit booking my-2">
            <div className="d-flex gap-4 align-items-center ">
              <div className="servicCircle">
                <img src={scervice1} alt="" />
              </div>
              <div>
                <h3 className="heading5 ">Drainage services</h3>

                <p className="heading6 delivertTExt">
                  Delivery Timing 1 May,2020
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-around my-4 mt-lg-5 mt-sm-3">
              <div className="d-flex align-itmes-center gap-3">
                <img  className="tick" src={tick} alt="" />
                <h3 className="heading5 blue  "> Completed </h3>
              </div>

              <button className="btn4">View Details</button>
            </div>
          </div>
          <div className="nameEdit booking my-2">
            <div className="d-flex gap-4 align-items-center ">
              <div className="servicCircle">
                <img src={scervice1} alt="" />
              </div>
              <div>
                <h3 className="heading5 ">Drainage services</h3>

                <p className="heading6 delivertTExt">
                  Delivery Timing 1 May,2020
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-around my-4 mt-lg-5 mt-sm-3">
              <div className="d-flex align-itmes-center gap-3">
                <img  className="tick" src={tick} alt="" />
                <h3 className="heading5 blue  "> Completed </h3>
              </div>

              <button className="btn4">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDetails;
