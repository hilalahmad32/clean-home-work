import React from "react";
import "./footer.css";
import mapImage from "../../asset/images/mapImage.svg";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../asset/images/logo homeclap.svg";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import BottomFotter from "./BottomFotter";
const Footer = () => {
  return (
    <>
      <div className="footer">
        {/* <img src={mapImage} className="mapImage" alt="" /> */}

        <Container>
          <div className="footerlink">
            <Row className="p-0 m-0" >
              <Col xxl={3} xl={3}  lg={4 } md={4 }  sm={4 } xs={6}  >
            <div className="footerRow1">
              <img src={logo}  className="footerlogo" alt="" />
              <p>Affordable Price | </p>
              <p> Creative & User Friendly </p> <p> Applications | Best </p>{" "}
              <p> Quality | 24/7 Customer </p>
              <p>Support</p>
            </div>
            </Col>

            {/* <div> */}
            <Col xxl={2} xl={2} lg={3} md={3} sm={3}xs={6} >
            <ul>

              <li className="footerHeading">Explore</li>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
            </Col>
            <Col xxl={2} xl={2}  lg={3} md={3} sm={3} xs={6}>

            <ul  >
              <li className="footerHeading">Resources</li>
              <li>Our Services</li>
              <li>Our Team</li>
              <li>Testimonials</li>
              <li>Projects</li>
              <li>Trainings</li>
            </ul>
            </Col>
            <Col xxl={3} xl={3} lg={4} md={4} sm={4} className="lg-mt-3" xs={6}>

            <ul className="customspacing">
              
              <li className="footerHeading">Address</li>
              <li>Visakhapatnam, Hyderabad</li>
              <li>+91 8522943736</li>
              <li>info.retric@gmail.com</li>
              <li>+91 7989902424</li>
            </ul>
            </Col>

              <Col xxl={2 } xl={2} lg={4} md={4} sm={4} xs={6}  className="lg-mt-3" >
            {/* </div> */}
            <div className="footerLastLink customspacing ">
              <p>Let's talk about your project</p>
              <button className="btn2 mt-1">Make a Schedule</button>
              <div className="icons">
                {" "}
                <span>
                  <AiOutlineInstagram />
                </span>{" "}
                <span>
                  <FaLinkedinIn />
                </span>
                <span>
                  <FaFacebookF />
                </span>{" "}
                <span>
                  <AiOutlineTwitter />
                </span>{" "}
              </div>
            </div>
            </Col>

            </Row>
          </div>
        </Container>
    <BottomFotter color=""/>
      </div>
    </>
  );
};

export default Footer;
