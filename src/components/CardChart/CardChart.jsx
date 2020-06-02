import React from 'react';
//import { Card, CardContainer, Title } from './style';
//import './style.scss';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
} from 'reactstrap';

const CardChart = ({ titleheader, children, title }) => {
  return (

    <Col lg='4'>
      <Card className='card-chart'>
        <CardHeader>
          <h5 className='card-category'>{titleheader}</h5>
          <CardTitle tag='h3'>
            <i className='tim-icons icon-bell-55 text-info' />
            {' '}
            {' '}
            { title }
          </CardTitle>
        </CardHeader>
        <CardBody>
          <div className='chart-area'>
            {children}
          </div>
        </CardBody>
      </Card>
    </Col>

  );
};

export default CardChart;
