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
import TimesTableRow from '../SimpleTable/TimesTableRow';

const ListTables = () => {
  return (

    <Row>
      <Col lg='8' md='12'>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>User Register </CardTitle>
          </CardHeader>
          <CardBody>
            <SimpleTableHead
              titles={['Name', 'Identification', 'Gender', 'Age', 'Action', 'Time']}
              id='headusers'
            >
              <UsersTableRow />
            </SimpleTableHead>
          </CardBody>
        </Card>
      </Col>
      <Col lg='4' md='12'>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>Example Table 2 </CardTitle>
          </CardHeader>
          <CardBody>
            <SimpleTableHead
              titles={['Identification', 'Count']}
              id='timeusers2'
            >
              <TimesTableRow />
            </SimpleTableHead>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ListTables;
