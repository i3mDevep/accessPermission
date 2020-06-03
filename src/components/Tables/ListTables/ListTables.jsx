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
      <Col lg='7' md='12'>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>Example Table 1 </CardTitle>
          </CardHeader>
          <CardBody>
            <SimpleTableHead
              titles={['Nombre', 'Documento', 'Genero', 'Edad', 'Accion']}
              id='headusers'
            >
              <UsersTableRow />
            </SimpleTableHead>
          </CardBody>
        </Card>
      </Col>
      <Col lg='5' md='12'>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>Example Table 2 </CardTitle>
          </CardHeader>
          <CardBody>
            <SimpleTableHead
              titles={['Documento', 'Hora', 'Accion']}
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
