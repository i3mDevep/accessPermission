import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';
import SimpleTable from '../PersonalInfo/SimpleTable';

const ListTables = () => {
  return (

    <Row>
      <Col lg='6' md='12'>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>Simple Table </CardTitle>
          </CardHeader>
          <CardBody>
            <SimpleTable />
          </CardBody>
        </Card>
      </Col>
      <Col lg='6' md='12'>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>Simple Table </CardTitle>
          </CardHeader>
          <CardBody>
            <SimpleTable />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ListTables;
