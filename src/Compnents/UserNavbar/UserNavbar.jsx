import React, { useState } from "react";
import "./UserNavbar.css";
import logo from "../../asset/images/logo homeclap.svg";
import HeaderDropDown from "./HeaderDropDown";
import bell from "../../asset/images/bell.svg";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

import blueProfile from "../../asset/images/blueProfile.svg"
import booking from "../../asset/images/booking.svg"
import i from "../../asset/images/i.svg"
import terms from "../../asset/images/terms.svg"
import privacy from "../../asset/images/privacy.svg"
import help from "../../asset/images/help.svg"
import logout from "../../asset/images/logout.svg"
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
const UserNavbar = () => {
    const [toggle, settoggle] = useState(false)
    const meneShow = ()=>{
        settoggle(!toggle)

    }
    
  return (
    <>
{/* ///Side Bar */}

      <div className="sidedrawer" style={toggle? {left:"0px"}:{left:"-100%"}}>
        <div className="px-3 pt-3 d-flex justify-content-between align-items-center ">
          <img src={logo} className="logo" alt="" />
          <ImCross onClick={meneShow}/>
        </div>
        <div className="acountOoption">
          <div className="d-flex justify-content-between align-items-center ">
            <div className="myaccount">
              <img src={blueProfile} alt="" /> <Link to='/account'><h5 className="heading4"> My Account </h5> </Link>
            </div>
            <div>
              <IoIosArrowForward className="arrow" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center option1">
            <div className="myaccount">
              <img src={booking} alt="" /> <Link to="/booking"> <h5 className="heading4">My Bookings</h5></Link>
            </div>
            <div>
              <IoIosArrowForward className="arrow" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center option1">
            <div className="myaccount">
              <img src={i} alt="" /> <Link to={"/about-us"} >  <h5 className="heading4">About Us</h5></Link>
            </div>
            <div>
              <IoIosArrowForward className="arrow" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center option1">
            <div className="myaccount">
              <img src={privacy} alt="" /> <Link to="/privica-policy"> <h5 className="heading4">Privacy policy </h5></Link>
            </div>
            <div>
              <IoIosArrowForward className="arrow" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center option1">
            <div className="myaccount">
              <img src={terms} alt="" /> <Link to={"/terms-condition"}> <h5 className="heading4">Terms and conditions</h5></Link>
            </div>
            <div>
              <IoIosArrowForward className="arrow" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center option1">
            <div className="myaccount">
              <img src={help} alt="" /> <Link to={"/help"}> <h5 className="heading4">Help</h5></Link>
            </div>
            <div>
              <IoIosArrowForward className="arrow" />
            </div>
          </div>

          <div className="d-flex justify-content-center my-5 gap-3 align-items-center">
            <img src={logout} alt="" />
            <p className="p5 blue ">Logout</p>
          </div>
        </div>
      </div>

      <div className="userNavbar">
        <div>
          <img src={logo} className="logo" alt="" />
        </div>
        <div className="d-flex gap-lg-4 gap-sm-2 gap-0 gap-md-2 align-items-center">
          <div>
            <img src={bell} className="bell" alt="" />
          </div>
          <HeaderDropDown />
          <AiOutlineMenu className="menu " onClick={meneShow} />
        </div>
      </div>
    </>
  );
};

export default UserNavbar;
