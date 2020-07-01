import React, { useState, useEffect } from 'react';
import { RiQrCodeLine } from 'react-icons/ri';
import { MdDashboard, MdFiberNew } from 'react-icons/md';
import { GrUserWorker } from 'react-icons/gr';
import ToolboxCustome from './Toolbox/ToolboxCustome';

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
      <ToolboxCustome>
        { children }
      </ToolboxCustome>
    </>
  );
};
export default LayoutDashboard;
