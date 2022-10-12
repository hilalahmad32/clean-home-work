import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import offerBanner from "../../asset/images/offerBanner.svg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={offerBanner}

          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={offerBanner}
          
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={offerBanner}
          
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel