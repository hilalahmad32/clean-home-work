import React from "react";
import "./CheckOutDetails.css";
import services from "../../asset/images/scervice1.svg";
import plus from "../../asset/images/plus.svg";
import nullICon from "../../asset/images/null.svg";

import plumbing from "../../asset/images/plumbing.svg";
import circle from "../../asset/images/circle.svg";
import { Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const CheckOutDetails = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="bg-change">
        <div className="container p-md-5 p-2 ">
          <Row className="m-0 p-0 ">
            <Col xl={6} lg={6} md={12}  >
              <div className="">
                <h3 className="heading2 mb-4">Checkout</h3>

                <div className="serviceBox">
                  <div className="d-flex align-items-center gap-4 srvImg">
                    <img src={services} alt="" />
                    <div>
                      <h5 className="heading4">Drainage services</h5>
                      <p className="p8">plumbing</p>
                    </div>
                  </div>
                  <h6 className="heading4">Rs.100</h6>
                </div>
                <div className="serviceBox">
                  <div className="d-flex align-items-center gap-4 srvImg">
                    <img src={nullICon} alt="" />
                    <div>
                      <h5 className="heading4">Drainage services</h5>
                      <p className="p8">plumbing</p>
                    </div>
                  </div>
                  <h6 className="heading4">Rs.100</h6>
                </div>

                <h5 className="heading4 my-4">Your Note</h5>
                <div className="instruction">
                  {/* <input
            type="text"

            placeholder="Write Instructions for your Service, if any."

            name=""
            id=""
          /> */}
                  <textarea
                    name=" "
                    placeholder="Write Instructions for your Service, if any."
                    id=""
                    
                  ></textarea>
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6} md={12}>
              <div>
                <h5 className="heading4 my-4">Add Images</h5>
                <div className="instruction">
                  <label htmlFor="uploadimg" className="uploadimg p1 ">
                    {" "}
                    <span className="marginleft">
                      {" "}
                      <img src={plus} alt="" />{" "}
                    </span>{" "}
                    Add images
                    <input
                      type="file"
                      hidden
                      id="uploadimg"
                      placeholder="Write Instructions for your Service, if any."
                      name=""
                    />
                  </label>
                </div>
                <div className="gap-4 d-flex my-4">
                  <img src={plumbing} alt="" />
                  <img src={plumbing} alt="" />
                </div>

                <h6 className="heading4 my-4">
                  Please select your preferable slot
                </h6>
                <div className="slot">
                  <Form.Check type="radio" aria-label="radio 1" />

                  <h4 className="p1 ">8AM - 12 AM</h4>
                </div>
                <div className="slot">
                  <Form.Check type="radio" aria-label="radio 2" />

                  <h4 className="p1 ">8AM - 12 AM</h4>
                </div>
                <div className="slot">
                  <Form.Check type="radio" aria-label="radio 3" />

                  <h4 className="p1 ">8AM - 12 AM</h4>
                </div>
                <button onClick={()=>navigate("/booking-confirmed")} className="btn2">Confrim Booking</button>
              
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default CheckOutDetails;
