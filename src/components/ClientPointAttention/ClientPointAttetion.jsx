import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form, Col, ListGroup, Alert } from 'react-bootstrap';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import SweetAlert from 'react-bootstrap-sweetalert';
import { showAlert } from '../../store/actions/sweetAlertActions';
import { getVisibleAlert } from '../../store/reducers/notificationRecucers';
import useInputValue from '../../hooks/useInputValue';

const ClientPointAttetion = ({ show, onHide, onSubmit, visibleAlert, showAlert, clients, sendData, isAuth }) => {

  const [nameC, setName] = useState('');
  const [identification, setIdentification] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [temperature, setTemperature] = useState('');
  const [causeChange, setCauseChange] = useState(' ');
  const [lastName, setLastName] = useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (age) => {
    console.log(age);
    setSelectedDate(age);
  };

  const handlerOnSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      identification,
      name: `${lastName}${' '}${nameC}`,
      idSubcompany: isAuth.uid,
      gender,
      address,
      temperature,
      birth: selectedDate,
      cellphone,
      cause: causeChange.length > 1 ? causeChange : ' Sin Observaciones',
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
              <SearchClient
                info={clients}
                sendData={(mydata) => {
                  console.log(mydata);
                  setName(mydata.name);
                  setIdentification(mydata.identification);
                  setGender(mydata.gender);
                  setCellphone(mydata.cellphone);
                  setSelectedDate(mydata.birth);
                  setAddress(mydata.address);
                }}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId='formGridLastName'>
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                  required={true}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type='text'
                  placeholder='Ingrese sus Apellidos'
                />
              </Form.Group>
              <Form.Group as={Col} controlId='formGridName'>
                <Form.Label>Nombres</Form.Label>
                <Form.Control
                  required={true}
                  value={nameC}
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  placeholder='Ingrese sus Nombres'
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId='formGridGender'>
                <Form.Label>Género</Form.Label>
                <Form.Control
                  required={true}
                  value={gender}
                  type='text'
                  onChange={(e) => setGender(e.target.value)}
                  as='select'
                >
                  <option hidden>Seleccione una opción</option>
                  <option value='Hombre'>Masculino</option>
                  <option value='Mujer'>Femenino</option>
                  <option value='Otro'>Otro</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId='formGridYear'>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify='space-around'>
                    <KeyboardDatePicker
                      disableToolbar
                      clearable
                      autoOk
                      variant='inline'
                      inputVariant='outlined'
                      disableFuture
                      format='yyyy/MM/dd'
                      views={['year', 'month', 'date']}
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
              <Form.Group as={Col} controlId='formGridTemperature'>
                <Form.Label>Temperatúra</Form.Label>
                <Form.Control
                  type='number'
                  required={true}
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                  placeholder=' (°C)'
                />
              </Form.Group>
              <Form.Group as={Col} controlId='formGridTelphone'>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type='tel'
                  required={true}
                  value={cellphone}
                  onChange={(e) => setCellphone(e.target.value)}
                  placeholder=' Número de contacto'
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId='formGridAddress'>
                <Form.Label>*Opcion 1 - Dirección </Form.Label>
                <Form.Control
                  required={false}
                  type='address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder='Dirección de residencia'
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId='formGridObservation'>
                <Form.Label>*Opcion 2 - Observaciones</Form.Label>
                <Form.Control
                  required={false}
                  type='text'
                  value={causeChange}
                  onChange={(e) => setCauseChange(e.target.value)}
                  placeholder='Notas del cliente'
                />
              </Form.Group>
            </Form.Row>
            <Button
              variant='primary'
              type='submit'
            >
              Guardar
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

function SearchClient({ info = [], sendData }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [aux, setAux] = useState(true);
  const [blocked, setBlocked] = useState(true);

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birth, setBirth] = useState('');

  //console.log(info)
  // Recibo los eventos del input en setQuery
  // y habilito la bandera True para permitir la busqueda de nuevo

  //if aux = true entonces almacene en la variable result
  // los datos filtrados de info={workers} que llegan en el query del evento setQuery
  useEffect(() => {
    if (info.length <= 0) {
      setBlocked(true);
    } else {
      setBlocked(false);
    }
  }, []);

  useEffect(() => {
    if (aux) {
      const results = info.filter((info) => info.id.includes(query));
      setSearchResults(results);
    }
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
    sendData({ identification: event.target.value, name, gender, birth });
    setAux(true);
  };

  const handlerSelect = (item) => {
    setAux(false);
    setQuery(item.identification);
    setSearchResults([]);
    sendData({
      identification: item.identification,
      name: item.name,
      gender: item.gender,
      birth: moment(item.birth.toDate().toISOString()).locale('es').calendar('YYYY/MM/DD'), //format('YYYYMMDD'),
      address: item.address,
      cellphone: item.cellphone,
    });
  };
  return (
    <>
      <Form.Control
        placeholder='Busque o cree un cliente '
        value={query}
        autoComplete='off'
        type='number'
        onChange={handleChange}
      />
      <ListGroup as='ul' style={{ position: 'absolute', zIndex: 100, top: '85px', display: 'flex' }} className='AutocompleteText'>
        {query.length > 1 ? searchResults.map((item) => (
          <ListGroup.Item onClick={() => handlerSelect(item)} as='li' variant='light' id={item.id} key={item.id}>
            {item.identification}
            {' '}
            {item.name}
            {' '}
            {item.telphone}
          </ListGroup.Item>
        )) : ' '}
      </ListGroup>
    </>
  );

}

const mapDispatchToProps = (dispatch) => {
  return {
    showAlert: (alertProps) => dispatch(showAlert(alertProps)),
  };
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    visibleAlert: getVisibleAlert(state.notifications),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientPointAttetion);

