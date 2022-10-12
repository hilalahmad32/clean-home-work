import React from "react";
import "./Ourservices.css";
import ServicesCard from "./ServicesCard";
import servicesMan1 from "../../asset/images/servicesMan1.svg";
import painter from "../../asset/images/painter.png";
import steel from "../../asset/images/steel.png";

const Ourservices = () => {
  return (
    <>
      <div className="servictext">
        <h3 className="heading5">Our services</h3>
        <p className="heading5">daily services just got easy!</p>
      </div>

      <div className="container cardrow">
        
        <ServicesCard
          tittle="plumber"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et amet ."
          manimgstyle="manimgstyle1"
          img={servicesMan1}
          circrclrstyle="circrclrstyle"
          bgColor="yellow"
        />
        <ServicesCard
          tittle="Painters"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et amet ."
          img={painter }
          circrclrstyle="circrclrstyle2"
          bgColor="green"
          manimgstyle="manimgstyle2"

        />

        <ServicesCard  
        
        tittle="Steel Fabricators
        "
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et amet ."
          img={steel}
          circrclrstyle="circrclrstyle"
          bgColor="orange"
          manimgstyle="manimgstyle3"
          
        />
        <ServicesCard  
        
        tittle="Carpenters
        "
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et amet ."
          img={steel}
          circrclrstyle="circrclrstyle"
          bgColor="orange"
          manimgstyle="manimgstyle3"
          
        />
        <ServicesCard  
        
        tittle="Steel Fabricators
        "
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et amet ."
          img={steel}
          circrclrstyle="circrclrstyle"
          bgColor="orange"
          manimgstyle="manimgstyle3"
          
        />
        <ServicesCard  
        
        tittle="Steel Fabricators
        "
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et amet ."
          img={steel}
          circrclrstyle="circrclrstyle"
          bgColor="orange"
          manimgstyle="manimgstyle3"
          
        />
      </div>

    
    </>
  );
};

export default Ourservices;
