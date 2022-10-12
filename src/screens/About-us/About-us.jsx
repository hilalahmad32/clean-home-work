import React from "react";
import Footer from "../../Compnents/Footer/Footer";
import Header from "../../Compnents/Header/Header";
import Banner from "../../asset/images/AboutBanner3.svg";
import AboutBanner from "../../Compnents/AboutBanner/AboutBanner";
import AboutContent from "../../Compnents/AboutContent/AboutContent";

const AboutUs = () => {
  return (
    <>
      <Header />
      <AboutBanner
        img={Banner}
        titile="About Us"
        link="About Us "
        linkPath="/about-us"
      />
      <AboutContent />
      <Footer />
    </>
  );
};

export default AboutUs;
