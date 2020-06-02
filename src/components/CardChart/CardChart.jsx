import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
} from 'reactstrap';

const CardChart = ({ titleheader, children, title }) => {
  return (

    <Col lg='4' className='mb-5 mt-5'>
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
