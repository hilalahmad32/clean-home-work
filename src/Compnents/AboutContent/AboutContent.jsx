import React from "react";
import "./AboutContent.css";
import aboutpux from "../../asset/images/about.jpg";

const AboutContent = () => {
  return (
    <div className="container aboutBox">
      <div className="aboutcontentBox">
        <h3 className="heading2">Welcome</h3>

        <p className="p6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          in urna, adipiscing non. Egestas ultrices ut neque nibh sed. Ut
          aliquam aenean posuere posuere. Eu, sed massa lectus cras lorem massa
          massa enim egestas. Nisi, justo, facilisis semper nibh. Elementum
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          in urna, adipiscing non. Egestas ultrices ut neque nibh sed. Ut
          aliquam aenean posuere posuere. Eu, sed massa lectus cras lorem massa
          massa enim egestas. Nisi, justo, facilisis semper nibh. Elementum
          
          
        </p>
      </div>
      <div>
        <img src={aboutpux}  className="img-fluid" alt="" />

      </div>
    </div>
  );
};

export default AboutContent;
