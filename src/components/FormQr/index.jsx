import React, { useState } from 'react';
import { Form, Col, Card, Button, ListGroup, Row, Container, Alert } from 'react-bootstrap';
import QRCode from 'qrcode.react';
import { connect } from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';
import PropTypes from 'prop-types';
import { MdErrorOutline } from 'react-icons/md';
import useInputValue from '../../hooks/useInputValue';
import { showAlert } from '../../store/actions/sweetAlertActions';
import { getVisibleAlert } from '../../store/reducers/notificationRecucers';

const FormQr = ({ blocked = false, worker, isAuth, visibleAlert, showAlert, sedes = [] }) => {

  const Name = useInputValue('');
  const Lastname = useInputValue('');
  const Identification = useInputValue('');
  const Address = useInputValue('');
  const Celphone = useInputValue('');
  const Age = useInputValue('');
  const Gender = useInputValue('');
  const Email = useInputValue('');
  const [Sede, setSede] = useState({ value: '', id: '' });

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    if (Gender.value !== '' && Sede.id !== '') {
      worker(isAuth.uid,
        { name: Name.value,
          lastname: Lastname.value,
          identification: Identification.value,
          address: Address.value,
          celphone: Celphone.value,
          age: parseInt(Age.value, 10),
          gender: Gender.value,
          email: Email.value,
          sede: Sede,
        }, document.getElementById('qrid').toDataURL('image/png'));
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
    console.log(canvas.toDataURL('image/png'));
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
  return (
    <Container fluid>
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
                <option>Seleccione SEDE</option>
                {
                  sedes.map((subCompany) => <option id={subCompany.id} key={`id-${subCompany.id}`}>{subCompany.namesubcompany}</option>)
                }
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='Name'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                placeholder='Ingrese su nombre'
                {...Name}
                required
                disabled={blocked}
              />
            </Form.Group>

            <Form.Group controlId='Lastname'>
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                placeholder='Ingrese su apellido'
                {...Lastname}
                required
                disabled={blocked}
              />
            </Form.Group>

            <Form.Group controlId='Identification'>
              <Form.Label>Cedula o documento de indentificación</Form.Label>
              <Form.Control
                placeholder='Ingrese su Documento de Indentificación'
                {...Identification}
                required
                disabled={blocked}
              />
            </Form.Group>

            <Form.Group controlId='Address'>
              <Form.Label>Dirección Residencia</Form.Label>
              <Form.Control
                placeholder='Donde vives?'
                {...Address}
                required
                disabled={blocked}
              />
            </Form.Group>

            <Form.Group controlId='Celphone'>
              <Form.Label>Número Telefónico</Form.Label>
              <Form.Control
                type='tel'
                placeholder='Celular'
                {...Celphone}
                required
                disabled={blocked}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId='Age'>
                <Form.Label>Edad</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Cuantos años tienes?'
                  {...Age}
                  required
                  disabled={blocked}
                />
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
              <ListGroup.Item className='p-1 text-secondary'>{Email.value || 'Correo Electrónico'}</ListGroup.Item>
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
