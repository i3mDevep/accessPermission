import React from 'react';
import { connect } from 'react-redux';
import { Card, Col, Container, Row, Button, Modal, Form } from 'react-bootstrap';
import { IoIosAdd } from 'react-icons/io';

function PoindOfSale(props) {
  const handlerOnSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Crear Nueva Sede
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handlerOnSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text>Ingrese un correo @suempresa para iniciar sesión </Form.Text>
            </Form.Group>
            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId='formGridAddress1'>
            <Form.Label>Dirección</Form.Label>
            <Form.Control placeholder='Donde está úbicado el punto de venta?' />
          </Form.Group>
          <Form.Group controlId='formGridAddress2'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type='text' placeholder='Nombre del Punto de venta o Sede' />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>Ciudad</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group type='text' as={Col} controlId='formGridState'>
              <Form.Label>Estado</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>Persona a Cargo</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>Número Telefónico</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
          </Form.Row>
          <Button variant='primary' type='submit'>
            Guardar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default PoindOfSale;
