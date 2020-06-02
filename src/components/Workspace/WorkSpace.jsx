import React from 'react';
import { ContainerWorkspace } from './style';
import ListCardsChart from '../ListCardsChart/ListCardsChart';
import ListCardsInformation from '../ListCardsInformation/ListCardInformation';
import ListTables from '../Tables/ListTables/ListTables';
import { HeaderPerfil } from '../HeaderPerfil';

const Workspace = () => {
  return (

    <ContainerWorkspace>
      <HeaderPerfil />
      <ListCardsInformation />
      <ListCardsChart />
      <ListTables />
    </ContainerWorkspace>
  );
};

export default Workspace;
