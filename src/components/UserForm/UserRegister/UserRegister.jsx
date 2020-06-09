import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Button, Card, InputGroup, Row, Col } from 'react-bootstrap';
import { BsFillEnvelopeFill, BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';
import { IoIosKey } from 'react-icons/io';
import { Rederict, Error } from './style';
import useInputValue from '../../../hooks/useInputValue';

const UserRegister = ({ onSubmit, loading, error }) => {
  const company = useInputValue('');
  const email = useInputValue('');
  const password = useInputValue('');
  const chellphone = useInputValue('');
  const address = useInputValue('');
  const handlerSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value,
      password: password.value,
      company: company.value,
      cellphone: chellphone.value,
      address: address.value });
  };
  return (
    <div className='main-content'>
      <Col className='container'>
        <Row className='col'>
          <div>
            <div className='header-body text-center mb-7'>
              <Row className='justify-content-center'>
                <Col lg='5' md='6'>
                  <h1 className='text-white'>Registro</h1>
                  {'/n '}
                </Col>
              </Row>
            </div>
            <Card style={{ width: '29rem' }}>
              <Card.Header className='bg-transparent pb-5'>
                <div className='text-muted text-center mt-2 mb-3'>
                  <small>Completa el registro de tu empresa, una vez registrado uno de nuestros agentes te contactará</small>
                </div>
                <div style={{ color: 'blue' }} className='text-center'>
                  <BsReverseLayoutTextSidebarReverse size={40} />
                </div>
              </Card.Header>

              <Card.Body>
                <Form disabled={loading} onSubmit={handlerSubmit}>
                  <Form.Group controlId='formGridAddress2'>
                    <Form.Label>Compañia</Form.Label>
                    <Form.Control
                      placeholder='Compañia'
                      disabled={loading}
                      type='text'
                      required={true}
                      placeholder='Nombre de tu empresa'
                      {...company}
                    />
                  </Form.Group>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Correo Electrónico</Form.Label>
                    <InputGroup className='mb-3'>
                      <InputGroup.Prepend>
                        <InputGroup.Text id='basic-addon1'>
                          {' '}
                          <BsFillEnvelopeFill />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        disabled={loading}
                        required={true}
                        type='email'
                        {...email}
                        placeholder='Correo Electrónico'
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Contraseña</Form.Label>
                    <InputGroup className='mb-3'>
                      <InputGroup.Prepend>
                        <InputGroup.Text id='basic-addon1'>
                          {' '}
                          <IoIosKey />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        disabled={loading}
                        type='password'
                        required={true}
                        placeholder='Protege tu información'
                        {...password}

                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group controlId='formGridAddress2'>
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      disabled={loading}
                      type='tel'
                      required={true}
                      placeholder='A que numero nos podemos contactar?'
                      {...chellphone}
                    />
                  </Form.Group>
                  <Form.Group controlId='formGridAddress2'>
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control placeholder='En que ciudad estas?' />
                  </Form.Group>

                  <Form.Group controlId='formGridAddress2'>
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                      placeholder='Dirección de tu compañia'
                      disabled={loading}
                      type='text'
                      required={true}
                      {...address}
                    />
                  </Form.Group>
                  { error && <Error>{ error }</Error> }
                  <div className='text-center'>
                    <Button disabled={loading}>Completar Registro</Button>
                  </div>
                  <Rederict disabled={loading}>
                    Estas registrado?
                    <Link style={{ color: '#fff' }} to='/login'> login</Link>
                  </Rederict>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Col>
    </div>

  );
};
export default UserRegister;
