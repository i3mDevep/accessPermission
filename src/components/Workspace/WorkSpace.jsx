import React from 'react';
import { Container } from 'reactstrap';
import ListCardsChart from '../ListCardsChart/ListCardsChart';
import UsersTableRow from '../Tables/SimpleTable/UsersTableRow';
import CardInfo from '../CardInfo/CardInfo';

const Workspace = () => {
  return (
    <Container fluid>
      <CardInfo />
      <ListCardsChart />
      <UsersTableRow />
    </Container>
  );
};

export default Workspace;
