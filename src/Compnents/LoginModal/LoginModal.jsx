import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./LoginModal.css";

import vector from "../../asset/images/vector.png";
import logo from "../../asset/images/logo homeclap.svg";
import LoginFrom from "./From";
import { Col, Row } from "react-bootstrap";
function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="loginModalContainer">
          <Row className="m-0 p-0">
            <Col xl={6} lg={6} md={6}>
              <div className="fristSide">
                <div className="logoContainer">
                  {/* <h1 className="heading5">Looks like you're new here!</h1>
              <p className="p1">
                Sign up with your mobile number to get started
              </p>
               */}
                  <img src={logo} alt="" />
                </div>

                <div>
                  <img src={vector} className="vector" alt="" />
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6}>
              <div>
                <LoginFrom />
              </div>
            </Col>
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
