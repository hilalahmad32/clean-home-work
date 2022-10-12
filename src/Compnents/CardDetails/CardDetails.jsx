import React from "react";
import "./CardDetails.css";
import { AiFillStar } from "react-icons/ai";

import plumbing from "../../asset/images/plumbing.svg";
import tick from "../../asset/images/tick.svg";
import croos from "../../asset/images/croos.svg";
import { useNavigate } from "react-router-dom";
const CardDetails = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="cardDetailsWrapper">
      <div className="container spaceing-inside ">
        
        <div className="d-flex justify-content-center  flex-wrap ">
          <div className="cardimg">
            <img src={plumbing} className="img-fluid" alt="" />
          </div>
          <div className="cardDetailsBox">
            <div className="d-flex justify-content-between w-100">
              <h3 className="heading2">Plumbing</h3>
              <button onClick={()=>navigate("/check-out")} className="btn6">Add</button>
            </div>

            <h6 className="p8">
              <AiFillStar className="star" /> 4.5 out of 5{" "}
            </h6>
            <p className="p8">
              {" "}
              <span className="blue"> Charges Rs.150</span>{" "}
            </p>
            <h6 className="p8">9 mins</h6>

            <p className="p8 cardText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum in urna, adipiscing non. Egestas ultrices ut Eu, sed
              massa lectus cras lorem massa massa enim
            </p>

            <h6 className="heading4">Included</h6>

            <div className="includedBox">
              <img src={tick} alt="" />
              <p className="p8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>

            <div className="includedBox">
              <img src={tick} alt="" />
              <p className="p8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>

            <div className="includedBox">
              <img src={tick} alt="" />
              <p className="p8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>

            <h6 className="heading4">Excluded</h6>

            <div className="includedBox">
              <img src={croos} className="crossIcon" alt="" />
              <p className="p8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>

            <div className="includedBox">
              <img src={croos} className="crossIcon" alt="" />
              <p className="p8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>

            <div className="includedBox">
              <img src={croos} className="crossIcon" alt="" />
              <p className="p8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
              
              
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CardDetails;
