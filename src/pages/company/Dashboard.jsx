import React from 'react';
import { Container } from 'react-bootstrap';
import ListCardsChart from '../../components/ListCardsChart/ListCardsChart';
import TableClientsContainer from '../../containers/CompanyContainers/Clients/TableClientsContainer';
import CardsClientsContainer from '../../containers/CompanyContainers/Clients/CardsClientsContainer';

const Dashboard = () => {
  return (
    <Container fluid>
      <CardsClientsContainer />
      <ListCardsChart />
      <TableClientsContainer />
    </Container>
  );
};

export default Dashboard;
