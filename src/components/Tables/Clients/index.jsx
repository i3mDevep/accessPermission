import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import firebase from 'firebase/app';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { tableIcons } from '../icons';

const TableClients = ({ clients = [], isAuth }) => {
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
          { title: 'Name', field: 'name' },
          { title: 'Identification', field: 'identification' },
          { title: 'Gender', field: 'gender' },
          { title: 'Age', field: 'age' },
          { title: 'Address', field: 'address' },
          { title: 'Telphone', field: 'telphone' },
          { title: 'Time', field: 'time' },
        ]}
        data={data}
        detailPanel={[
          {
            tooltip: 'Show Name',
            render: (rowData) => <Mytracking info={rowData} isAuth={isAuth} />,
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
const useStyles = makeStyles({
  table: {
    width: 560,
  },
});

const Mytracking = ({ info, isAuth }) => {

  const classes = useStyles();

  const [tracking, setTracking] = useState([]);
  useEffect(() => {
    const db = firebase.firestore();
    const ref = `business/${isAuth.uid}/clients/${info.identification}/tracking`;
    console.log(ref);
    db.collection(ref).get()
      .then((querySnapshot) => {
        const mydata = [];
        querySnapshot.forEach((doc) => {
          mydata.push(doc.data());
          console.log(doc.id, ' => ', doc.data());
        });
        setTracking(mydata);
      });
  }, []);
  return (
    <div
      style={{
        fontSize: 100,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#43A047',
      }}
    >
      <TableContainer component={Paper}>
        <Table className={classes.table} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Localizacion</TableCell>
              <TableCell align='right'>Temperatura</TableCell>
              <TableCell align='right'>Tiempo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tracking.map((row) => (
              <TableRow key={row.identification}>
                <TableCell component='th' scope='row'>
                  {row.gps}
                </TableCell>
                <TableCell align='right'>{row.temperature}</TableCell>
                <TableCell align='right'>{typeof row.time === 'object' ? moment(row.time.toDate().toISOString()).locale('es').format('MMMM Do YYYY, h:mm:ss a') : 'null'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
