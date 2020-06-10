import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import './Style.scss';

const Target = ({
  title,
  value,
  porcentage,
  text,
  typetext,
  children,
}) => (
  <Col lg='4' className='mb-3'>
    <Card className='card'>
      <Card.Body>
        <Row>
          <div className='col'>
            <Card.Title tag='h5' className='text-uppercase text-muted mb-0'>
              {title || <Skeleton /> }
            </Card.Title>
            <span className='h2 font-weight-bold mb-0'>
              {value || (value !== 0 ? <Skeleton /> : 0)}
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
      </Card.Body>
    </Card>
  </Col>
);

export default Target;
