import React from "react";
import Card from "./Card";

const PlumingCard = () => {
  return (
    <>
      <div className="servictext">
        <h3 className="heading5">Plumbing</h3>
      </div>

      <div className="container">
        <div className="cardrow">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default PlumingCard;
