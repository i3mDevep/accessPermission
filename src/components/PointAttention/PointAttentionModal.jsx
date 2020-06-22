import React from 'react';
import { Button, Modal, Form, Col, Alert } from 'react-bootstrap';
import { BsFillInboxesFill } from 'react-icons/bs';
import useInputValue from '../../hooks/useInputValue';

const PointAttentionModal = (props, { onSubmit, result, error }) => {
  const namesubcompany = useInputValue('');
  const email = useInputValue('');
  const password = useInputValue('');
  const cellphone = useInputValue('');
  const address = useInputValue('');
  const city = useInputValue('');
  const nameperson = useInputValue('');
  const estate = useInputValue('');
  const identification = useInputValue('');

  console.log(onSubmit);

  const handlerSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      email: email.value,
      password: password.value,
      namesubcompany: namesubcompany.value,
      cellphone: cellphone.value,
      address: address.value,
      city: city.value,
      nameperson: nameperson.value,
      estate: estate.value,
      identification: identification.value,
    });
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <BsFillInboxesFill size='30' colot='red' />
          Crear Sede o Punto de venta
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handlerSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Corre Electrónico</Form.Label>
              <Form.Control
                type='email'
                required={true}
                {...email}
                placeholder='Enter email'
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label>Contaseña</Form.Label>
              <Form.Control
                type='current-password'
                placeholder='Administre una contraseña'
                required={true}
                {...password}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId='formGridName'>
            <Form.Label>Nombre del punto de venta</Form.Label>
            <Form.Control
              placeholder='AV / Calle '
              type='text'
              required={true}
              {...namesubcompany}

            />
          </Form.Group>
          <Form.Group controlId='formGridAddress1'>
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              placeholder='AV / Calle '
              type='text'
              required={true}
              {...address}

            />
          </Form.Group>
          <Form.Group controlId='formGridAdmin'>
            <Form.Label>Persona a Cargo</Form.Label>
            <Form.Control
              placeholder=' Administrador de la Tienda'
              type='text'
              required={true}
              {...nameperson}
            />
          </Form.Group>

          <Form.Group controlId='formGridPerson2'>
            <Form.Label>Teléfono o Celular</Form.Label>
            <Form.Control
              placeholder='..'
              type='text'
              required={true}
              {...cellphone}

            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type='text'
                required={true}
                {...city}

              />
            </Form.Group>
            <Form.Group as={Col} controlId='formGridEstate'>
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type='text'
                required={true}
                {...estate}
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridZip'>
              <Form.Label>Identificación</Form.Label>
              <Form.Control
                type='text'
                required={true}
                {...identification}
              />
            </Form.Group>
          </Form.Row>
          { error && (
            <Alert variant='danger'>
              <small>{error}</small>
            </Alert>
          )}
          <Button
            variant='primary'
            type='submit'
          >
            Guardar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default PointAttentionModal;
