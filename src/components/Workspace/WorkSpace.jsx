import React from 'react';
import { ContainerWorkspace } from './style';
import ListCardsChart from '../ListCardsChart/ListCardsChart';
import ListCardsInformation from '../ListCardsInformation/ListCardInformation';
import ListTables from '../Tables/ListTables/ListTables';
import { HeaderPerfil } from '../HeaderPerfil';
import { MyChartLine } from '../Charts';

const Workspace = () => {
  return (
    <ContainerWorkspace>
      <HeaderPerfil />
      <ListCardsInformation />
      <MyChartLine />
      <ListCardsChart />
      <ListTables />
    </ContainerWorkspace>
  );
};

export default Workspace;
