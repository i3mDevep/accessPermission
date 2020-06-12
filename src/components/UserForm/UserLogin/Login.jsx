import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, InputGroup, Row, Col, Card } from 'react-bootstrap';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { IoIosKey, IoMdQrScanner } from 'react-icons/io';
import { CardLogin } from './style';

import useInputValue from '../../../hooks/useInputValue';
import { Background } from '../style';

const UserLogin = ({ onSubmit, error, loading }) => {

  const email = useInputValue('');
  const password = useInputValue('');

  const handlerSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <Background>
      <div className='main-content'>
        <CardLogin>
          <Card.Header className='bg-transparent '>
            <div style={{ color: 'blue' }} className='text-center'>
              <IoMdQrScanner size={100} />
            </div>
            <div className='text-muted text-center mt-2 mb-3'>
              <small>Inicie sesión para acceder a la Dashboard</small>
            </div>
          </Card.Header>
          <Card.Body>
            <Form disabled={loading} onSubmit={handlerSubmit}>
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
                    placeholder='Enter email'
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
                    placeholder='Password'
                    {...password}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group controlId='formBasicCheckbox'>
                <div className='custom-control custom-control-alternative custom-checkbox'>
                  <input
                    className='custom-control-input'
                    id=' customCheckLogin'
                    type='checkbox'
                  />
                  <label
                    className='custom-control-label'
                    htmlFor=' customCheckLogin'
                  >
                    <span className='text-muted'>Remember me</span>
                  </label>
                </div>
              </Form.Group>
              <div className='text-center'>
                <Button
                  disabled={loading}
                  variant='primary'
                  type='submit'
                >
                  Sing in
                </Button>
              </div>
              <span {...error && <Error>{error}</Error>} />
              <div className='text-center'>
                <small>developed by ardobot</small>
              </div>
            </Form>
          </Card.Body>
        </CardLogin>
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
    </Background>
  );
};
export default UserLogin;

