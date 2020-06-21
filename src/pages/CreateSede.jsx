import React from 'react';
import * as firebase from 'firebase/app';
import { connect } from 'react-redux';
import { Card, Container, Row, Button, Modal, Form } from 'react-bootstrap';
import { IoIosAdd } from 'react-icons/io';
import PoindOfSale from '../components/PoinOfSale/PoinofSale';


const CreateSede = ({ isAuth }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const handlerAddSedes = () => {
    alert('create subcompany');
    const dataSubCompany = {
      company: isAuth.uid,
      content: {
        name: 'subempresa', email: `emaildesaad@${isAuth.displayName.trim()}.com`, password: 'camilofeo9',
      },
    };
    const createSubCompany = firebase.functions().httpsCallable('createSubCompany');
    createSubCompany(dataSubCompany)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <Container style={{ paddingLeft: '200px' }}>
      <Row>
        <Card
          style={{ width: '18rem' }}
          className='m-2'
        >
          <Card.Body>
            <Card.Title>
              Crear nueva sede
            </Card.Title>

            <Button onClick={handlerAddSedes} style={{ padding: '3px' }}><IoIosAdd size='30' /></Button>
          </Card.Body>
        </Card>
        {
          [
            'Dark',
            'Dark',
            'Dark',
            'Dark',
            'Dark',
            'Dark',
            'Dark',
            'Dark',
          ].map((variant, idx) => (

            <Card
              bg={variant.toLowerCase()}
              key={idx}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem' }}
              className='m-2'
            >
              <Card.Header>{`Sede ${1}`}</Card.Header>
              <Card.Body>
                <Card.Title>
                  {variant}
                  Name de la sede
                </Card.Title>
                <Card.Text>
                  Info de la sede
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        }
        <Button variant='primary' onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <PoindOfSale
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Row>
    </Container>
  );
};

const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateProps, null)(CreateSede);
