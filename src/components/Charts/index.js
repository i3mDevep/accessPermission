import React from "react";
import { chartExample1, chartExample3 } from "../../variables/charts";
import { Line, Bar, Pie } from "react-chartjs-2";
import { MyCard, AreaChart } from "./style";

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#f40552", "#ffd31d", "#00005c"],
      hoverBackgroundColor: ["#f40552", "#ffd31d", "#00005c"],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    position: "left",
    labels: {
      boxWidth: 10,
      fontColor: "white",
    },
  },
};

const datamix = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales",
      type: "line",
      data: [51, 65, 40, 49, 60, 37, 40],
      fill: false,
      borderColor: "#EC932F",
      backgroundColor: "#EC932F",
      pointBorderColor: "#EC932F",
      pointBackgroundColor: "#EC932F",
      pointHoverBackgroundColor: "#EC932F",
      pointHoverBorderColor: "#EC932F",
    },
    {
      type: "bar",
      label: "Visitor",
      data: [200, 185, 590, 621, 250, 400, 95],
      fill: false,
      backgroundColor: "#fff",
      borderColor: "#71B37C",
      hoverBackgroundColor: "#71B37C",
      hoverBorderColor: "#71B37C",
    },
  ],
};

const optionsmix = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    backgroundColor: "#fff",
    titleFontColor: "#333",
    bodyFontColor: "#18b0b0",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(255,255,248,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#fff",
        },
      },
    ],
    xAxes: [
      {
        barPercentage: 1.0,
        gridLines: {
          drawBorder: false,
          color: "rgba(255,255,248,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#fff",
        },
      },
    ],
  },
};

export const MyChartLine = ({ color = "white" }) => (
  <MyCard color={color}>
    <AreaChart className="chart-area">
      <Line data={chartExample1["data1"]} options={chartExample1.options} />
    </AreaChart>
  </MyCard>
);

export const MyChartBar = ({ color = "white" }) => (
  <MyCard color={color}>
    <AreaChart className="chart-area">
      <Bar data={chartExample3.data} options={chartExample3.options} />
    </AreaChart>
  </MyCard>
);

export const MyChartRadar = ({ color = "white" }) => (
  <MyCard color={color}>
    <AreaChart className="chart-area w-75 h-75">
      <Pie data={data} options={options} />
    </AreaChart>
  </MyCard>
);

export const MyChartMix = ({ color = "white" }) => (
  <MyCard color={color}>
    <AreaChart className="chart-area">
      <Bar data={datamix} options={optionsmix}/>{" "}
    </AreaChart>
  </MyCard>
);
