import React from 'react';
import { Form, Col } from 'react-bootstrap';
import QRCode from 'react-qr-code';
import { RiQrCodeLine } from 'react-icons/ri';
import HeaderPerfil from '../HeaderPerfil';
import { WrapperFormQr, ContainerHeader } from './style';
import useInputValue from '../../hooks/useInputValue';

const FormQr = () => {
  const Name = useInputValue('');
  const Identification = useInputValue('');
  const Address = useInputValue('');
  const Celphone = useInputValue('');
  const Age = useInputValue('');
  const Gender = useInputValue('');
  const Email = useInputValue('');

  return (
    <div>
      <ContainerHeader>
        <HeaderPerfil title='GENERATE QR'>
          <RiQrCodeLine />
        </HeaderPerfil>
      </ContainerHeader>
      <WrapperFormQr>
        <QRCode value={`,,qrardobot,,${Name.value},${Identification.value},${Address.value},${Celphone.value},${Age.value},${Gender.value},`} />
        <Form className=' p-3 m-5'>

          <Form.Group controlId='Name'>
            <Form.Control
              placeholder='Name'
              {...Name}
            />
          </Form.Group>

          <Form.Group controlId='Identification'>
            <Form.Control
              placeholder='Identification'
              {...Identification}
            />
          </Form.Group>

          <Form.Group controlId='Address'>
            <Form.Control
              placeholder='Address'
              {...Address}
            />
          </Form.Group>

          <Form.Group controlId='Celphone'>
            <Form.Control
              placeholder='Celphone'
              {...Celphone}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId='Age'>
              <Form.Control
                placeholder='Age'
                {...Age}
              />
            </Form.Group>

            <Form.Group as={Col} controlId='Gender'>
              <Form.Control placeholder='Gender' {...Gender} />
            </Form.Group>

            <Form.Group as={Col} controlId='Email'>
              <Form.Control placeholder='Email' {...Email} />
            </Form.Group>
          </Form.Row>
        </Form>
      </WrapperFormQr>
    </div>

  );
};
export default FormQr;
