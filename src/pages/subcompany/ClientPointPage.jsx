import React from 'react';
import Container from '@material-ui/core/Container';
import ClientTrackingTable from '../../containers/SubCompanyContainers/TrackingClients/ClientTrackingTable';
import ClientTotalForDayCards from '../../containers/SubCompanyContainers/TrackingClients/ClientTotalForDayCards';

const ClientPointPage = () => {

  return (
    <Container fluid>
      <h3 className='text-center m-3'>Seguimiento clientes</h3>
      <ClientTotalForDayCards />
      <ClientTrackingTable />
    </Container>
  );
};

export default ClientPointPage;
