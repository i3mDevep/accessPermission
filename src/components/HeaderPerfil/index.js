import React from "react";
import { Header, Image, Title } from "./style";
import  { MdDashboard } from 'react-icons/md'

const DEFAULT_IMAGE =
  "https://cdn2.iconfinder.com/data/icons/scenarium-vol-4/128/015_avatar_astronaut_space_gagarin_cosmonaut_discover_cosmos-512.png";

export const HeaderPerfil = () => {
  return (
    <div>
      <Header>
        <Title><MdDashboard/> DASHBOARD</Title>
        <Image src={DEFAULT_IMAGE} />
      </Header>
      <hr />
    </div>
  );
};
