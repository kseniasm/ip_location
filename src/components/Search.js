import React from "react";
import { Header, Button } from "semantic-ui-react";

const Search = ({ handleOnClick, loading }) => {
  return (
    <div style={{ marginTop: "2em" }}>
      <Header style={{ marginBottom: "2em" }}>
        CLICK ON THE BUTTON TO SHOW IP LOCATION
      </Header>
      <Button
        color="green"
        size="big"
        onClick={() => handleOnClick()}
        loading={loading}
      >
        SHOW
      </Button>
    </div>
  );
};

export default Search;
