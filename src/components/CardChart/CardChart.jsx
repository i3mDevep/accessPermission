import React from 'react';
import Skeleton from 'react-loading-skeleton';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
} from 'reactstrap';

const CardChart = ({ titleheader, children, title }) => {
  return (

    <Col lg='4' className='mb-5 mt-2'>
      <Card className='card-chart'>
        <CardHeader>
          <h5 className='card-category'>{titleheader || <Skeleton />}</h5>
          <CardTitle tag='h3'>
            <i className='tim-icons icon-bell-55 text-info' />
            { title || <Skeleton />}
          </CardTitle>
        </CardHeader>
        <CardBody>
          <div className='chart-area'>
            {children || (
              <div>
                <Skeleton height={200} width={300} />
              </div>
            )}
          </div>
        </CardBody>
      </Card>
    </Col>

  );
};

export default CardChart;
