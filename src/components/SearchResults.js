import React from "react";
import { Header } from "semantic-ui-react";

const SearchResults = ({ city, country }) => {
  if (!city && !country) return <div></div>;

  return <Header>{`LOCATION: ${city}, ${country}`}</Header>;
};

export default SearchResults;
