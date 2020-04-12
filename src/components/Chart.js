import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["0-4", "5-14", "15-34", "35-59", "35-59", ">80"],
    datasets: [
      {
        label: "Männlich",
        data: [495, 1204, 13617, 25303, 12134, 4188],

        borderColor: ["rgba(109, 100, 115, 0.5)"],
        backgroundColor: ["rgba(109, 100, 115, 0.5)"],
        pointBackgroundColor: ["rgba(109, 100, 115, 0.2)"],
        pointBorderColor: ["rgba(109, 100, 115, 0.2)"]
      },
      {
        label: "Weiblich",
        data: [415, 1096, 14972, 26601, 10601, 6496],
        borderColor: ["rgb(255, 209, 207.05)"],
        backgroundColor: ["rgb(255, 209, 207.05)"],
        pointBackgroundColor: ["rgb(255, 209, 207.05))"],
        pointBorderColor: ["rgb(255, 209, 207.05))"]
      }
    ]
  };

  const options = {
    title: {
      display: true,
      text: "COVID-19-Fälle nach Altersgruppe und Geschlecht"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 30000,
            stepSize: 5000
          }
        }
      ]
    }
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
