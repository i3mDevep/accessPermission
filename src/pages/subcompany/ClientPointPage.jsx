import React, { useEffect, useState, useRef } from 'react';
import { Container, Button } from 'react-bootstrap';
import TableClientsContainer from '../../containers/CompanyContainers/Clients/TableClientsContainer';
import ClientPointAttetion from '../../components/ClientPointAttention/ClientPointAttetion';

const ClientPointPage = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const onHide = () => setShow(false);

  console.log(show);
  return (
    <>
      <Container fluid>
        <ClientPointAttetion
          show={show}
          onHide={onHide}
        />
        <Button onClick={handleShow} variant='primary'>Registrar</Button>
        <br />
        <TableClientsContainer />
      </Container>
    </>
  );
};

export default ClientPointPage;
