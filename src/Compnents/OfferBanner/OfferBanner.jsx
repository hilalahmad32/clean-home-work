import React from "react";
import "./OfferBanner.css";
import ControlledCarousel from "./offerSlider";
const OfferBanner = () => {
  return (
    <>
      <div className="container  offerContainer" >
        <h3 className="heading5">Our Offers</h3>

        <div>
          <ControlledCarousel/>
        </div>
      </div>
    </>
  );
};

export default OfferBanner;
