import React from 'react';
import { Container } from 'reactstrap';
import { ContainerWorkspace } from './style';
import ListCardsChart from '../ListCardsChart/ListCardsChart';
import ListTables from '../Tables/ListTables/ListTables';
import CardInfo from '../CardInfo/CardInfo';
import { HeaderPerfil } from '../HeaderPerfil';
// reactstrap components

const Workspace = () => {
  return (
    <Container fluid>
      <ContainerWorkspace>
        <HeaderPerfil />
        <CardInfo />
        <ListCardsChart />
        <ListTables />
      </ContainerWorkspace>
    </Container>
  );
};

export default Workspace;
