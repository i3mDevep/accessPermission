import React from 'react';
import { Form, Col, Card, Button } from 'react-bootstrap';
import QRCode from 'qrcode.react';

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
      <ContainerHeader>
        <HeaderPerfil title='GENERATE QR'>
          <RiQrCodeLine />
        </HeaderPerfil>
      </ContainerHeader>
      <Card>
        <Card.Body>
          <WrapperFormQr>
            <Card style={{ width: '28rem' }}>
              <Card.Body>
                <div className='text-center '>
                  <QRCode size='200' id='qrid' value={`,,qrardobot,,${Name.value},${Lastname.value},${Identification.value},${Address.value},${Celphone.value},${Locale.value},${Age.value},${Gender.value},`} />
                </div>
              </Card.Body>
              <Card.Body>
                <Button onClick={handlerDownload} variant='primary'>Download</Button>
              </Card.Body>
            </Card>
            <Form disabled={loading} className=' p-3 m-5'>
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
                    placeholder='Gender.'
                    required
                    {...Gender}
                    as='select'
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
