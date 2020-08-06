import React from 'react';
import { Container } from 'react-bootstrap';
import TableClientsContainer from '../../containers/CompanyContainers/Clients/TableClientsContainer';
import CardsClientsContainer from '../../containers/CompanyContainers/Clients/CardsClientsContainer';

const Client = () => {
  return (
    <Container fluid>
      <h3 className='text-center m-3'>Seguimiento clientes</h3>
      <CardsClientsContainer />
      <TableClientsContainer />
    </Container>
  );
};

export default Client;
