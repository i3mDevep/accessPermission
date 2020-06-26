import React, { useState, forwardRef } from 'react';
import { connect } from 'react-redux';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import SaveIcon from '@material-ui/icons/Save';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import { red } from '@material-ui/core/colors';


import './style.scss';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  SaveIcon: forwardRef((props, ref) => <SaveIcon {...props} ref={ref} />),
};

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'poppins',
    ].join(','),
  },
});

function UsersTableRow({ users = [] }) {
  const data = [];
  users.forEach((user) => {
    data.push({
      name: user.name,
      identification: user.identification,
      gender: user.gender,
      age: user.age,
      address: user.address,
      telphone: user.telphone,
      sede: user.sede,
      time: typeof user.time === 'object' ? moment(user.time.toDate().toISOString()).format('MMMM Do YYYY, h:mm:ss a') : 'null',
    });
  });
  return (
    <div style={{ maxWidth: '100%' }}>
      <ThemeProvider theme={theme}>
        <MaterialTable
          id='mytable'
          icons={tableIcons}
          title='Users'
          columns={[
            { title: 'Name', field: 'Nombre' },
            { title: 'Identification', field: 'Identificación' },
            { title: 'Gender', field: 'Género' },
            { title: 'Age', field: 'Edad' },
            { title: 'Address', field: 'Dirección' },
            { title: 'Telphone', field: 'Teléfono' },
            { title: 'Sede', field: 'Sede' },
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
      </ThemeProvider>
    </div>
  );
}

function WorkerTableRow({ worker = [], onClickDeleteWorker, props }) {
  const data = [];
  const [selectedRow, setSelectedRow] = useState(null);  
  const [columns, setColumns] = useState([
    {
      title: 'Name',
      field: 'name',
      editComponent: (props) => (
        <input
          type='text'
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      ),
    },
    { title: 'Nombre', field: 'name' },
    { title: 'Identificación', field: 'identification' },
    { title: 'Género', field: 'gender' },
    { title: 'Edad', field: 'age' },
    { title: 'Dirección', field: 'address' },
    { title: 'Teléfono', field: 'celphone' },
    { title: 'Sede', field: 'sede' },
    { title: 'Id', field: 'idsede', hidden: true },
    { title: 'Register', field: 'time' },
  ]);

  worker.forEach((worker) => {
    data.push({
      name: `${worker.name} ${worker.lastname}`,
      identification: worker.identification,
      gender: worker.gender,
      age: worker.age,
      address: worker.address,
      celphone: worker.celphone,
      sede: worker.sede.value,
      idsede: worker.sede.id,
      time: typeof worker.time === 'object' ? moment(worker.time.toDate().toISOString()).format('MMMM Do YYYY, h:mm:ss a') : 'null',
    });
  });

  return (
    <div style={{ maxWidth: '100%' }}>
      <ThemeProvider theme={theme}>
        <MaterialTable
          localization={{
            pagination: {
              labelDisplayedRows: '{from}-{to} of {count}',
            },
            toolbar: {
              nRowsSelected: '{0} row(s) selected',
            },
            header: {
              actions: 'Acción',
            },
            body: {
              emptyDataSourceMessage: 'No records to display',
              filterRow: {
                filterTooltip: 'Filter',
              },
            },
          }}
          icons={tableIcons}
          title='Worker'
          columns={columns}
          data={data}
          editable={{
            onRowAdd: (newData) => new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                resolve();
              }, 1000);
            }),
            onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                resolve();
              }, 1000);
            }),
            onRowDelete: (oldData) => new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                resolve();
              }, 1000);
            }),
          }}
          onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
          options={{
            actionsColumnIndex: -1,
            exportButton: true,
            draggable: false,
            filtering: false,
            search: true,
            headerStyle: {
              backgroundColor: '#01579b',
              color: '#FFF',
            },
            rowStyle: rowData => ({
              backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF',
            }),
          }}
          actions={[
            {
              icon: () => <GpsFixedIcon stylecolor='red' />,
              tooltip: 'status',
              onClick: (event, rowData) => alert(`info ${rowData.name}`),
            },
          ]}
        />
      </ThemeProvider>
    </div>
  );
}

