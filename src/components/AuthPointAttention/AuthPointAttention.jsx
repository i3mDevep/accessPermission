import React, { useEffect, useState, useRef } from 'react';
import Webcam from 'react-webcam';
import PropTypes from 'prop-types';
import SweetAlert from 'react-bootstrap-sweetalert';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { MdErrorOutline } from 'react-icons/md';
import { Button, Card, Container, Form, Row, Col, ListGroup, Alert } from 'react-bootstrap';
import { showAlert } from '../../store/actions/sweetAlertActions';
import { getVisibleAlert } from '../../store/reducers/notificationRecucers';

const AuthPointAttention = ({ sendData, traking, visibleAlert, worker = [], isAuth, showAlert }) => {

  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [identification, setIdentification] = useState('');
  const [action, setAction] = useState(' ');
  const [temp, setTemp] = useState(' ');

  const options = [
    { value: 'in', label: 'Entrada' },
    { value: 'out', label: 'Salida' },
  ];

  const optionsTemperature = [
    { value: '30', label: '30' },
    { value: '30.5', label: '30.5' },
    { value: '31', label: '31' },
    { value: '31.5', label: '31.5' },
    { value: '32', label: '32' },
    { value: '32.5', label: '32.5' },
    { value: '33', label: '33' },
    { value: '33.5', label: '33.5' },
    { value: '34', label: '34' },
    { value: '34.5', label: '34.5' },
    { value: '35', label: '35' },
    { value: '35.5', label: '35.5' },
    { value: '36', label: '36' },
    { value: '36.5', label: '36.5' },
    { value: '37', label: '37' },
    { value: '37.5', label: '37.5' },
    { value: '38', label: '38' },
    { value: '38.5', label: '38.5' },
    { value: '39', label: '39' },
    { value: '39.5', label: '39.5' },
    { value: '40', label: '40' },
  ];

  const handleChangeSelect = (event) => {
    setAction(event.currentTarget.value);
  };

  const handleChangeSelectTemp = (event) => {
    setTemp(event.currentTarget.value);
  };

  const handlerOnSubmit = React.useCallback((e) => {
    e.preventDefault();
    const imageSrc = webcamRef.current.getScreenshot();
    /// Falta añadir validacion para que todo este resue
    if (action) {
      setImgSrc(imageSrc);
      traking({
        action,
        temperature: temp,
        identification,
        imageSrc,
        position: 'Registro Web',
      }, imageSrc);
    } else {
      showAlert({
        type: 'error',
        title: 'Opss!',
        content: 'Revisa tus campos de identificación o evento',
        timeout: 3000,
        showCancel: false,
      });
    }
  }, [webcamRef, setImgSrc]);

  return (

    <Container fluid>
      <Row>
        {visibleAlert && <SweetAlert {...visibleAlert}>{visibleAlert.content}</SweetAlert>}
        <Col sm={10} md={6} style={{ margin: '0 auto' }}>
          <Card>
            <CardContent>
              <Form id='CreateTraking'>
                <Form.Group controlId='Identification'>
                  <Form.Label>No de Documento</Form.Label>
                  <SearchWorker
                    info={worker}
                    sendData={(data) => {
                      setName(data.name);
                      setLastName(data.lastname);
                      setIdentification(data.identification);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId='action'>
                  <Form.Control
                    as='select'
                    onChange={handleChangeSelect}
                  >
                    <optgroup label='Seleccione un Evento'>
                      <option hidden>Seleccione una opción</option>
                      {options.map(({ label, value }, i) => (
                        <option key={`in ${value[i]}`} value={value}>
                          {label}
                        </option>
                      ))}
                    </optgroup>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId='actionTemperature'>
                  <Form.Control
                    as='select'
                    onChange={handleChangeSelectTemp}
                  >
                    <optgroup label='Seleccione la Temperatura'>
                      <option hidden>Seleccione una opción</option>
                      {optionsTemperature.map(({ label, value }, i) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </optgroup>
                  </Form.Control>
                </Form.Group>
              </Form>
            </CardContent>
          </Card>
          <br />
          <Card>
            <CardContent>
              <Form id='CreateForm' onSubmit={handlerOnSubmit}>
                <Form.Group controlId='cName'>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    disabled={true}
                    value={name}
                  />
                </Form.Group>
                <Form.Group controlId='LastName'>
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    placeholder='Apellido'
                    disabled={true}
                    value={lastname}
                  />
                </Form.Group>
                <Form.Group controlId='Identification'>
                  <Form.Label>Cedula o documento de indentificación</Form.Label>
                  <Form.Control
                    placeholder='Documento del empleado'
                    disabled={true}
                    value={identification}
                  />
                </Form.Group>
                <Form.Group controlId='event'>
                  <Form.Label>Evento registrado</Form.Label>
                  <Form.Control
                    placeholder=' '
                    disabled={true}
                    value={action}
                  />
                </Form.Group>
                <Form.Group requiered controlId='temp'>
                  <Form.Label>Temperatura registrada</Form.Label>
                  <Form.Control
                    placeholder=' '
                    disabled={true}
                    value={temp}
                  />
                </Form.Group>
              </Form>
              <Button
                variant='primary'
                type='submit'
                form='CreateForm'
                className='mr-2'
              >
                Registrar
              </Button>
            </CardContent>
          </Card>
          <br />
        </Col>
        <Col sm={10} md={6} style={{ margin: '0 auto' }}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Centre su rostro al presionar Registrar
              </Typography>
              <Webcam
                className='embed-responsive embed-responsive-16by9'
                audio={false}
                ref={webcamRef}
                screenshotFormat='image/jpeg'
                text='img'
                controls
              />
              <br />
            </CardContent>
          </Card>
          <br />
          {imgSrc && (
            <Card className='text-center'>
              <Card.Body>
                <img
                  id='qrid'
                  alt='webcam'
                  text='name'
                  src={imgSrc}
                />
              </Card.Body>
            </Card>
          )}
          <br />
        </Col>
      </Row>
    </Container>
  );
};

function SearchWorker({ info = [], sendData }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [aux, setAux] = useState(true);
  const [blocked, setBlocked] = useState(true);
  //console.log(info)
  // Recibo los eventos del input en setQuery
  // y habilito la bandera True para permitir la busqueda de nuevo
  const handleChange = (event) => {
    setQuery(event.target.value);
    setAux(true);
  };

  //if aux = true entonces almacene en la variable result
  // los datos filtrados de info={workers} que llegan en el query del evento setQuery
  useEffect(() => {
    if (info.length <= 0) {
      setBlocked(true);
    } else {
      setBlocked(false);
    }
  }, [blocked]);

  useEffect(() => {
    if (aux) {
      const results = info.filter((info) => info.id.includes(query));
      setSearchResults(results);
    }
  }, [query]);

  const handlerSelect = (item) => {
    setAux(false);
    setQuery(item.identification);
    setSearchResults([]);
    sendData({ name: item.name, lastname: item.lastname, identification: item.identification });
  };
  return (
    <>
      { blocked && !info.length && (
        <Alert variant='danger' className='w-100'>
          <small>
            <MdErrorOutline size='20' />
            Debes tener al menos un empleado para continuar
          </small>
        </Alert>
      )}
      <Form.Control
        placeholder='Digite su No de documento'
        value={query}
        disabled={blocked}
        autoComplete='off'
        onChange={(handleChange)}
      />
      <ListGroup as='ul' className='AutocompleteText'>
        {query.length > 0 ? searchResults.map((item) => (
          <ListGroup.Item onClick={() => handlerSelect(item)} as='li' variant='light' id={item.id} key={item.id}>
            {' '}
            {item.identification}
            {' '}
            {item.name}
            {' '}
            {item.lastname}
          </ListGroup.Item>
        )) : ' '}
      </ListGroup>
    </>
  );

}

AuthPointAttention.propTypes = {
  visibleAlert: PropTypes.any,
};

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

export default connect(mapStateToProps, mapDispatchToProps)(AuthPointAttention);
