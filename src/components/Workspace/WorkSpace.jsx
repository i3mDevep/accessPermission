import React from 'react';
import { Container } from 'reactstrap';
import ListCardsChart from '../ListCardsChart/ListCardsChart';
import Tables from '../Tables/LayoutTable/Tables';
import CardInfo from '../CardInfo/CardInfo';

const Workspace = () => {
  return (
    <Container fluid>
      <CardInfo.CardInfoUsers />
      <ListCardsChart />
      <Tables.UsersTableRow />
    </Container>
  );
};

export default Workspace;
