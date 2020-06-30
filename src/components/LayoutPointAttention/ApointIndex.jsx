import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RiQrCodeLine } from 'react-icons/ri';
import { MdDashboard, MdFiberNew } from 'react-icons/md';
import { GrUserWorker } from 'react-icons/gr';
import LayoutPointAttention from './LayoutPointAttention/LayoutPointAttention';
import './style.scss';

const ApointIndex = ({ subCompanies, response, children }) => {

  const [icon, setIcon] = useState();
  const [title, setTitle] = useState('');
  const url = window.location.pathname;
  useEffect(() => {
    switch (url) {
      case '/control':
        setIcon(() => <RiQrCodeLine />);
        setTitle('Control Acceso');
        break;
      case '/empleadospoint':
        setIcon(() => <GrUserWorker />);
        setTitle('Empleados Punto de Venta');
        break;
      case '/sedes':
        setIcon(() => <MdFiberNew />);
        setTitle('EMPLEADOS');
        break;
      default:
        setIcon(() => <MdDashboard />);
        setTitle('DASHBOARD');
    }
  }, [url], [title]);

  return (
    <LayoutPointAttention>
      { children }
    </LayoutPointAttention>
  );

};

const mapStateToProps = (state) => ({
});

export default connect(
  mapStateToProps,
  {},
)(ApointIndex);
