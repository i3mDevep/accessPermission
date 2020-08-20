import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';

import { tableIcons } from '../icons';

import TableClientsTrackingContainer from '../../../containers/CompanyContainers/Clients/TableClientsTrackingContainer';

const TableClients = ({ clients = [], isAuth, subcompanies }) => {

  const data = [];
  clients.forEach((client) => {
    try {
      data.push({
        name: client.name,
        identification: client.id,
        gender: client.gender,
        birth: typeof client.birth === 'object' ? moment(client.birth.toDate().toISOString()).locale('es').calendar() : client.birth,
        address: client.address,
        telphone: client.cellphone,
        time: typeof client.time === 'object' ? moment(client.time.toDate().toISOString()).format('LLL') : client.time,
      });
    } catch (err) {

    }
  });
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        id='mytable'
        icons={tableIcons}
        title='Reporte de clientes'
        columns={[
          { title: 'Nombre', field: 'name' },
          { title: 'Identificación', field: 'identification' },
          { title: 'Genero', field: 'gender' },
          { title: 'Fecha de Nacimiento', field: 'birth' },
          { title: 'Dirección', field: 'address' },
          { title: 'Teléfono', field: 'telphone' },
          { title: 'Registro', field: 'time' },
        ]}
        data={data}
        detailPanel={[
          {
            tooltip: 'Seguimiento',
            render: (rowData) => <TableClientsTrackingContainer info={rowData} isAuth={isAuth} />,
          },
        ]}
        options={{
          draggable: false,
          filtering: false,
          search: true,
          headerStyle: {
            backgroundImage: 'linear-gradient(#120136, #01579b)',
            color: '#FFF',
          },
        }}
      />
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    clients: state.firestore.ordered.clients,
  };
};
export default connect(mapStateProps, null)(TableClients);
