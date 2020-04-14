import React from "react";
import "../App.css";
import CountUp from "react-countup";
import axios from "axios";
import NumberFormat from "react-number-format";

class TotalNum extends React.Component {
  state = {
    place: [],
    infected: "",
    deceased: [],
    infectedByRegion: [
      {
        region: [],
        infectedCount: []
      }
    ],
    currentTime: new Date().toLocaleString(),
    profit: 300044
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
      <div className="totalContainer">
        <div className="numbox">
          <p className="numText">Fallzahlen </p>

          <CountUp
            className="numText"
            start={10000}
            end={infected}
            separator=","
            decimal=","
          />
        </div>
        <div className="numbox">
          {" "}
          <p className="numText">Todes­fälle </p>
          <CountUp
            className="numText"
            start={1000}
            end={deceased}
            separator=","
            decimal=","
          />
        </div>
        <div className="numbox">
          {" "}
          <p className="numText">Datenstand</p>
          <span className="numText">{this.state.currentTime}</span>
        </div>
      </div>
    );
  }
}

export default TotalNum;
