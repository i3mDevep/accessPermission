import React from 'react';
import { MdDashboard } from 'react-icons/md';
import firebase from 'firebase/app';
import { Header, Image, Title } from './style';

const DEFAULT_IMAGE =
  'https://cdn2.iconfinder.com/data/icons/scenarium-vol-4/128/015_avatar_astronaut_space_gagarin_cosmonaut_discover_cosmos-512.png';

const HeaderPerfil = ({ title = 'DASHBOARD', children }) => {
  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
      <Header>
        <Title>
          {children || <MdDashboard />}
          {title}
        </Title>
        <div>
          <button onClick={logout}>log out</button>
          <Image src={DEFAULT_IMAGE} />
        </div>
      </Header>
      <hr />
    </div>
  );
};
export default HeaderPerfil;
