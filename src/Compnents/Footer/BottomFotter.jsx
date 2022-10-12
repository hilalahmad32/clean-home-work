import React from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./footer.css"
const BottomFotter = ({color}) => {
    
  const navgate = useNavigate()
  return (

    <>
      <div className={`bottomFooterColor ${color}`} >
        <div className="bootomFooter">
          <Container>
            <div className="copyRight">
              <p>
                {" "}
                &copy; 2020 <span id="blueText">
                  {" "}
                  Home Clap LIMITED.{" "}
                </span>{" "}
                All rights reserved
              </p>
              <div>
                <Link onClick={()=>navgate ("/privica-policy")} to="/privica-policy">Privacy Policy</Link>
                <Link to="/terms-condition">Terms & Conditions</Link>
                
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default BottomFotter;
