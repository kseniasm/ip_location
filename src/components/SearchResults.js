import React, { useState } from "react";
import { Header } from "semantic-ui-react";
import Map from "./Map";

const SearchResults = ({ location }) => {
  const [ready, setReady] = useState(false);

  if (!location) return <div></div>;

  return (
    <div style={{ marginTop: "2em" }}>
      {ready && (
        <Header>{`LOCATION: ${location.city}, ${location.country}`}</Header>
      )}
      <Map location={location} handleOnLoad={setReady} />
    </div>
  );
};

export default SearchResults;
