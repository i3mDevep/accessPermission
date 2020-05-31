import React from "react";
import { ContainerWorkspace } from "./style";
import { ListCardsChart } from "../ListCardsChart";
import { ListCardsInformation } from "../ListCardsInformation";
import { ListTables } from "../Tables/ListTables";
import { HeaderPerfil } from "../HeaderPerfil";
import './p.css'

import {
  chartExample1
} from "../../variables/charts";

import { Card, CardBody } from "reactstrap";
//data1
import { Line, Bar } from "react-chartjs-2";

export const Workspace = () => {
  return (
    <ContainerWorkspace>
      <HeaderPerfil />
      <ListCardsInformation />
      <Card>
      <CardBody>
        <div className="chart-area">
          <Line data={chartExample1["data1"]} options={chartExample1.options} />
        </div>
      </CardBody>
      </Card>
      <ListCardsChart />
      <ListTables />
    </ContainerWorkspace>
  );
};
