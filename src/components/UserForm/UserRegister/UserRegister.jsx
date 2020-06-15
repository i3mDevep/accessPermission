import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Button, Card, InputGroup } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { IoIosKey } from 'react-icons/io';
import { connect } from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';
import { CardResponsive, Background } from '../style';
import useInputValue from '../../../hooks/useInputValue';
import { showAlert } from '../../../store/actions/sweetAlertActions';
import FormHeader from '../UserFormHeader/UserHeader';
import { getVisibleAlert } from '../../../store/reducers/notificationRecucers';

const UserRegister = ({ onSubmit, loading, error, showAlert, visibleAlert, success }) => {
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
    <Background>
      <FormHeader title='Registro' />
      <CardResponsive>
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
            { error === 'auth/weak-password' ? (
              <Alert variant='danger'>
                <small>Contraseña muy corta establece una mas segura.</small>
              </Alert>
            ) : ''}
            { error === 'auth/email-already-in-use' ? (
              <Alert variant='danger'>
                <small> Ya te encuentras registrado</small>
              </Alert>
            ) : ''}
            { success && showAlert({
              type: 'success',
              title: 'Exitoso!',
              content: 'Registro exitoso',
              showCancel: false,
            })}
            <div className='text-center'>
              <Button type='submit' disabled={loading}>Completar Registro</Button>
            </div>

          </Form>
        </Card.Body>
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

