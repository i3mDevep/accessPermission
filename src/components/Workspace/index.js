import React from "react";
import { ContainerWorkspace } from "./style";
import { ListCardsChart } from "../ListCardsChart";
import { ListCardsInformation } from "../ListCardsInformation";
import { ListTables } from "../Tables/ListTables";
import { HeaderPerfil } from "../HeaderPerfil";
import { MyChartLine } from '../Charts'

export const Workspace = () => {
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
