import React from 'react';
import { Container } from 'reactstrap';
import { ContainerWorkspace } from './style';
import ListCardsChart from '../ListCardsChart/ListCardsChart';
import UsersTableRow from '../Tables/SimpleTable/UsersTableRow';
import CardInfo from '../CardInfo/CardInfo';
import HeaderPerfil from '../HeaderPerfil';
// reactstrap components

const Workspace = () => {
  return (
    <Container fluid>
      <ContainerWorkspace>
        <HeaderPerfil />
        <CardInfo />
        <ListCardsChart />
        <UsersTableRow />
      </ContainerWorkspace>
    </Container>
  );
};

export default Workspace;
