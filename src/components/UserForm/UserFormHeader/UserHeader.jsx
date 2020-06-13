import React from 'react';
import { Row, Col } from 'react-bootstrap';

const FormHeader = ({ title }) => {

  return (
    <Row>
      <Col>
        <h1 className='text-white'>{title}</h1>
      </Col>
    </Row>
  );
};

export default FormHeader;
