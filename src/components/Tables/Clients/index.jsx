import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import { tableIcons } from '../icons';

const TableClients = ({ clients = [] }) => {
  console.log(clients);
  const data = [];
  clients.forEach((client) => {
    data.push({
      name: client.name,
      identification: client.id,
      gender: client.gender,
      age: client.age,
      address: client.address,
      telphone: client.cellphone,
    });
  });
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        id='mytable'
        icons={tableIcons}
        title='Clients'
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Identification', field: 'identification' },
          { title: 'Gender', field: 'gender' },
          { title: 'Age', field: 'age' },
          { title: 'Address', field: 'address' },
          { title: 'Telphone', field: 'telphone' },
          { title: 'Time', field: 'time' },
        ]}
        data={data}
        options={{
          draggable: false,
          filtering: false,
          search: true,
          headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF',
          },
        }}
      />
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    clients: state.firestore.ordered.clients,
  };
};
export default connect(mapStateProps, null)(TableClients);
