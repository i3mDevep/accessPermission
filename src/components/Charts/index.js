import React from "react";
import { chartExample1, chartExample3 } from "../../variables/charts";
import { Line, Bar } from "react-chartjs-2";
import "./style.css";

export const MyChartBar = () => (
  <div className="chart-area">
    <Bar data={chartExample3.data} options={chartExample3.options} />
  </div>
);

export const MyChartLine = () => (
  <div className="chart-area">
    <Line data={chartExample1["data1"]} options={chartExample1.options} />
  </div>
);
