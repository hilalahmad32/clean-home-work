import React from "react";
import { Spinner } from "react-bootstrap";
import "./Looding.css";

const Looding = () => {
  return (
    <>
      <div className="loaderContainer">
        <Spinner  className="loader" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </>
  );
};

export default Looding;
