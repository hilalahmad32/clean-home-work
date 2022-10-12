import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import "../MyAccount/MyAccount.css";
// import "./BookingDetails.css";
import scervice1 from "../../asset/images/scervice1.svg";
import phone from "../../asset/images/phone.svg";
import email from "../../asset/images/email.svg";
const Helping = () => {
  return (
    <>
      <div className="accountDetaila">
        <h1 className="heading5 my-4 px-3 blue">We're here to help. </h1>
        <div className="nameEdit booking my-4">
          <button className="btn5">
            {" "}
            <img src={phone} alt="" /> Phone
          </button>
          <p className="heading6 delivertTExt mt-5">
          Call 022 4893 0234 to speak to a <br /> support representative now
                </p>
        </div>
        <div className="nameEdit booking my-4">
          <button className="btn5">
            {" "}
            <img src={email} alt="" /> Phone
          </button>
          <p className="heading6 delivertTExt mt-5">
          Send us an email to support@Phurti.in
                </p>
        </div>

        
      </div>
    </>
  );
};

export default Helping;