function ApointUserAuthTableRow({ worker = [] }) {

  const [state, setState] = React.useState({
    columns: [
      { title: 'Nombre', field: 'name' },
      { title: 'Identificación', field: 'identification' },
      { title: 'Género', field: 'gender' },
      { title: 'Edad', field: 'age' },
      { title: 'Entrada', field: 'inpoint' },
      { title: 'Salida', field: 'outpoint' },
      { title: 'Horas Laborales', field: 'hrs' },
      { title: 'Novedad', field: 'status' },

    ],
    data: [
      { name: 'Andres Bermúdez', identification: '1018430535', gender: 'Hombre', age: '30', inpoint: ' 8:00 AM', outpoint: '6:00 PM', hrs: '8', status: true },
      { name: 'Andres Bermúdez', identification: '2033232322', gender: 'Hombre', age: '30', inpoint: ' 8:00 AM', outpoint: '6:00 PM', hrs: '8', status: true },
      { name: 'Andres Bermúdez', identification: '1511651651', gender: 'Hombre', age: '30', inpoint: ' 8:00 AM', outpoint: '6:00 PM', hrs: '8', status: false },
      { name: 'Andres Bermúdez', identification: '5616516516', gender: 'Hombre', age: '30', inpoint: ' 8:00 AM', outpoint: '6:00 PM', hrs: '8', status: true },
      { name: 'Andres Bermúdez', identification: '9661313512', gender: 'Hombre', age: '30', inpoint: ' 8:00 AM', outpoint: '6:00 PM', hrs: '8', status: false },
      { name: 'Andres Bermúdez', identification: '6516516516', gender: 'Hombre', age: '30', inpoint: ' 8:00 AM', outpoint: '6:00 PM', hrs: '8', status: true },
      { name: 'Andres Bermúdez', identification: '1018430535', gender: 'Hombre', age: '30', inpoint: ' 8:00 AM', outpoint: '6:00 PM', hrs: '8', status: false },
      { name: 'Andres Bermúdez', identification: '6516516516', gender: 'Hombre', age: '30', inpoint: ' 8:00 AM', outpoint: '6:00 PM', hrs: '8', status: true },
      { name: 'Andres Bermúdez', identification: '6511651616', gender: 'Hombre', age: '30', inpoint: ' 8:00 AM', outpoint: '6:00 PM', hrs: '8', status: true },
      { name: 'Andres Bermúdez', identification: '9849849849', gender: 'Hombre', age: '30', inpoint: ' 8:00 AM', outpoint: '6:00 PM', hrs: '8', status: true },
    ],
  });
  return (
    <div style={{ maxWidth: '100%' }}>
      <ThemeProvider theme={theme}>
        <MaterialTable
          icons={tableIcons}
          title='Control de Ingreso'
          columns={state.columns}
          data={state.data}
          localization={{
            pagination: {
              labelDisplayedRows: '{from}-{to} of {count}',
            },
            toolbar: {
              nRowsSelected: '{0} row(s) selected',
            },
            header: {
              actions: 'Acción',
            },
            body: {
              emptyDataSourceMessage: 'No records to display',
              filterRow: {
                filterTooltip: 'Filter',
              },
            },
          }}
          options={{
            draggable: false,
            filtering: false,
            search: true,
            actionsColumnIndex: -1,
          }}
          actions={[
            {
              icon: () => <GpsFixedIcon stylecolor='red' />,
              tooltip: 'status',
              onClick: (event, rowData) => alert(`info ${rowData.name}`),
            },
          ]}
        />
      </ThemeProvider>
    </div>
  );
}

const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    users: state.firestore.ordered.users,
    worker: state.firestore.ordered.worker,
  };
};
export default {
  UsersTableRow: connect(mapStateProps, null)(UsersTableRow),
  WorkerTableRow: connect(mapStateProps, null)(WorkerTableRow),
  ApointUserAuthTableRow: connect(mapStateProps, null)(ApointUserAuthTableRow),
};

