import React from "react";
import "../App.css";
import TotalNum from "./TotalNum";
import banner from "../asset/banner.png";

const Header = () => {
  return (
    <div className="header">
      <div className="headerBox">
        <h1 className="headerText">COVID-19 DEUTSCHLAND</h1>
        <p className="headerPara" style={{ fontWeight: 500 }}>
          Bleib zu Hause! Es gibt in Deutschland nur 29,000 Beatmungsgeräte,
          nicht dass ihr eins davon benötigt
        </p>
        <img className="headerImg" src={banner} alt="banner" />
      </div>
      <TotalNum />
    </div>
  );
};

export default Header;
