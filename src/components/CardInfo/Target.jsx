import React from 'react';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';

const Target = ({
  title = 'Traffic',
  value = '350,897',
  porcentage = '3.48%',
  text = 'Since last week',
  typetext = 'text-success',
}) => (
  <Col lg='6' xl='3'>
    <Card className='card-stats mb-4 mb-xl-0'>
      <CardBody>
        <Row>
          <div className='col'>
            <CardTitle tag='h5' className='text-uppercase text-muted mb-0'>
              {title}
            </CardTitle>
            <span className='h2 font-weight-bold mb-0'>
              {value}
            </span>
          </div>
          <Col className='col-auto'>
            <div className='icon icon-shape bg-danger text-white rounded-circle shadow'>
              <i className='fas fa-chart-bar' />
            </div>
          </Col>
        </Row>
        <p className='mt-3 mb-0 text-muted text-sm'>
          <span className={`${typetext} mr-2`}>
            <i className='fa fa-arrow-up' />
            {porcentage}
          </span>
          <span className='text-nowrap'>{text}</span>
        </p>
      </CardBody>
    </Card>
  </Col>
);

export default Target;
