import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';

import { tableIcons } from '../icons';

import TableClientsTrackingContainer from '../../../containers/CompanyContainers/Clients/TableClientsTrackingContainer';

const TableClients = ({ clients = [], isAuth }) => {
  const data = [];
  clients.forEach((client) => {
    data.push({
      name: client.name,
      identification: client.id,
      gender: client.gender,
      age: client.age,
      address: client.address,
      telphone: client.cellphone,
      time: typeof client.time === 'object' ? moment(client.time.toDate().toISOString()).locale('es').format('LL') : 'null',
    });
  });
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        id='mytable'
        icons={tableIcons}
        title='Clients'
        columns={[
          { title: 'Nombre', field: 'name' },
          { title: 'Identificacion', field: 'identification' },
          { title: 'Genero', field: 'gender' },
          { title: 'Edad', field: 'age' },
          { title: 'Direccion', field: 'address' },
          { title: 'Celular', field: 'telphone' },
          { title: 'F.registro', field: 'time' },
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
