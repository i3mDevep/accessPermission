import React, { useState } from 'react';
import { Form, Col, Card, Button, ListGroup, Row, Container, Alert } from 'react-bootstrap';
import QRCode from 'qrcode.react';
import { connect } from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';
import PropTypes from 'prop-types';
import { MdErrorOutline } from 'react-icons/md';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import useInputValue from '../../hooks/useInputValue';
import { showAlert } from '../../store/actions/sweetAlertActions';
import { getVisibleAlert } from '../../store/reducers/notificationRecucers';
import ModalPhoto from './ModalPhoto';

const FormQr = ({ blocked = false, worker, isAuth, visibleAlert, showAlert, sedes = [] }) => {

  const [showCamera, setShowCamera] = useState(false);
  const [imageSrc, setimageSrc] = useState('');
  const [state, setState] = useState({
    checkedA: true,
  });
  const Name = useInputValue('');
  const Lastname = useInputValue('');
  const Identification = useInputValue('');
  const Address = useInputValue('');
  const Celphone = useInputValue('');
  const Age = useInputValue('');
  const Gender = useInputValue('');
  const Email = useInputValue('');
  const Salary = useInputValue('');
  const Contrate = useInputValue('');
  const Cargo = useInputValue('');
  const DocumentOption = useInputValue(' ');
  const [Sede, setSede] = useState({ value: '', id: '' });
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    if (Gender.value !== '' && Sede.id !== '') {
      worker(isAuth.uid,
        { name: Name.value,
          lastname: Lastname.value,
          identification: Identification.value,
          address: Address.value,
          celphone: Celphone.value,
          age: selectedDate,
          gender: Gender.value,
          email: Email.value,
          salary: Salary.value,
          contrate: Contrate.value,
          cargo: Cargo.value,
          status: state.checkedA,
          sede: Sede,
          typeDocument: DocumentOption.value,
        },
        document.getElementById('qrid').toDataURL('image/png'),
        imageSrc);
    } else {
      showAlert({
        type: 'error',
        title: 'Opss!',
        content: 'Revisa tus campos de genero o sede!',
        timeout: 3000,
        showCancel: false,
      });
    }
  };
  const handlerDownload = () => {
    const canvas = document.getElementById('qrid');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `qR${Identification.value}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Container fluid>
      <ModalPhoto
        show={showCamera}
        onHide={(imageSrc) => {
          setShowCamera(false);
          if (imageSrc) {
            setimageSrc(imageSrc);
          }
        }}
      />
      <Row>
        {visibleAlert && <SweetAlert {...visibleAlert}>{visibleAlert.content}</SweetAlert>}
        <Col sm={12} md={7} style={{ backgroundColor: 'white', padding: '25px', marginBottom: '10px' }}>
          <Form disabled={blocked} id='CreateForm' onSubmit={handlerOnSubmit}>
            <Form.Group controlId='exampleForm.ControlSelect1'>
              { blocked && !sedes.length && (
                <Alert variant='danger' className='w-100'>
                  <small>
                    <MdErrorOutline size='20' />
                    Debes tener al menos una sede registrada para continuar
                  </small>
                </Alert>
              )}
              <Form.Label>Sede</Form.Label>
              <Form.Control
                as='select'
                value={Sede.value}
                onChange={(e) => {
                  const index = e.target.selectedIndex;
                  setSede({ value: e.target.value, id: e.target.options[index].id });
                }}
                disabled={blocked}
              >
                <option>Seleccione una sede o Lugar de trabajo</option>
                {
                  sedes.map((subCompany) => <option id={subCompany.id} key={`id-${subCompany.id}`}>{subCompany.namesubcompany}</option>)
                }
              </Form.Control>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId='Name'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  placeholder='Ingrese nombre'
                  {...Name}
                  required
                  disabled={blocked}
                />
              </Form.Group>
              <Form.Group as={Col} controlId='Lastname'>
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  placeholder='Ingrese un apellido'
                  {...Lastname}
                  required
                  disabled={blocked}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group controlId='Identification'>
                <Form.Label>Documento de indentificación</Form.Label>
                <Form.Control
                  placeholder='Documento del empleado'
                  {...Identification}
                  required
                  disabled={blocked}
                />
              </Form.Group>
              <Form.Group as={Col} controlId='Tipo'>
                <Form.Label>Tipo de Documento</Form.Label>
                <Form.Control
                  placeholder='Tipo de documento.'
                  required
                  {...DocumentOption}
                  as='select'
                  disabled={blocked}
                >
                  <optgroup label='Tipo de documento'>
                    <option>Cédula de ciudadanía</option>
                    <option>Tarjeta de identidad</option>
                    <option>Documento de extrangería</option>
                  </optgroup>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId='Address'>
              <Form.Label>Dirección Residencia</Form.Label>
              <Form.Control
                placeholder='Dirección de residencia el empleado'
                {...Address}
                required
                disabled={blocked}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId='Celphone'>
                <Form.Label>Número Telefónico</Form.Label>
                <Form.Control
                  type='tel'
                  placeholder='Celular'
                  {...Celphone}
                  required
                  disabled={blocked}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='Email'>
                <Form.Label>Corre electrónico</Form.Label>
                <Form.Control
                  required
                  placeholder='Email'
                  type='email'
                  {...Email}
                  disabled={blocked}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId='Age'>
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

              <Form.Group as={Col} controlId='Gender'>
                <Form.Label>Género</Form.Label>
                <Form.Control
                  placeholder='Gender.'
                  required
                  {...Gender}
                  as='select'
                  disabled={blocked}
                  //defaultValue='Seleccione un género...'
                >
                  <option>Seleccione un género...</option>
                  <option>Hombre</option>
                  <option>Mujer</option>
                </Form.Control>
              </Form.Group>

            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId='contrate'>
                <Form.Label>Tipo de Contrato</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Indefinido / Fijo'
                  {...Contrate}
                  required
                  disabled={blocked}
                />
              </Form.Group>
              <Form.Group as={Col} controlId='salary'>
                <Form.Label>Salario básico</Form.Label>
                <Form.Control
                  placeholder='$ 0.000.000'
                  type='money'
                  {...Salary}
                  disabled={blocked}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId='cargo'>
                <Form.Label>Cargo </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Cargo a desempeñar'
                  {...Cargo}
                  required
                  disabled={blocked}
                />
              </Form.Group>
              <Form.Group as={Col} controlId='status'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Form.Label>Estado del trabajador</Form.Label>
                  <FormControlLabel
                    control={(
                      <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name='checkedA'
                      />
                    )}

                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} controlId='cargo'>
                <img onClick={() => setShowCamera(true)} style={{ borderRadius: '150px', width: '80px', height: '80px', objectFit: 'cover' }} alt='myperfil' src={imageSrc || 'https://cdn4.iconfinder.com/data/icons/electronics-2/256/Camera-128.png'} />
              </Form.Group>
            </Form.Row>
            {state.checkedA === true ? <Alert variant='success'>Activo</Alert> : <Alert variant='danger'>Inactivo</Alert>}
          </Form>
        </Col>
        <Col sm={12} md={4} style={{ backgroundColor: 'white', margin: '0 auto' }}>
          <Card.Body className='text-center w-100'>
            <QRCode includeMargin={false} size={200} id='qrid' value={`,,qrardobot,,${Name.value},${Lastname.value},${Identification.value},${Address.value},${Celphone.value},${Age.value},${Gender.value},${Sede.value},`} />
          </Card.Body>
          <Card.Body>
            <Card.Title>Verifica tus datos!</Card.Title>
            <ListGroup>
              <ListGroup.Item className='p-1 text-secondary'>{Name.value || 'Nombre'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Lastname.value || 'Apellido'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Identification.value || 'Documento'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Address.value || 'Dirección'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Celphone.value || 'No telefónico'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Sede.value || 'Sede'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Age.value || 'Edad'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Gender.value || 'Genero'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Contrate.value || 'Tipo de contrato'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Email.value || 'Correo Electrónico'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Cargo.value || 'Cargo'}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Card.Body className='m-auto'>
            <Button

              variant='primary'
              type='submit'
              form='CreateForm'
              className='mr-2'
              disabled={blocked}
            >
              Registrar
            </Button>
            <Button variant='info' disabled={blocked} onClick={handlerDownload}>Descargar QR</Button>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};
FormQr.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(FormQr);
