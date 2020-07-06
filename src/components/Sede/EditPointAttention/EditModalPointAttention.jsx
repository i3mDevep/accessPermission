import React, { useState } from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import Switch from '@material-ui/core/Switch';
import { LoopCircleLoading } from 'react-loadingg';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useInputValue from '../../../hooks/useInputValue';

const EditModalPointAttention = ({ onSubmit, init, loading = false, ...rest }) => {
  const namesubcompany = useInputValue(init.namesubcompany);
  const email = useInputValue(init.email);
  const password = useInputValue('*********');
  const cellphone = useInputValue(init.cellphone);
  const address = useInputValue(init.address);
  const city = useInputValue(init.city);
  const nameperson = useInputValue(init.nameperson);
  const estate = useInputValue(init.estate);
  const [state, setState] = useState({
    checkedA: init.status,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Modal
      {...rest}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <FiEdit size='30' colot='red' />
          {' '}
          Editar Sede o Punto de venta
        </Modal.Title>
        {
          loading && (
            <div style={{ zIndex: '1000' }}>
              <LoopCircleLoading />
            </div>
          )
        }

      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Corre Electrónico</Form.Label>
              <Form.Control
                disabled={true}
                type='email'
                required={true}
                {...email}
                placeholder='Enter email'
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label>Contaseña</Form.Label>
              <Form.Control
                disabled={true}
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
              disabled={true}
              placeholder='Nombre de la Tienda '
              type='text'
              required={true}
              {...namesubcompany}
            />
          </Form.Group>
          <Form.Group controlId='formGridAddress1'>
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              disabled={loading}
              placeholder='AV / Calle '
              type='text'
              required={true}
              {...address}
            />
          </Form.Group>
          <Form.Group controlId='formGridAdmin'>
            <Form.Label>Persona a Cargo</Form.Label>
            <Form.Control
              disabled={loading}
              placeholder=' Administrador de la Tienda'
              type='text'
              required={true}
              {...nameperson}
            />
          </Form.Group>

          <Form.Group controlId='formGridPerson2'>
            <Form.Label>Teléfono o Celular</Form.Label>
            <Form.Control
              disabled={loading}
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
                disabled={loading}
                type='text'
                required={true}
                {...city}

              />
            </Form.Group>
            <Form.Group as={Col} controlId='formGridEstate'>
              <Form.Label>Estado</Form.Label>
              <Form.Control
                disabled={loading}
                type='text'
                required={true}
                {...estate}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group as={Col} controlId='status'>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Form.Label>Estado de la sede</Form.Label>
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
          <Button
            disabled={loading}
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

export default EditModalPointAttention;
