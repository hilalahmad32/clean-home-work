import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./MyAccount.css";
import blueProfile from "../../asset/images/blueProfile.svg"
import booking from "../../asset/images/booking.svg"
import i from "../../asset/images/i.svg"
import terms from "../../asset/images/terms.svg"
import privacy from "../../asset/images/privacy.svg"
import help from "../../asset/images/help.svg"
import logout from "../../asset/images/logout.svg"
import { Link, useNavigate } from "react-router-dom";

const SiiderBar = () => {
  const navi = useNavigate()
  return (
    <>
      <div className="userProfile">
        <div className="avtar">
          <img
            src="https://avatars.githubusercontent.com/u/92790017?v=4"
            alt=""
          />{" "}
        </div>

        <div className="profilleText">
          <h3 className="heading5">Hey There!</h3>
          <p className="smallText2">+91 3456467888</p>
        </div>
      </div>
      <div className="acountOoption">
        <div className="d-flex justify-content-between align-items-center option1 " onClick={()=>{navi("/account")}}> 
          <div className="myaccount">
            
              <img
                src={blueProfile}
                alt=""
                  
              />{" "}
            <Link to='/account'>
            <h5  className="heading4" >My Account</h5>
            </Link>
          </div>
          <div>
            <IoIosArrowForward className="arrow" />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center option1">
        <div className="myaccount">
            
            <img
              src={booking}
              alt=""
                
            />{" "}
          <Link to="/booking">
          <h5 className="heading4">My Bookings</h5>
          </Link>
        </div>
          <div>
            <IoIosArrowForward className="arrow" />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center option1">
        <div className="myaccount">
            
            <img
              src={i}
              alt=""
                
            />{" "}
          <Link to={"/about-us"} >
          <h5 className="heading4">About Us</h5>
          </Link>
        </div>
          <div>
            <IoIosArrowForward className="arrow" />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center option1">
        <div className="myaccount">
            
            <img
              src={privacy}
              alt=""
                
            />{" "}
          <Link to="/privica-policy">
          <h5 className="heading4">Privacy policy </h5>
          </Link>
        </div>
          <div>
            <IoIosArrowForward className="arrow" />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center option1">
        <div className="myaccount">
            
            <img
              src={terms}
              alt=""
                
            />{" "}
          <Link to={"/terms-condition"}>
          <h5 className="heading4">Terms and conditions</h5>
          </Link>
        </div>
          <div>
            <IoIosArrowForward className="arrow" />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center option1">
        <div className="myaccount">
            
            <img
              src={help}
              alt=""
                
            />{" "}
          <Link to={"/help"}>
          <h5 className="heading4">Help</h5>
          </Link>
        </div>
          <div>
            <IoIosArrowForward className="arrow" />
          </div>
        </div>


        <div className="d-flex justify-content-center my-5 gap-3 align-items-center">
        <img
              src={logout}
              alt=""
                
            />
           <p className="p5 blue ">Logout</p>
        </div>
      </div>
    </>
  );
};

export default SiiderBar;
