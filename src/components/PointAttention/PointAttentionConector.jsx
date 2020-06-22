import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import { MdErrorOutline } from 'react-icons/md';

const PointAttentionConector = ({ loading = false, worker, isAuth, visibleAlert, showAlert, sedes = [] }) => {
  const [Sede, setSede] = useState({ value: '', id: '' });

  return (
    <Form disabled={loading} id='CreateForm'>
      <Form.Group controlId='exampleForm.ControlSelect1'>
        { loading && !sedes.length && (
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
          disabled={loading}
        >
          <option>Seleccione SEDE</option>
          {
            sedes.map((subCompany) => <option id={subCompany.id} key={`id-${subCompany.id}`}>{subCompany.namesubcompany}</option>)
          }
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default PointAttentionConector;
