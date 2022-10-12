import React from "react";
import "./Ourservices.css";
import circle1 from "../../asset/images/circle1.svg"
import { Link, useNavigate } from "react-router-dom";
const ServicesCard = ({tittle ,desc , img , circrclrstyle , bgColor , manimgstyle}) => {
const navigate = useNavigate()
  return (
    <>
    
      <div onClick={()=>navigate("/plumbing")} className={`servicescard ${bgColor}`}>
        <img src={circle1} className={`${circrclrstyle} hideCircle`} alt="" />
        <div>
          <h1 className="heading6">{tittle } </h1>
          <p  className="p2">
{desc}
          </p>
        </div>
        <div>
          <img src={img} alt="" className={`${manimgstyle} `} />
        </div>
      </div>
      
    </>
  );
};

export default ServicesCard;
