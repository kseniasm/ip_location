import React from "react";
import {GOOGLE_API_KEY} from '../config/config';

const Map = ({ location, handleOnLoad }) => {
  return (
    <iframe
      width="90%"
      height="450"
      frameBorder="0"
      style={{ border: 0, marginTop: "2em" }}
      // src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}
      //           &q=${location.latitude},${location.longitude}`}   //hiding api key
      src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}
          &q=${location.latitude},${location.longitude}`}
      allowFullScreen
      title="Location"
      onLoad={() => handleOnLoad(true)}
    ></iframe>
  );
};

export default Map;
