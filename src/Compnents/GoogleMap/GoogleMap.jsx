import React from "react";
import "./GoogleMap.css";
import { BsSearch } from "react-icons/bs";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Looding from "../Looding/Loooding";
const LocationGoogleMap = () => {
  const center = { lat: 48.8584, lng: 2.2945 };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS,
  });
  if (!isLoaded) {
    return <Looding />;
  }
  return (
    <>
      <div className="goolemap">
        <GoogleMap
          center={center}
          zoom={2}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
      <div className="Loactionwrapper">
        <div className="searchBox">
          <BsSearch className="search" />{" "}
          <input
            type="text"
            placeholder="1535 McKercher Drive, Saskatoon, SK S7H"
          />
          <button className="btn1" >comfirm location</button>
        </div>
      </div>
    </>
  );
};

export default LocationGoogleMap;
