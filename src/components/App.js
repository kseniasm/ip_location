import React, { Component } from "react";
import { Container, Segment, Header } from "semantic-ui-react";
import axios from "axios";

import NavBar from "./navBar/NavBar";
import Search from "./Search";
import Map from "./Map";
import SearchResults from "./SearchResults";

class App extends Component {
  state = {
    latitude: "",
    longitude: "",
    city: "",
    country: "",
    showResults: false,
    loading: false,
    error: false
  };

  findLocation = async () => {
    this.showResults(false);
    try {
      let response = await axios.get(
        `https://api.ipdata.co?api-key=${process.env.REACT_APP_IPDATA_KEY}`
      );

      let data = await response.json();

      this.setState({
        latitude: data.latitude,
        longitude: data.longitude,
        city: data.city,
        country: data.country_name
      });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false, error: true });
    }
  };

  showResults = value => {
    this.setState({ showResults: value, loading: !value, error: false });
  };

  render() {
    const {
      error,
      showResults,
      loading,
      city,
      country,
      latitude,
      longitude
    } = this.state;

    return (
      <Container textAlign="center" style={{ marginTop: "6em" }}>
        <Segment>
          <NavBar />
          {error && (
            <Header color="red" size="large">
              {" "}
              OOPS! SOMETHING WENT WRONG
            </Header>
          )}
          <Search handleOnClick={this.findLocation} loading={loading} />
          {showResults && <SearchResults city={city} country={country} />}

          <Map
            latitude={latitude}
            longitude={longitude}
            handleOnLoad={this.showResults}
          />
        </Segment>
      </Container>
    );
  }
}

export default App;
