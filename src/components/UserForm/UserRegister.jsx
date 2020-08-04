import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card, InputGroup, Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { IoIosKey } from 'react-icons/io';
import { connect } from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';
import { CardResponsive, ControlForm, ContainerForm } from './style';
import useInputValue from '../../hooks/useInputValue';
import { getVisibleAlert } from '../../store/reducers/notificationRecucers';

const UserRegister = ({ onSubmit, loading, error, visibleAlert }) => {
  const company = useInputValue('');
  const email = useInputValue('');
  const password = useInputValue('');
  const chellphone = useInputValue('');
  const address = useInputValue('');
  const city = useInputValue('');
  const plan = useInputValue('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!plan.value) {
      alert('Seleccione un plan!');
      return;
    }
    onSubmit({
      email: email.value,
      password: password.value,
      company: company.value,
      celphone: chellphone.value,
      address: address.value,
      city: city.value,
      plan: plan.value,
    });
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
      <h1 className='text-white p-1'>
        <small>Registro</small>
      </h1>
      <CardResponsive>
        <Card.Body>
          {visibleAlert && <SweetAlert timeout={3000} style={{ width: '300px', fontSize: '13px' }} {...visibleAlert}>{visibleAlert.content}</SweetAlert>}
          <Form disabled={loading} onSubmit={handlerSubmit}>
            <Form.Group controlId='formCompany'>
              <Form.Label>Compañia</Form.Label>
              <ControlForm
                disabled={loading}
                type='text'
                required={true}
                placeholder='Nombre de tu empresa'
                {...company}
              />
            </Form.Group>
            <Form.Group controlId='formEmail'>
              <Form.Label>Correo Electrónico</Form.Label>
              <InputGroup>
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
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id='basic-addon1'>
                    <IoIosKey />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <ControlForm
                  disabled={loading}
                  type='password'
                  required={true}
                  placeholder='Protege tu información'
                  {...password}

                />
              </InputGroup>
            </Form.Group>
            <Form.Row>
              <Col>
                <Form.Group controlId='formTelphone'>
                  <Form.Label>Teléfono</Form.Label>
                  <ControlForm
                    disabled={loading}
                    type='tel'
                    required={true}
                    placeholder='Numero'
                    {...chellphone}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='formCity'>
                  <Form.Label>Ciudad</Form.Label>
                  <ControlForm
                    placeholder='Tu ciudad actual'
                    disabled={loading}
                    type='text'
                    required={true}
                    {...city}
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group controlId='formAddress'>
              <Form.Label>Dirección</Form.Label>
              <ControlForm
                placeholder='Dirección de tu compañia'
                disabled={loading}
                type='text'
                required={true}
                {...address}
              />
            </Form.Group>
            <Form.Group controlId='formPlan'>
              <Form.Label>Plan</Form.Label>
              <Form.Control
                required={true}
                disabled={loading}
                {...plan}
                as='select'
              >
                <option hidden>Seleccione una opción</option>
                <option value='Free'>Free</option>
                <option value='Pro'>Pro</option>
                {/* <option value='Otro'>Enterprise</option> */}
              </Form.Control>
            </Form.Group>
            { error && (
              <Alert variant='danger'>
                <small>{error}</small>
              </Alert>
            )}
            <div className='text-center'>
              <Button
                type='submit'
                style={{
                  borderRadius: '20px',
                  width: '80%',
                }}
                disabled={loading}
              >
                {loading ? 'Guardando' : 'Completar Registro'}
              </Button>
            </div>

          </Form>
        </Card.Body>
      </CardResponsive>
    </ContainerForm>
  );

};

UserRegister.propTypes = {
  visibleAlert: PropTypes.any,
};

const mapStateToProps = (state) => ({
  visibleAlert: getVisibleAlert(state.notifications),
});

export default connect(mapStateToProps, null)(UserRegister);

