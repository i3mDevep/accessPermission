import React, { forwardRef } from 'react';
import { connect } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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
import DeleteIcon from '@material-ui/icons/Delete';
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

function WorkerTableRow({ worker = [], onClickDeleteWorker }) {
  const data = [];
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
          columns={[
            { title: 'Nombre', field: 'name' },
            { title: 'Identificación', field: 'identification' },
            { title: 'Género', field: 'gender' },
            { title: 'Edad', field: 'age' },
            { title: 'Dirección', field: 'address' },
            { title: 'Teléfono', field: 'celphone' },
            { title: 'Sede', field: 'sede' },
            { title: 'Id', field: 'idsede', hidden: true },
            { title: 'Register', field: 'time' },
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
          actions={[
            {
              icon: () => <GpsFixedIcon />,
              tooltip: 'Info Worker',
              onClick: (event, rowData) => alert(`info ${rowData.name}`),
            },
            {
              icon: () => <Edit style={{ color: red[900], fontSize: 20 }} />,
              tooltip: 'Edit Worker',
              onClick: (event, rowData) => alert(`info ${rowData.name}`),
            },
            {
              icon: () => <DeleteIcon />,
              tooltip: 'Delete Worker',
              onClick: onClickDeleteWorker,
            },
          ]}
        />
      </ThemeProvider>
    </div>
  );
}

function ApointUserAuthTableRow() {
  const [state, setState] = React.useState({
    columns:[
      { title: 'Nombre', field: 'name' },
      { title: 'Identificación', field: 'identification' },
      { title: 'Género', field: 'gender' },
      { title: 'Edad', field: 'age' },
      { title: 'Dirección', field: 'address' },
      { title: 'Teléfono', field: 'celphone' },
      { title: 'Ingreso', field: 'celphone' },
      { title: 'Salida', field: 'celphone' },

    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });
  return (
    <div style={{ maxWidth: '100%' }}>
      <ThemeProvider theme={theme}>
        <MaterialTable
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
          }}

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
  ApointUserAuthTableRow: connect(mapStateProps, null)(ApointUserAuthTableRow)
};

