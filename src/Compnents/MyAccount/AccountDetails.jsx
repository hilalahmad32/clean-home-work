import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import "./MyAccount.css";
const AccountDetails = () => {
  return (
    <>
      <div className="accountDetaila">
        <h1 className="heading5">Personal Information</h1>
        <div>
          <div className="nameEdit my-5">
            <div className="d-flex justify-content-between align-items-center ">
            <h3 className="heading5 blue">Name</h3>
            <MdModeEditOutline className="edit"/>
            </div>
            <h4 className="heading4 mt-2">User Name</h4>
          </div>
          <div className="nameEdit my-5">
            <div className="d-flex justify-content-between align-items-center ">
            <h3 className="heading5 blue">Email</h3>
            <MdModeEditOutline className="edit"/>
            </div>
            <h4 className="heading4 mt-2">abc@gmail.com</h4>
          </div>
          <div className="nameEdit my-5">
            <div className="d-flex justify-content-between align-items-center ">
            <h3 className="heading5 blue">Number</h3>
            <MdModeEditOutline className="edit"/>
            </div>
            <h4 className="heading4 mt-2">+91 *********</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
