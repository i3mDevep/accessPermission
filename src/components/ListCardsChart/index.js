import React from "react";
import { CardChart } from "../CardChart";
import { List } from "./style";
import { MyChartBar, MyChartRadar, MyChartMix } from "../Charts";
import "../../../node_modules/react-vis/dist/style.css";

export const ListCardsChart = () => {
  return (
    <List>
      <CardChart>
        <MyChartBar color="#400082" />
      </CardChart>
      <CardChart>
        <MyChartRadar color="#323edd" />
      </CardChart>
      <CardChart>
        <MyChartMix color="#ff1e56" />
      </CardChart>
    </List>
  );
};
