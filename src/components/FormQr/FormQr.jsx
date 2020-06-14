import React from 'react';
import { Form, Col, Card, Button, ListGroup } from 'react-bootstrap';
import QRCode from 'qrcode.react';
import { connect } from 'react-redux';
import { addUser } from '../../store/actions/addUsersAction';
import { WrapperFormQr, MycustomeCard, CustomeForm } from './style';
import useInputValue from '../../hooks/useInputValue';

const FormQr = ({ loading = false, error, addUser, isAuth }) => {

  const Name = useInputValue('');
  const Lastname = useInputValue('');
  const Identification = useInputValue('');
  const Address = useInputValue('');
  const Celphone = useInputValue('');
  const Age = useInputValue('');
  const Gender = useInputValue('');
  const Email = useInputValue('');
  const Locale = useInputValue('');

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    addUser(isAuth.email, {
      name: Name.value,
      lastname: Lastname.value,
      identification: Identification.value,
      address: Address.value,
      celphone: Celphone.value,
      age: parseInt(Age.value, 10),
      gender: Gender.value,
      email: Email.value,
      locale: Locale.value,
    });
    alert('registro completado');
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
  return (
    <div>

      <WrapperFormQr>
        <CustomeForm disabled={loading} id='CreateForm' onSubmit={handlerOnSubmit}>
          <Form.Group controlId='Name'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              placeholder='Ingrese su nombre'
              {...Name}
              required
              disabled={loading}
            />
          </Form.Group>

          <Form.Group controlId='Lastname'>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              placeholder='Ingrese su apellido'
              {...Lastname}
              required
              disabled={loading}
            />
          </Form.Group>

          <Form.Group controlId='Identification'>
            <Form.Label>Cedula o documento de indentificación</Form.Label>
            <Form.Control
              placeholder='Ingrese su Documento de Indentificación'
              {...Identification}
              required
              disabled={loading}
            />
          </Form.Group>

          <Form.Group controlId='Address'>
            <Form.Label>Dirección Residencia</Form.Label>
            <Form.Control
              placeholder='Donde vives?'
              {...Address}
              required
              disabled={loading}
            />
          </Form.Group>

          <Form.Group controlId='Celphone'>
            <Form.Label>Número Telefónico</Form.Label>
            <Form.Control
              type='tel'
              placeholder='Celular'
              {...Celphone}
              required
              disabled={loading}
            />
          </Form.Group>

          <Form.Group controlId='locale'>
            <Form.Label>Sedé o lugar de trabajo</Form.Label>
            <Form.Control
              type='text'
              placeholder='Cual es su lugar de trabajo?'
              {...Locale}
              disabled={loading}
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
                disabled={loading}
              />
            </Form.Group>

            <Form.Group as={Col} controlId='Gender'>
              <Form.Label>Género</Form.Label>
              <Form.Control
                placeholder='Gender.'
                required
                {...Gender}
                as='select'
                disabled={loading}
                //defaultValue='Seleccione un género...'
              >
                <option>Seleccione un género...</option>
                <option>Hombre</option>
                <option>Mujer</option>
                <option>Otro</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId='Email'>
              <Form.Label>Corre electrónico</Form.Label>
              <Form.Control
                required
                placeholder='Email'
                type='email'
                {...Email}
                disabled={loading}
              />
            </Form.Group>
          </Form.Row>
        </CustomeForm>
        <MycustomeCard>
          <Card.Body className='text-center w-100'>
            <QRCode includeMargin={false} size={200} id='qrid' value={`,,qrardobot,,${Name.value},${Lastname.value},${Identification.value},${Address.value},${Celphone.value},${Locale.value},${Age.value},${Gender.value},`} />
          </Card.Body>
          <Card.Body>
            <Card.Title>Verifica tus datos!</Card.Title>
            <ListGroup>
              <ListGroup.Item className='p-1 text-secondary'>{Name.value || 'Nombre'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Lastname.value || 'Apellido'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Identification.value || 'Documento'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Address.value || 'Dirección'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Celphone.value || 'No telefónico'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Locale.value || 'Sede'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Age.value || 'Edad'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Gender.value || 'Genero'}</ListGroup.Item>
              <ListGroup.Item className='p-1 text-secondary'>{Email.value || 'Correo Electrónico'}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Card.Body className='m-auto'>
            <Button variant='primary' type='submit' form='CreateForm' className='mr-2'>Registrar</Button>
            <Button variant='info' onClick={handlerDownload}>Descargar QR</Button>
          </Card.Body>
        </MycustomeCard>
      </WrapperFormQr>
    </div>

  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (bussines, info) => dispatch(addUser(bussines, info)),
  };
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormQr);
