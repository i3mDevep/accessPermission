import React from 'react';
import { ContainerWorkspace } from './style';
import ListCardsChart from '../ListCardsChart/ListCardsChart';
import ListTables from '../Tables/ListTables/ListTables';
import CardInfo from '../CardInfo/CardInfo';
import { HeaderPerfil } from '../HeaderPerfil';

const Workspace = () => {
  return (
    <ContainerWorkspace>
      <HeaderPerfil />
      <CardInfo />
      <ListCardsChart />
      <ListTables />
    </ContainerWorkspace>
  );
};

export default Workspace;
