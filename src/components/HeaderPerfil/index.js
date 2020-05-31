import React from "react";
import { Header, Image, Label } from "./style";

const DEFAULT_IMAGE = "https://cdn2.iconfinder.com/data/icons/scenarium-vol-4/128/015_avatar_astronaut_space_gagarin_cosmonaut_discover_cosmos-512.png"

export const HeaderPerfil = () => {
  return (
    <Header>
        <Label>Name PERFIL</Label>
        <Image src={ DEFAULT_IMAGE }/>
    </Header>
  );
};
