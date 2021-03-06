import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Alert, Button, InputGroup, Row, Card } from 'react-bootstrap';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { IoIosKey, IoMdQrScanner } from 'react-icons/io';
import useInputValue from '../../hooks/useInputValue';
import { CardResponsive, ControlForm, ContainerForm } from './style';

const UserLogin = ({ onSubmit, error, loading }) => {

  const email = useInputValue('');
  const password = useInputValue('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      email: email.value,
      password: password.value });
  };

  return (
    <ContainerForm
      className='w-100'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 className='text-white'>
        <small>Bienvenidos</small>
      </h1>
      <br />
      <CardResponsive>
        <Card.Header className='bg-transparent '>
          <div style={{ color: 'blue' }} className='text-center'>
            <IoMdQrScanner size={70} />
          </div>
          <div className='text-muted text-center mt-1 mb-1'>
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
                    <BsFillEnvelopeFill />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <ControlForm
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
                    <IoIosKey />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <ControlForm
                  disabled={loading}
                  type='password'
                  required={true}
                  placeholder='Contraseña'
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
                  <span className='text-muted'>Recuerdame</span>
                </label>
              </div>
            </Form.Group>
            { error === 'auth/wrong-password' && (
              <Alert variant='danger'>
                <small>Contraseña Errada.</small>
              </Alert>
            )}
            { error === 'auth/user-not-found' && (
              <Alert variant='danger'>
                <small>Usuario no registrado.</small>
              </Alert>
            )}
            { error === 'auth/invalid-email' && (
              <Alert variant='danger'>
                <small>Email invalido.</small>
              </Alert>
            )}
            { error === 'auth/user-disabled' && (
              <Alert variant='danger'>
                <small>Cuenta inhabilitada, porfavor contacte al administrador.</small>
              </Alert>
            )}
            <div className='text-center'>
              <Button
                disabled={loading}
                variant='primary'
                type='submit'
                style={{
                  borderRadius: '20px',
                  width: '80%',
                }}
              >
                Acceder
              </Button>
            </div>
          </Form>
        </Card.Body>
      </CardResponsive>
      <Row className='p-3'>
        <a
          tag={Link}
          className='text-light mr-3'
          to='www.ardobot.co'
        >
          <small>Olvido su contraseña?</small>
        </a>
      </Row>
    </ContainerForm>
  );
};
export default UserLogin;

