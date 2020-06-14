import React from 'react';
import { MdDashboard } from 'react-icons/md';
import firebase from 'firebase/app';
import { Dropdown, Row } from 'react-bootstrap';
import { Header, Image, Title, CustomeDropdownTogle, CustomeDropdown } from './style';

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
        <Row>
          <CustomeDropdown>
            <CustomeDropdownTogle variant='info' id='dropdown-basic' />
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => logout()}>logout</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Item>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </CustomeDropdown>
          <Image src={DEFAULT_IMAGE} />

        </Row>

      </Header>
      <hr />
    </div>
  );
};
export default HeaderPerfil;
