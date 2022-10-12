import React from "react";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import "./haeder.css";
import "../../styles/globalStyle.css";

import logo from "../../asset/images/logo homeclap.svg";

import { useNavigate } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";

function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  const navigate = useNavigate();
  return (
    <>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      <SignUpModal show={modalShow2} onHide={() => setModalShow2(false)} />
      <Navbar
        key={"xxl"}
        bg="white"

        expand={"xxl"}
        className=" header w-100"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <img src={logo} className="logo" alt="" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"xxl"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"xxl"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"xxl"}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"xxl"}`}>
                <img src={logo} className="logo" alt="" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 navLinks align-items-center">
                <Nav.Link
                  onClick={(e) => (e.preventDefault(), navigate("/"))}
                  className="links active "
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  onClick={(e) => (e.preventDefault(), navigate("/about-us"))}
                  className="links"
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  onClick={(e) => (e.preventDefault(), navigate("/services"))}
                  className="links"
                >
                  Services
                </Nav.Link>
                <Nav.Link
                  onClick={(e) => (e.preventDefault(), navigate("/careers"))}
                  className="links"
                >
                  Careers
                </Nav.Link>
                <Nav.Link
                  onClick={(e) => (e.preventDefault(), navigate("/blog"))}
                  className="links"
                >
                  Blog
                </Nav.Link>
                <Nav.Link
                  onClick={(e) => (e.preventDefault(), navigate("/Contact-us"))}
                  className="links"
                >
                  Contact us
                </Nav.Link>
              </Nav>
              <div className="mobile-btn-center">
                <Nav.Link
                  href="#action2 "
                  onClick={() => setModalShow2(true)}
                  className="links singin"
                >
                  {" "}
                  Sign In
                </Nav.Link>
                <div className="sign-up">
                  <button
                    className="btn1 mobilebtn  "
                    onClick={() => setModalShow(true)}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
