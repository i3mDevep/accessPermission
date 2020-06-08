import React from 'react';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import Skeleton from 'react-loading-skeleton';

const Target = ({
  title,
  value,
  porcentage,
  text,
  typetext,
  children,
}) => (
  <Col lg='6' xl='4' className='mb-3'>
    <Card className='card-stats mb-4 mb-xl-0'>
      <CardBody>
        <Row>
          <div className='col'>
            <CardTitle tag='h5' className='text-uppercase text-muted mb-0'>
              {title || <Skeleton /> }
            </CardTitle>
            <span className='h2 font-weight-bold mb-0'>
              {value || <Skeleton />}
            </span>
          </div>
          <Col className='col-1'>
            <div className='icon icon-shape bg-danger text-white rounded-circle shadow'>
              <i className='fas fa-chart-bar' />
            </div>
          </Col>
          <Col className='col-3 text-right'>
            { children || <Skeleton circle={true} height={50} width={50} />}
          </Col>
        </Row>
        <p className='mt-3 mb-0 text-muted text-sm'>
          <span className={`${typetext || <Skeleton />} mr-2`}>
            <i className='fa fa-arrow-up' />
            {porcentage}
          </span>
          <span className='text-nowrap'>{text || <Skeleton />}</span>
        </p>
      </CardBody>
    </Card>
  </Col>
);

export default Target;
