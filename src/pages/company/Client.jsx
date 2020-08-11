import React from 'react';
import { Container } from 'react-bootstrap';
import TableClientsContainer from '../../containers/CompanyContainers/Clients/TableClientsContainer';
import CardInfo from '../../components/CardInfo/CardInfo';

const Client = () => {
  return (
    <Container fluid>
      <h3 className='text-center m-3'>Seguimiento clientes</h3>
      <CardInfo.CardInfoUsers />
      <TableClientsContainer />
    </Container>
  );
};

export default Client;
