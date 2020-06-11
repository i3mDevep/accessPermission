import React from 'react';
import { Form, Col, Card, Button } from 'react-bootstrap';
import QRCode from 'react-qr-code';
import { RiQrCodeLine } from 'react-icons/ri';
import HeaderPerfil from '../HeaderPerfil';
import { WrapperFormQr, ContainerHeader } from './style';
import useInputValue from '../../hooks/useInputValue';

const FormQr = ({ onSubmit, loading, error }) => {
  const Name = useInputValue('');
  const Lastname = useInputValue('');
  const Identification = useInputValue('');
  const Address = useInputValue('');
  const Celphone = useInputValue('');
  const Age = useInputValue('');
  const Gender = useInputValue('');
  const Email = useInputValue('');
  const Locale = useInputValue('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    onSubmit({

      name: Name.value,
      lastname: Lastname.value,
      Identification: Identification.value,
      address: Address.value,
      telphone: Celphone.value,
      sede: Locale.value,
      age: Age.value,
      gender: Gender.value,
      email: Email.value
    });
  };


  return (
    <div>
      <ContainerHeader>
        <HeaderPerfil title='GENERATE QR'>
          <RiQrCodeLine />
        </HeaderPerfil>
      </ContainerHeader>
      <Card>
        <Card.Body>
          <WrapperFormQr>
            <QRCode value={`,,qrardobot,,${Name.value},${Lastname.value},${Identification.value},${Address.value},${Celphone.value},${Locale.value},${Age.value},${Gender.value},`} />
            <Form disabled={loading} onSubmit={handlerSubmit} className=' p-3 m-5'>
              <Form.Group controlId='Name'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  placeholder='Ingrese su nombre'
                  {...Name}
                  required
                />
              </Form.Group>

              <Form.Group controlId='Lastname'>
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  placeholder='Ingrese su apellido'
                  {...Lastname}
                  required
                />
              </Form.Group>

              <Form.Group controlId='Identification'>
                <Form.Label>Cedula o documento de indentificación</Form.Label>
                <Form.Control
                  placeholder='Ingrese su Documento de Indentificación'
                  {...Identification}
                  required

                />
              </Form.Group>

              <Form.Group controlId='Address'>
                <Form.Label>Dirección Residencia</Form.Label>
                <Form.Control
                  placeholder='Donde vives?'
                  {...Address}
                  required
                />
              </Form.Group>

              <Form.Group controlId='Celphone'>
                <Form.Label>Número Telefónico</Form.Label>
                <Form.Control
                  type='tel'
                  placeholder='Celular'
                  {...Celphone}
                  required
                />
              </Form.Group>

              <Form.Group controlId='locale'>
                <Form.Label>Sedé o lugar de trabajo</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Cual es su lugar de trabajo?'
                  {...Locale}
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
                  />
                </Form.Group>

                <Form.Group as={Col} controlId='Gender'>
                  <Form.Label>Género</Form.Label>
                  <Form.Control
                    placeholder='Gender'
                    required
                    {...Gender}
                    as='select'
                    defaultValue='Seleccione un género...'
                  >
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
                  />
                </Form.Group>
              </Form.Row>
              <div className='text-center'>
                      <Button type='submit' disabled={loading}>Guardar Usuario</Button>
              </div>
            </Form>
          </WrapperFormQr>
        </Card.Body>
      </Card>
    </div>

  );
};
export default FormQr;
