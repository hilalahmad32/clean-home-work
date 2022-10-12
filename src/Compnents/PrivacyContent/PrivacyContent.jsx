import React from "react";

const PrivacyContent = ({ tittle, content }) => {
  return (
    <>
      <div className="container mt-4">
        <h1 className="heading2 ">{tittle}</h1>
        <p className="p6 ">{content}</p>
      </div>
    </>
  );
};

export default PrivacyContent;
