import React from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import CardChart from '../CardChart/CardChart';

import { MyChartBar, MyChartRadar, MyChartMix } from '../Charts/Charts';

const ListCardsChart = ({ totals }) => {

  if (!totals) {
    return (
      <Row>
        <CardChart />
        <CardChart />
        <CardChart />
      </Row>
    );
  }
  const { Men, Women } = totals;
  const dataChartRadar = {
    labels: ['Men', 'Women'],
    datasets: [
      {
        data: [Men.value, Women.value],
        backgroundColor: ['#f40552', '#ffd31d'],
        hoverBackgroundColor: ['#f40552', '#ffd31d'],
      },
    ],
  };
  return (
    <Row>
      <CardChart title='Week' titleheader='Total'>
        <MyChartBar color='#400082' />
      </CardChart>
      <CardChart title='Gender' titleheader='Total'>
        <MyChartRadar color='#323edd' data={dataChartRadar} />
      </CardChart>
      <CardChart title='Year' titleheader='Total'>
        <MyChartMix color='#ff1e56' />
      </CardChart>
    </Row>
  );
};

const mapToProps = (state) => {
  return {
    totals: state.firestore.data.totals,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapToProps, null)(ListCardsChart);
