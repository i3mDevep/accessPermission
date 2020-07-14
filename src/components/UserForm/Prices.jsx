import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import { FcBullish, FcBriefcase, FcBusinessman, FcDepartment } from 'react-icons/fc';
import { CardResponsive, ControlForm, ContainerFormDiv } from './style';

const Prices = () => {

  return (
    <ContainerFormDiv
      style={{
        display: 'block',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <CardDeck>
        <Card>
          <div className='text-center'>
            <FcBusinessman size={100} />
          </div>
          <Card.Body>
            <Card.Title>Started</Card.Title>
            <Card.Text>
              <ul>
                <li>Directorio de Usuarios</li>
                <li>Directorio de Clientes</li>
                <li>Informes de Ingreso y salida xlm</li>
                <li>Registro App </li>
              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Diseñado para personas o empresas que tienen 1 solo punto de atención y un promedio 200 registros de entrada y salida mensuales</small>
          </Card.Footer>
        </Card>
        <Card>
          <div className='text-center'>
            <FcBullish size={100} />
          </div>
          <Card.Body>
            <Card.Title>Pro</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <div className='text-center'>
            <FcDepartment size={100} />
          </div>
          <Card.Body>
            <Card.Title>Ultimate</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.
              {' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </ContainerFormDiv>
  );
};

export default Prices;

