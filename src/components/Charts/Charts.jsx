import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { chartExample1, chartExample3 } from '../../variables/charts';
import { MyCard, AreaChart } from './style';

const options = {
  maintainAspectRatio: false,
  responsive: false,
  legend: {
    position: 'left',
    labels: {
      boxWidth: 10,
      fontColor: 'black',
    },
  },
};

const DEFAULT_DATA_RADAR = {
  labels: ['#FF6384', '#36A2EB', '#FFCE56'],
  datasets: [
    {
      fontColor: '#00000',
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const datamix = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Dic'],
  datasets: [
    {
      label: 'Total',
      type: 'line',
      data: [51, 65, 40, 49, 60, 37, 40],
      fill: false,
      borderColor: '#B92454 ',
      backgroundColor: '#B92454  ',
      pointBorderColor: '#B92454  ',
      pointBackgroundColor: '#B92454',
      pointHoverBackgroundColor: '#B92454',
      pointHoverBorderColor: '#B92454',
    },
    {
      type: 'bar',
      label: 'Visitantes',
      data: [200, 185, 590, 621, 250, 400, 95],
      fill: true,
      borderWidth: 1,
      backgroundColor: '#ffa534',
      borderColor: '#ffa534',
      hoverBackgroundColor: '#71B37C',
      hoverBorderColor: '#71B37C',
    },
  ],
};

const optionsmix = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: true,
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
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: false,
        },
        labels: {
          show: true,
        },
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false,
        },
        labels: {
          show: true,
        },
      },
    ],
    xAxes: [
      {
        display: true,
        barPercentage: 1.0,
        gridLines: {
          drawBorder: true,
          color: 'rgba(255,255,248,0.1)',
          zeroLineColor: 'transparent',
        },
        ticks: {
          padding: 20,
          fontColor: 'black',
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
