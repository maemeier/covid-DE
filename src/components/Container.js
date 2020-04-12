import React from "react";
import Number from "./Number";
import LineChart from "./Chart";
import Tab from "./Tab";
const Container = () => {
  return (
    <div className="content">
      <div className="contentBoxOne">
        <p style={{ color: "#6D6473", fontWeight: 600 }}>
          {" "}
          <div className="minCase"></div>Über 5,000 Fälle
        </p>
        <p style={{ color: "#6D6473", fontWeight: 600 }}>
          <div className="maxCase"></div>Über 20,000 Fälle
        </p>
        <Number />
        <p style={{ color: "#6D6473", fontWeight: 500 }}>
          <strong> Quelle: </strong>Robert Koch Institut
        </p>
      </div>
      <div>
        <div className="chart">
          <LineChart />
          <Tab />
        </div>
      </div>
    </div>
  );
};
export default Container;
