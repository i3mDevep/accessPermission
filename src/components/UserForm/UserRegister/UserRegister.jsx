import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Button, Card, InputGroup, Row, Col, Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { BsFillEnvelopeFill, BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';
import { IoIosKey } from 'react-icons/io';
import { connect } from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';
import { CardResponsive, Error, Background } from '../style';
import useInputValue from '../../../hooks/useInputValue';
import { showAlert } from '../../../store/actions/sweetAlertActions';
import FormHeader from '../UserFormHeader/UserHeader';
import { getVisibleAlert } from '../../../store/reducers/notificationRecucers';

const UserRegister = ({ onSubmit, loading, error, showAlert, visibleAlert }) => {
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
      <FormHeader title='Registro' />
      <CardResponsive>
        <Card.Header className='bg-transparent pb-5'>
          <div style={{ color: 'blue' }} className='text-center'>
            <BsReverseLayoutTextSidebarReverse size={40} />
          </div>
          <div className='text-muted text-center mt-2 mb-3'>
            <small>Completa el registro de tu empresa, una vez realizado uno de nuestros agentes te contactará</small>
          </div>

        </Card.Header>
        <Card.Body>
          {visibleAlert && <SweetAlert {...visibleAlert}>{visibleAlert.content}</SweetAlert>}
          <Form disabled={loading} onSubmit={handlerSubmit}>
            <Form.Group controlId='formCompany'>
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
            <Form.Group controlId='formEmail'>
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
            <Form.Group controlId='formTelphone'>
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                disabled={loading}
                type='tel'
                required={true}
                placeholder='A que numero nos podemos contactar?'
                {...chellphone}
              />
            </Form.Group>
            <Form.Group controlId='formCity'>
              <Form.Label>Ciudad</Form.Label>
              <Form.Control placeholder='En ?' />
            </Form.Group>

            <Form.Group controlId='formAddress'>
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
    </Background>
  );

};

UserRegister.propTypes = {
  visibleAlert: PropTypes.any,
};

const mapStateToProps = (state) => ({
  visibleAlert: getVisibleAlert(state.notifications),
});

export default connect(mapStateToProps, { showAlert })(UserRegister);

