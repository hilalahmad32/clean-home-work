import React from "react";
import { Col, Row } from "react-bootstrap";
import services from "../../asset/images/scervice1.svg";

import "./Details.css";
const Details = () => {
  return (
    <>
      <div className="container">
        <Row className="m-0 py-lg-5 py-sm-0 ">
          <Col xl={6} lg={6} md={12}>
            <div>
              <h3 className="heading5 my-3">Booking Deteils</h3>

              <div className="detailsBox ">
                <table>
                  <tbody>
                    <tr>
                      <td>Booking </td>
                      <td>- </td>
                      <td> XXXXXXXXXXX</td>
                    </tr>
                    <tr>
                      <td>Booking </td>
                      <td>- </td>
                      <td> XXXXXXXXXXX</td>
                    </tr>
                    <tr>
                      <td>Booking </td>
                      <td>- </td>
                      <td> XXXXXXXXXXX</td>
                    </tr>
                    <tr>
                      <td>Booking </td>
                      <td>- </td>
                      <td> XXXXXXXXXXX</td>
                    </tr>
                  </tbody>
                </table>
                <h3 className="heading5 mt-5">Service</h3>

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
                    <img src={services} alt="" />
                    <div>
                      <h5 className="heading4">Drainage services</h5>
                      <p className="p8">plumbing</p>
                    </div>
                  </div>
                  <h6 className="heading4">Rs.100</h6>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6} md={12}>
            <div className="itme-total"> 
              <p className="p1">Item Total </p>
              <p className="p1">₹ 400</p>
            </div>
            <div className="itme-total"> 
              <p className="p1">Item Total </p>
              <p className="p1">₹ 400</p>
            </div>
            <hr />
            <div className="itme-total"> 
              <p className="p1">Item Total </p>
              <p className="p1 blue">₹ 400</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Details;
