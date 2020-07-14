import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import { FcBullish, FcBriefcase, FcBusinessman, FcDepartment} from 'react-icons/fc';
import { CardResponsive, ControlForm, ContainerForm } from './style';

const Prices = () => {

  return (
    <ContainerForm
      style={{
        display: 'block',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        margin: '30px 20px 15px 20px',
      }}
    >
      <CardDeck>
        <Card>
          <div className='text-center'>
            <FcBusinessman size={100} />
          </div>
          <Card.Body>
            <Card.Title>BASICO</Card.Title>
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
            <FcBriefcase size={100} />
          </div>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
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
            <FcBullish size={100} />
          </div>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
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
        <Card>
          <div className='text-center'>
            <FcDepartment size={100} />
          </div>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </ContainerForm>

  );
};

export default Prices;

