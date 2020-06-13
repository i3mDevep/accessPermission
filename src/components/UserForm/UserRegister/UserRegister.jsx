import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Button, Card, InputGroup, Row, Col, Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { BsFillEnvelopeFill, BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';
import { IoIosKey } from 'react-icons/io';
import { connect } from 'react-redux';
import { CardResponsive, Error, Background } from '../style';
import useInputValue from '../../../hooks/useInputValue';
import { showAlert } from '../../../store/actions/sweetAlertActions';

const UserRegister = ({ onSubmit, loading, error, showAlert }) => {
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

  console.log(showAlert);
  return (

    <Background>
      <div className='main-content'>
        <Col className='container'>
          <Row className='col'>
            <div>
              <div>
                <Row className='header-body text-center mb-7'>
                  <Col lg='5' md='6'>
                    <h1 className='text-white'>Registro</h1>
                  </Col>
                </Row>
              </div>
              <CardResponsive>
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
                      <Form.Control placeholder='En ?' />
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
                    { error ? (
                      <Alert variant='danger'>
                        {' '}
                        <Alert.Heading>Ya te encuentras registrado en nuestra base de datos, inicia Sesión</Alert.Heading>
                        {' '}
                      </Alert>
                    ) : ''}

                    { error && <Error>{ error }</Error> }
                    <div className='text-center'>
                      <Button type='submit' disabled={loading}>Completar Registro</Button>
                    </div>

                  </Form>
                </Card.Body>
                <div className='mt-5 text-center'>
                  <Button
                    variant='primary'
                    onClick={() => showAlert({
                      type: 'success',
                      title: 'Woot!',
                      content: 'You have clicked the button!',
                      showCancel: true,
                    })}
                  >
                    Show an Alert
                  </Button>
                </div>
              </CardResponsive>
            </div>
          </Row>
        </Col>
      </div>
    </Background>
  );

};

UserRegister.propTypes = {
  showAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {

};

export default connect(mapStateToProps, showAlert)(UserRegister);

