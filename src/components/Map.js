import React from "react";

const Map = ({ latitude, longitude, handleOnLoad }) => {
  if (!latitude || !longitude) return <div></div>;

  return (
    <iframe
      width="90%"
      height="450"
      frameBorder="0"
      style={{ border: 0, marginTop: "2em" }}
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}
                &q=${latitude},${longitude}`}
      allowFullScreen
      title="Location"
      onLoad={() => handleOnLoad(true)}
    ></iframe>
  );
};

export default Map;
