import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { showAlert } from '../../store/actions/sweetAlertActions';
import { getVisibleAlert } from '../../store/reducers/notificationRecucers';
import useInputValue from '../../hooks/useInputValue';


const ClientPointAttetion = ({ show, onHide, onSubmit, visibleAlert, showAlert }) => {

  const Name = useInputValue('');
  const Identification = useInputValue('');
  const Address = useInputValue('');
  const Celphone = useInputValue('');
  const Gender = useInputValue('');
  const Temperature = useInputValue('');

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlerOnSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      identification: Identification.value,
      name: Name.value,
      Address: Address.value,
      Gender: Gender.value,
      temperature: Temperature.value,
      date: selectedDate,
      celphone: Celphone.value,

    });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        {visibleAlert && <SweetAlert {...visibleAlert}>{visibleAlert.content}</SweetAlert>}
        <Modal.Header closeButton>
          <Modal.Title>Registro de Clientes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id='CreateForm' onSubmit={handlerOnSubmit}>
            <Form.Group controlId='formGridDocument'>
              <Form.Label>Documento</Form.Label>
              <Form.Control
                {...Identification}
                type='number'
                placeholder='Número de Documento'
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId='formGridData'>
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control
                  {...Name}
                  type='text'
                  placeholder='Ingrese un Nombre'
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridPassword'>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify='space-around'>
                    <KeyboardDatePicker
                      disableToolbar
                      variant='inline'
                      format='MM/dd/yyyy'
                      margin='normal'
                      id='date-picker-inline'
                      label='Fecha de Nacimiento'
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </Form.Group>

            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId='formGridCity'>
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  {...Address}
                  placeholder='Dirección de residencia'
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridState'>
                <Form.Label>Género</Form.Label>
                <Form.Control
                  {...Gender}
                  as='select'
                >
                  <option hidden>Seleccione una opción</option>
                  <option value='Hombre'>Hombre</option>
                  <option value='Mujer'>Mujer</option>
                  <option value='Otro'>Otro</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId='formGridprone'>
                <Form.Label>Temperatúra</Form.Label>
                <Form.Control
                {...Temperature}
                  placeholder=' (°C)'
                />
              </Form.Group>
              <Form.Group as={Col} controlId='formGridTemp'>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  {...Celphone}
                  placeholder=' Número de contacto'
                />
              </Form.Group>
            </Form.Row>
            <Button
              variant='primary'
              type='submit'
            >
              Registrar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

};

const mapDispatchToProps = (dispatch) => {
  return {
    showAlert: (alertProps) => dispatch(showAlert(alertProps)),
  };
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isAuth: state.auth.isAuth,
    visibleAlert: getVisibleAlert(state.notifications),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientPointAttetion);

