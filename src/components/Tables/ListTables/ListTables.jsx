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
import SimpleTableRow from '../SimpleTable/SimpleTableRow';

const ListTables = () => {
  return (

    <Row>
      <Col lg='6' md='12'>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>Example Table 1 </CardTitle>
          </CardHeader>
          <CardBody>
            <SimpleTableHead
              title1='Nombre'
              title2='Documento'
              title3='Genero'
              title4='Edad'
              title5='Acción'
            >
              <SimpleTableRow />
            </SimpleTableHead>
          </CardBody>
        </Card>
      </Col>
      <Col lg='6' md='12'>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>Example Table 2 </CardTitle>
          </CardHeader>
          <CardBody>
            <SimpleTableHead
              title1='Empresa'
              title2='Documento'
              title3='Genero'
              title4='Edad'
              title5='Acción'
            >
              <SimpleTableRow />
            </SimpleTableHead>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ListTables;
