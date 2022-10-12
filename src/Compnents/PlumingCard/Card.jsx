import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./PlumingCard..css";
import plumbing from "../../asset/images/plumbing.svg";
import { useNavigate } from "react-router-dom";
const Card = () => {
  const navigate  = useNavigate()
  return (
    <>
      <div className="plumbingCard" onClick={()=>navigate("/services-details")}>
        <div>
          <h3 className="smallText">Plumbing</h3>
          <p className="p8 rating">rating</p>
          <h6 className="p8">
            <AiFillStar className="star" /> 4.5 out of 5{" "}
          </h6>
          <p className="p8"> <span className="blue"> ₹ 50 </span> / Hour</p>
          <div className="border-dashed"></div>
          <p className="p8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="CardimgBox">
          <img src={plumbing} alt="" />
          <button onClick={()=>navigate("/check-out")} className="btn6">Add</button>
        </div>
      </div>
    </>
  );
};

export default Card;
