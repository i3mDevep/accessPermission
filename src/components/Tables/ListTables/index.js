import React from "react";
import { PersonalInformation } from "../PersonalInfo";
import { TimeInformation } from "../TimeInfo";
import { ListContainer } from './style'

export const ListTables = () => {
  return (
    <ListContainer>
      <PersonalInformation />
      <TimeInformation />
    </ListContainer>
  );
};
