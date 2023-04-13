import React from "react";
import { Bar } from "react-chartjs-2";

const Graph = ({ graph_data }) => {
  const data = {
    labels: [
      "January",
      "Fabruary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "",
        data: graph_data,
        backgroundColor: [
          
          "rgba(0, 169, 157, 0.2)",
        ],
        borderColor: [
          "rgba(0, 169, 157, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default Graph;
