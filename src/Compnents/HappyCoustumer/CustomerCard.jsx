import React from "react";
import "./HppyCoustomer.css";
import quma from "../../asset/images/quma.svg";
const CustomerCard = () => {
  return (
    <>
      <div className="happcustomewrCard">
        <img src={quma} alt="" />

        <p className="p5">
          “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
          suspendisse ultrices tortor luctus tristique tristique vestibulum,
          facilisi.”
        </p>
        <p className="P5 text-end">- Lorem ipsum</p>
      </div>
    </>
  );
};

export default CustomerCard;
