import React from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import CardChart from '../CardChart/CardChart';

import { MyChartBar, MyChartRadar, MyChartMix } from '../Charts/Charts';

const ListCardsChart = ({ total }) => {

  if (!total) {
    return (
      <Row>
        <CardChart />
        <CardChart />
        <CardChart />
      </Row>
    );
  }
  const { totalMen, totalWomen } = total;
  const dataChartRadar = {
    labels: ['Men', 'Women'],
    datasets: [
      {
        data: [totalMen.value, totalWomen.value],
        backgroundColor: ['#f40552', '#ffd31d'],
        hoverBackgroundColor: ['#f40552', '#ffd31d'],
      },
    ],
  };
  return (
    <Row>
      <CardChart title='Semana' titleheader='Total'>
        <MyChartBar color='#400082' />
      </CardChart>
      <CardChart title='Mes' titleheader='Total'>
        <MyChartRadar color='#323edd' data={dataChartRadar} />
      </CardChart>
      <CardChart title='Genero' titleheader='Total'>
        <MyChartMix color='#ff1e56' />
      </CardChart>
    </Row>
  );
};

const mapToProps = (state) => {
  return {
    total: state.firestore.data.total,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapToProps, null)(ListCardsChart);
