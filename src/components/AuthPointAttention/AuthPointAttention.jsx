import React, { useEffect, useState } from 'react';
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

const AuthPointAttention = ({ traking, visibleAlert, worker = [], isAuth, showAlert }) => {

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [value, setValue] = useState(new Date());
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [identification, setIdentification] = useState('');
  const [action, setAction] = useState(' ');

  const options = [
    { value: 'in', label: 'Entrada' },
    { value: 'out', label: 'Salida' },
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000,
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  const h = value.getHours();
  const m = value.getMinutes();
  const s = value.getSeconds();

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const handleChangeSelect = (event) => {
    setAction(event.currentTarget.value);
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    if (action && identification) {
      traking({
        action,
        identification,
        position: 'SubCompany Name',
      });

    } else {
      showAlert({
        type: 'error',
        title: 'Opss!',
        content: 'Revisa tus campos de identificación o evento',
        timeout: 3000,
        showCancel: false,
      });
    }
  };
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
                      console.log(sendData);
                      setName(data.name);
                      setLastName(data.lastname);
                      setIdentification(data.identification);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId='action'>
                  <Form.Control
                    required

                    as='select'
                    onChange={handleChangeSelect}
                  >
                    <option>Seleccione un evento</option>
                    {options.map(({ label, value }, i) => (
                      <option key={value[i]} value={value}>
                        {label}
                      </option>
                    ))}
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
                    placeholder='Nombre'
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
        <Col sm={10} md={6} style={{ margin: '0 auto' }}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Hora de Registro
              </Typography>
              <Webcam
                className='embed-responsive embed-responsive-16by9'
                audio={false}
                ref={webcamRef}
                screenshotFormat='image/jpeg'
                text='img'
                controls
              />
              <Typography variant='body2' color='textSecondary' component='p'>
                {h % 12}
                :
                {(m < 10 ? `0${m}` : m)}
                :
                {(s < 10 ? `0${s}` : s)}
                {' '}
                {h < 12 ? 'am' : 'pm'}
              </Typography>
              <br />
              <Button className='primary' onClick={capture}>Registrar</Button>
            </CardContent>
          </Card>
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
  const [blocked, setBlocked] = useState('');

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
      const result = true;
      setBlocked(result);
    } else {
      const result = false;
      setBlocked(result);
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
