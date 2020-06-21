import React, { useState, useEffect } from 'react';
import { RiQrCodeLine } from 'react-icons/ri';
import { MdDashboard, MdFiberNew } from 'react-icons/md';
import { Container } from 'react-bootstrap';
import Toolbox from './Toolbox/Toolbox';
import HeaderPerfil from './HeaderPerfil';
import { Responsive } from './responsive';

const LayoutDashboard = ({ children }) => {
  const [icon, setIcon] = useState();
  const [title, setTitle] = useState('');
  const url = window.location.pathname;
  useEffect(() => {
    switch (url) {
      case '/generateqr':
        setIcon(() => <RiQrCodeLine />);
        setTitle('GENERADOR QR');
        break;
      case '/sedes':
        setIcon(() => <MdFiberNew />);
        setTitle('SEDES');
        break;
      default:
        setIcon(() => <MdDashboard />);
        setTitle('DASHBOARD');
    }
  }, [url], [title]);

  return (
    <>
      <Toolbox />
      <Responsive>
        <HeaderPerfil title={title}>
          {
            icon
          }
        </HeaderPerfil>
        <Container fluid>
          { children }
        </Container>
      </Responsive>
    </>
  );
};
export default LayoutDashboard;
