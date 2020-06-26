import React, { useState, useEffect } from 'react';
import { RiQrCodeLine } from 'react-icons/ri';
import { MdDashboard, MdFiberNew } from 'react-icons/md';
import { GrUserWorker } from 'react-icons/gr';
import { Container } from 'react-bootstrap';
import Toolbox from './Toolbox/Toolbox';
import ToolboxCustome from './Toolbox/ToolboxCustome';
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
      case '/worker':
        setIcon(() => <GrUserWorker />);
        setTitle('WORKER');
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
      {/* <Toolbox />
      <Responsive>
        <HeaderPerfil title={title}>
          {
            icon
          }
        </HeaderPerfil>
        <Container fluid>
          { children }
        </Container>
      </Responsive> */}
      <ToolboxCustome>
        { children }
      </ToolboxCustome>
    </>
  );
};
export default LayoutDashboard;
