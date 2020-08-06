import React from 'react';
import { Container } from 'react-bootstrap';
import PayrollContainer from '../../containers/CompanyContainers/TrackingContainer';

const Payroll = () => {
  return (
    <Container fluid>
      <h3 className='text-center m-3'>Seguimiento empleados</h3>
      <PayrollContainer />
    </Container>
  ) ;
};

export default Payroll;
