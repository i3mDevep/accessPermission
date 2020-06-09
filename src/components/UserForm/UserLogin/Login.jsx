import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Card, InputGroup, Row, Col } from 'react-bootstrap';
import { BsFillEnvelopeFill, BsFillLockFill } from 'react-icons/bs';

import useInputValue from '../../../hooks/useInputValue';

import './style.scss';

const UserLogin = ({ onSubmit, error, loading }) => {

  return (
    <div className='main-content'>
      <Col className='container'>
        <Row className='col'>
          <div>
            <div className='header-body text-center mb-7'>
              <Row className='justify-content-center'>
                <Col lg='5' md='6'>
                  <h1 className='text-white'>Bienvenido!</h1>
                  {'/n '}
                  {'/n'}

                </Col>
              </Row>
            </div>
            <Card style={{ width: '29rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Login</Card.Title>
                <Form>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Correo Electrónico</Form.Label>
                    <InputGroup className='mb-3'>
                      <InputGroup.Prepend>
                        <InputGroup.Text id='basic-addon1'>
                          {' '}
                          <BsFillEnvelopeFill />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control type='email' placeholder='Enter email' />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Contraseña</Form.Label>
                    <InputGroup className='mb-3'>
                      <InputGroup.Prepend>
                        <InputGroup.Text id='basic-addon1'>
                          {' '}
                          <BsFillLockFill />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control type='password' placeholder='Password' />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group controlId='formBasicCheckbox'>
                    <Form.Check type='checkbox' label='Recuerdame' />
                  </Form.Group>
                  <Button variant='primary' type='submit'>
                    Sing in
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <Row className='mt-3'>
              <Col xs='6'>
                <Link
                  tag={Link}
                  className='text-light'
                  to='www.ardobot.co'
                >
                  <small>Olvido su contraseña?</small>
                </Link>

              </Col>
              <Col className='text-right' xs='6'>
                <Link
                  tag={Link}
                  className='text-light'
                  to='/register'
                >
                  <small>Crear una cuenta</small>
                </Link>
              </Col>
            </Row>
          </div>
        </Row>
      </Col>
    </div>

  );
};
export default UserLogin;
