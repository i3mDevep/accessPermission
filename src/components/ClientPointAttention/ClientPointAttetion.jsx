import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form, Col, ListGroup, Alert } from 'react-bootstrap';
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

  const [name, setName] = useState('');
  const [identification, setIdentification] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [age, setAge] = useState('');

  const Temperature = useInputValue('');

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlerOnSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      identification,
      name,
      idSubcompany: isAuth.uid,
      gender: gender.value,
      temperature: Temperature.value,
      birth: selectedDate,
      cellphone: cellphone.value,
      cause: ' causa ',
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
                  console.log('mydata: ', mydata);
                  setName(mydata.name);
                  setIdentification(mydata.identification);
                  setGender(mydata.gender);
                  setCellphone(mydata.cellphone);
                  setAge(mydata.birth);
                  setAddress(mydata.address);
                }}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId='formGridData'>
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control
                  required={true}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                      format='dd/MM/yyyy'
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
                  required={true}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type='text'
                  placeholder='Dirección de residencia'
                />
              </Form.Group>
              <Form.Group as={Col} controlId='formGridState'>
                <Form.Label>Género</Form.Label>
                <Form.Control
                  required={true}
                  value={gender}
                  type='text'
                  onChange={(e) => setGender(e.target.value)}
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
                  type='text'
                  required={true}
                  {...Temperature}
                  placeholder=' (°C)'
                />
              </Form.Group>
              <Form.Group as={Col} controlId='formGridTemp'>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type='text'
                  required={true}
                  value={cellphone}
                  onChange={(e) => setCellphone(e.target.value)}
                  placeholder=' Número de contacto'
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
      birth: item.birth,
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
        type='text'
        onChange={handleChange}
      />
      <ListGroup as='ul' style={{ position: 'absolute', zIndex: 100, top: '85px', display: 'flex' }} className='AutocompleteText'>
        {query.length > 0 ? searchResults.map((item) => (
          <ListGroup.Item onClick={() => handlerSelect(item)} as='li' variant='light' id={item.id} key={item.id}>
            {item.identification}
            {' / '}
            {item.name}
            {' / '}
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

