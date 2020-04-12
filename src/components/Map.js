import React from "react";
import Tippy from "@tippy.js/react";
import axios from "axios";
import "tippy.js/dist/tippy.css";

class Map extends React.Component {
  state = {
    place: [],
    infected: [],
    deceased: [],
    infectedByRegion: [
      {
        region: [],
        infectedCount: []
      }
    ]
  };

  componentDidMount() {
    axios
      .get(
        `https://api.apify.com/v2/key-value-stores/OHrZyNo9BzT6xKMRD/records/LATEST`
      )

      .then(response => {
        this.setState({
          places: response.data.infectedByRegion,
          infected: response.data.infected,
          deceased: response.data.deceased,
          infectedByRegion: response.data.infectedByRegion
        });
      });
  }
  render() {
    const { infected, deceased } = this.state;
    return (
      <div>
        {this.state.places ? (
          <h1>Name: {this.state.places[5].region} </h1>
        ) : (
          <h1> nothing to display </h1>
        )}
        <p>infected: {infected}</p>
        <p>deceased:{deceased}</p>
      </div>
    );
  }
}

export default Map;
