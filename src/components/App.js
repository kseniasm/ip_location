import React, { Component } from "react";
import { Container, Segment, Header } from "semantic-ui-react";
import axios from "axios";

import NavBar from "./navBar/NavBar";
import Search from "./Search";

import SearchResults from "./SearchResults";

class App extends Component {
  state = {
    location: "",
    showResults: false,
    loading: false,
    error: false
  };

  findLocation = async () => {
    this.setState({ showResults: false, loading: true, error: false });
    try {
      let response = await axios.get(
        `https://api.ipdata.co?api-key=${process.env.REACT_APP_IPDATA_KEY}`
      );

      let data = response.data;

      this.setState({
        location: {
          latitude: data.latitude,
          longitude: data.longitude,
          city: data.city,
          country: data.country_name
        },
        showResults: true,
        loading: false
      });
    } catch (error) {
      console.log(error.response);
      this.setState({ showResults: false, loading: false, error: true });
    }
  };

  render() {
    const { error, showResults, loading, location } = this.state;

    return (
      <Container textAlign="center" style={{ marginTop: "6em" }}>
        <Segment>
          <NavBar />
          {error && (
            <Header color="red" size="large">
              OOPS! SOMETHING WENT WRONG
            </Header>
          )}
          <Search handleOnClick={this.findLocation} loading={loading} />
          {showResults && <SearchResults location={location} />}
        </Segment>
      </Container>
    );
  }
}

export default App;
