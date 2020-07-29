import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { chartExample1, chartExample3 } from '../../variables/charts';
import { MyCard, AreaChart } from './style';

const options = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    position: 'left',
    labels: {
      boxWidth: 10,
      fontColor: 'white',
    },
  },
};

const DEFAULT_DATA_RADAR = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#f40552', '#ffd31d', '#00005c'],
      hoverBackgroundColor: ['#f40552', '#ffd31d', '#00005c'],
    },
  ],
};

const datamix = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct','Dic'],
  datasets: [
    {
      label: 'Sales',
      type: 'line',
      data: [51, 65, 40, 49, 60, 37, 40],
      fill: false,
      borderColor: '#EC932F',
      backgroundColor: '#EC932F',
      pointBorderColor: '#EC932F',
      pointBackgroundColor: '#EC932F',
      pointHoverBackgroundColor: '#32e0c4',
      pointHoverBorderColor: '#32e0c4',
    },
    {
      type: 'bar',
      label: 'Visitor',
      data: [200, 185, 590, 621, 250, 400, 95],
      fill: true,
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderColor: '#fff',
      borderWidth: 2,
      hoverBackgroundColor: '#f4f4f4',
      hoverBorderColor: '#f4f4f4',
    },
  ],
};

const optionsmix = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    backgroundColor: '#fff',
    titleFontColor: '#333',
    bodyFontColor: '#18b0b0',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest',
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(255,255,248,0.1)',
          zeroLineColor: 'transparent',
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          padding: 20,
          fontColor: '#fff',
        },
      },
    ],
    xAxes: [
      {
        barPercentage: 1.0,
        gridLines: {
          drawBorder: false,
          color: 'rgba(255,255,248,0.1)',
          zeroLineColor: 'transparent',
        },
        ticks: {
          padding: 20,
          fontColor: '#fff',
        },
      },
    ],
  },
};

export const MyChartLine = ({ color = 'white' }) => (
  <MyCard color={color}>
    <AreaChart className='chart-area'>
      <Line data={chartExample1['data1']} options={chartExample1.options} />
    </AreaChart>
  </MyCard>
);

export const MyChartBar = ({ color = 'white' }) => (
  <MyCard color={color}>
    <AreaChart className='chart-area'>
      <Bar data={chartExample3.data} options={chartExample3.options} />
    </AreaChart>
  </MyCard>
);

export const MyChartRadar = ({ color = 'white', data = DEFAULT_DATA_RADAR }) => (
  <MyCard color={color}>
    <AreaChart className='chart-area w-75 h-75'>
      <Pie data={data} options={options} />
    </AreaChart>
  </MyCard>
);

export const MyChartMix = ({ color = 'white' }) => (
  <MyCard color={color}>
    <AreaChart className='chart-area'>
      <Bar data={datamix} options={optionsmix} />
      {' '}
    </AreaChart>
  </MyCard>
);
