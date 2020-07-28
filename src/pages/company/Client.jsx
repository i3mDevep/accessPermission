import React from 'react';
import { Container } from 'react-bootstrap';
import TableClientsContainer from '../../containers/CompanyContainers/Clients/TableClientsContainer';
import CardsClientsContainer from '../../containers/CompanyContainers/Clients/CardsClientsContainer';

const Client = () => {
  return (
    <Container fluid>
      <CardsClientsContainer />
      <TableClientsContainer />
    </Container>
  );
};

export default Client;
