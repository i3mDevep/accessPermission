import React from 'react';
import { CardDeck, Card, Row, Container, Col } from 'react-bootstrap';
import { FcBullish, FcBusinessman, FcDepartment } from 'react-icons/fc';
import { CardResponsive, ControlForm, ContainerFormDiv, CardDeckCustome } from './style';

const Prices = () => {

  return (
    <Container>
      <Row>
        <CardDeckCustome>
          <Col xs='12' sm='6' md='4'>
            <Card>
              <Card.Header className='text-center'>Started</Card.Header>
              <div className='text-center'>
                <FcBusinessman size={100} />
              </div>
              <Card.Body>
                <Card.Title className='text-center'>Gratis</Card.Title>
                <Card.Title className='text-center'>$0</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Escaner App QR.</li>
                    <li>Escaner App Documentos.</li>
                    <li>Registro de Temperatura.</li>
                    <li>Registro de Entrada y Salida.</li>
                    <li>Geolocalización App.</li>
                    <li>Gestor de empleados y clientes.</li>
                    <li>Directorio de Empleados.</li>
                    <li>Directorio de Clientes.</li>
                    <li>Informes Excel.</li>
                  </ul>
                  <br />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Diseñado para personas o empresas que tienen 1 solo punto de atención y 1000 registro de entrada y salida mensuales. </small>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs='12' sm='6' md='4'>
            <Card>
              <Card.Header className='text-center'>Pro</Card.Header>
              <div className='text-center'>
                <FcBullish size={100} />
              </div>
              <Card.Body>
                <Card.Title className='text-center'>Mensuales</Card.Title>
                <Card.Title className='text-center'>$10.000</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Escaner App QR.</li>
                    <li>Escaner App Documentos.</li>
                    <li>Registro de Temperatura.</li>
                    <li>Registro de Entrada y Salida.</li>
                    <li>Geolocalización App.</li>
                    <li>Gestor de empleados y clientes.</li>
                    <li>Directorio de Empleados.</li>
                    <li>Directorio de Clientes.</li>
                    <li>Control de horas laboradas</li>
                    <li>Informes Excel.</li>
                  </ul>
                  <br />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Diseñado para empresas que tienen de 1 a 5 puntos de atención. Aplica precio por sede o punto de venta </small>
              </Card.Footer>
            </Card>
          </Col>

          <Col xs='12' sm='12' md='4'>
            <Card>
              <Card.Header className='text-center'>Avance</Card.Header>
              <div className='text-center'>
                <FcDepartment size={100} />
              </div>
              <Card.Body>
                <Card.Title className='text-center'>Mensuales</Card.Title>
                <Card.Title className='text-center'>$30.000</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Escaner App QR.</li>
                    <li>Escaner App Documentos.</li>
                    <li>Registro de Temperatura.</li>
                    <li>Registro de Entrada y Salida.</li>
                    <li>Geolocalización App.</li>
                    <li>Gestor de empleados y clientes.</li>
                    <li>Directorio de Empleados.</li>
                    <li>Directorio de Clientes.</li>
                    <li>Control de horas laboradas</li>
                    <li>Informes Excel.</li>
                    <li>Informes personalizados</li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>Diseñado para empresas que tienen mas de 6 puntos de atención. Aplica precio por sede o punto de venta </small>
              </Card.Footer>
            </Card>
          </Col>
        </CardDeckCustome>
      </Row>

    </Container>
  );
};

export default Prices;

