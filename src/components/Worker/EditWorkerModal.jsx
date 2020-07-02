import React, { useState } from 'react';
import { Button, Modal, Form, Col, Alert } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import Switch from '@material-ui/core/Switch';
import { LoopCircleLoading } from 'react-loadingg';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useInputValue from '../../hooks/useInputValue';

const EditWorkerModal = ({ init, loading = false, blocked = false, ...rest }) => {
  console.log(init);
  const Name = useInputValue(init.singlename);
  const Lastname = useInputValue(init.singlelastname);
  const Identification = useInputValue(init.identification);
  const Address = useInputValue(init.address);
  const Celphone = useInputValue(init.celphone);
  const Age = useInputValue(init.age);
  const Gender = useInputValue(init.gender);
  const Email = useInputValue(init.email);
  const Salary = useInputValue(init.salary);
  const Contrate = useInputValue(init.contrate);
  const Cargo = useInputValue(init.cargo);
  const [Sede, setSede] = useState({ value: '', id: '' });

  const handlerOnSubmit = (e) => {
    e.preventDefault();
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
          <FiEdit size='30' color='green' />
          {' '}
          Editar Informacion de Empleado
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
        <Form disabled={blocked} id='CreateForm' onSubmit={handlerOnSubmit}>
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

          <Form.Group controlId='Identification'>
            <Form.Label>Cedula o documento de indentificación</Form.Label>
            <Form.Control
              placeholder='Documento del empleado'
              {...Identification}
              required
              disabled={true}
            />
          </Form.Group>

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
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type='number'
                placeholder='Edad del empleado'
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
                placeholder='$ 000.000'
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
              <div style={{display: 'flex', flexDirection:'column' }}>
                <Form.Label>Estado del trabajador</Form.Label>
                <FormControlLabel
                  control={(
                    <Switch
                      checked={true}
                      //onChange={handleChange}
                      name='checkedA'
                    />
                  )}
                />
              </div>
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditWorkerModal;
