import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';
import SimpleTableHead from '../SimpleTable/SimpleTableHead';
import UsersTableRow from '../SimpleTable/UsersTableRow';

const ListTables = () => {
  return (

    <Row>
      <Col lg='12' md='12'>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>Users </CardTitle>
          </CardHeader>
          <CardBody>
            <SimpleTableHead
              titles={['Name', 'Identification', 'Gender', 'Age', 'Time', 'Sede', 'Telphone', 'Address']}
              id='headusers'
            >
              <UsersTableRow />
            </SimpleTableHead>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ListTables;
