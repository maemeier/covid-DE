import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import banner from "../asset/banner.png";

class TabData extends React.Component {
  render() {
    return (
      <div>
        <Tabs style={{ marginTop: 40 }}>
          <TabList>
            <Tab
              style={{
                color: "white",
                fontWeight: "bold",
                background: "#A49AA7"
              }}
            >
              Aktuelle Hinweise
            </Tab>
            <Tab
              style={{
                color: "#A49AA7",
                fontWeight: "bold"
              }}
            >
              Hotline
            </Tab>
          </TabList>

          <TabPanel>
            <ul
              style={{
                color: "#6D6473",
                fontWeight: 400,
                lineHeight: 1.9,
                textAlign: "left"
              }}
            >
              <li>Bleiben Sie nach Möglichkeit zuhause.</li>
              <li>
                Verzichten Sie auf Treffen mit Familie, Freunden und Bekannten.
              </li>
              <li>
                Halten Sie mindestens zwei Meter Abstand zu Ihren Mitmenschen.{" "}
              </li>
              <li>
                Waschen Sie Ihre Hände regelmäßig und gründlich mit Wasser und
                Seife, <br />
                mindestens 20 Sekunden lang.
              </li>
              <li>
                Vermeiden Sie es, sich mit den Händen ins Gesicht zu fassen.
              </li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul
              style={{
                color: "#6D6473",
                fontWeight: 400,
                lineHeight: 1.9,
                textAlign: "left"
              }}
            >
              <li>Der Patientenservice: 116-117</li>
              <li>WhatsApp-Infos zum Coronavirus : +49 151 62875183</li>
              <li>
                Unabhängige Patientenberatung Deutschland - 0800 011 77 22
              </li>
              <li>
                Bundesministerium für Gesundheit (Bürgertelefon) - 030 346 465
                100
              </li>
              <li>www.infektionsschutz.de</li>
            </ul>
            <p
              style={{
                color: "#6D6473",
                fontWeight: 400,

                textAlign: "left"
              }}
            >
              <strong>Quelle: </strong> www.bundesgesundheitsministerium.de
            </p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabData;
