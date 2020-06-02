import React from 'react';
import { Row } from 'reactstrap';
import CardChart from '../CardChart/CardChart';

import { MyChartBar, MyChartRadar, MyChartMix } from '../Charts/Charts';

const ListCardsChart = () => {
  return (
    <Row>
      <CardChart title='Semana' titleheader='Total'>
        <MyChartBar color='#400082' />
      </CardChart>
      <CardChart title='Mes' titleheader='Total'>
        <MyChartRadar color='#323edd' />
      </CardChart>
      <CardChart title='Genero' titleheader='Total'>
        <MyChartMix color='#ff1e56' />
      </CardChart>
    </Row>
  );
};

export default ListCardsChart;
