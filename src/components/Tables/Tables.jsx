import React, { useState, forwardRef } from 'react';
import { connect } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import moment from 'moment';
import MaterialTable, { MTableToolbar } from 'material-table';
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
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import ImageSearch from '@material-ui/icons/ImageSearch';
import TablePagination from '@material-ui/core/TablePagination';
import { green, grey, red, purple } from '@material-ui/core/colors';
import { Form, Col, Card, Button, ListGroup, Row, Container, Alert, Modal } from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './style.scss';
import 'react-datepicker/dist/react-datepicker.css';
import firebase from 'firebase/app';

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
  AccountCircleIcon: forwardRef((props, ref) => <AccountCircleIcon {...props} ref={red} />),
};

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'poppins',
    ].join(','),
  },
  palette: {
    secondary: {
      main: grey[500],
      dark: red[500],
    },
    primary: {
      main: '#43a047',
    },
  },
});

function WorkerTableRow({ worker = [], onClickDeleteWorker, onClickEditWorker }) {
  const [selectedRow, setSelectedRow] = useState(null);
  const data = [];
  const columns = [
    {
      title: 'Fotografía',
      field: 'Registro',
      render: (rowData) => (
        !rowData.img ? (
          <BrokenImageIcon alt='nophoto' style={{ fontSize: 70, color: '#a6a6a6' }} />
        ) : (
          <img
            alt='traking'
            style={{ borderRadius: '150px', width: '50px', height: '50px', objectFit: 'cover', opacity: rowData.status.opacity }}
            src={rowData.img}
          />
        )
      ),
    },
    { title: 'Nombre', field: 'name' },
    { title: 'Identificación', field: 'identification' },
    { title: 'Estado', field: 'status', hidden: true, render: (rowData) => <AccountCircleIcon style={{ fontSize: '2rem', color: `${rowData.status.color}` }} /> },
    { title: 'Género', field: 'gender' },
    { title: 'Dirección', field: 'address' },
    { title: 'Teléfono', field: 'celphone' },
    { title: 'Sede', field: 'sede' },
    { title: 'F. Nacimiento', field: 'age' },
    { title: 'Cargo', field: 'cargo' },
    { title: 'Id', field: 'idsede', hidden: true },
    { title: 'singlename', field: 'singlename', hidden: true },
    { title: 'singlelastname', field: 'singlename', hidden: true },
    { title: 'Salario', field: 'salary', hidden: true },
    { title: 'Email', field: 'email', hidden: true },
    { title: 'contrate', field: 'contrate', hidden: true },
  ];
  /* Parce no le quite campos porque sino cuando vaya a darle en el boton de editar no tiene de
  donde recuperar los datos, mas facil le pone el parametro hidden en true */
  worker.forEach((worker) => {
    data.push({
      img: worker.urlImg,
      name: `${worker.name} ${worker.lastname}`,
      identification: worker.identification,
      gender: worker.gender,
      address: worker.address,
      celphone: worker.celphone,
      cargo: worker.cargo,
      contrate: worker.contrate,
      age: typeof worker.age === 'object' ? moment(worker.age.toDate().toISOString()).locale('es').calendar() : worker.age,
      sede: worker.sede.value,
      idsede: worker.sede.id,
      singlename: worker.name,
      singlelastname: worker.lastname,
      email: worker.email,
      salary: worker.salary,
      status: worker.status === true ? { color: '#43a047', value: true, opacity: '1' } : { color: '#8888', value: false, opacity: '.2' },
    });
  });
  return (
    <div style={{ maxWidth: '100%' }}>
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
        title='Empleados'
        columns={columns}
        data={data}
        editable={{
          onRowDelete: onClickDeleteWorker,
        }}
        onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
        options={{
          actionsColumnIndex: -1,
          exportButton: true,
          draggable: false,
          filtering: false,
          search: true,
          headerStyle: {
            backgroundImage: 'linear-gradient(#120136, #01579b)',
            color: '#FFF',
          },
          rowStyle: (rowData) => ({
            backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF',
          }),
        }}
        actions={[
          {
            icon: () => <Edit />,
            tooltip: 'status',
            onClick: (event, rowData) => onClickEditWorker(rowData),
          },
        ]}
      />
    </div>
  );
}

function CompanyTrackingTable({ workerdata = [], workerTrakingCompany = [] }) {
  const columns = [
    {
      title: 'Fotografía',
      field: 'Registro',
      render: (rowData) => (
        !rowData.img ? (
          <BrokenImageIcon alt='nophoto' style={{ fontSize: 70, color: '#a6a6a6' }} />
        ) : (
          <img
            alt='traking'
            style={{ borderRadius: '150px', width: '50px', height: '50px', objectFit: 'cover' }}
            src={rowData.img}
          />
        )
      ),
    },
    { title: 'Nombre', field: 'name' },
    { title: 'Identificación', field: 'identification' },
    { title: 'Sede', field: 'sede' },
    { title: 'Cargo', field: 'cargo' },
    { title: 'Id', field: 'idsede', hidden: true },
    { title: 'Fecha', field: 'time' },
    { title: 'Hora', field: 'hour' },
    { title: 'Posición', field: 'position', hidden: true },
    { title: 'Gps', field: 'pread' },
    { title: '°C', field: 'temperature' },
    { title: 'Evento', field: 'event' },
    { title: 'Track', field: 'type' },
  ];

  const data = [];
  workerTrakingCompany.forEach((paytraking) => {
    try {
      const infoWorker = workerdata[paytraking.identification];
      const { name, lastname, identification, cargo, sede } = infoWorker;
      data.push({
        name: `${name} ${lastname}`,
        identification,
        img: paytraking.urlImg,
        cargo,
        sede: typeof sede === 'object' ? sede.value : 'null',
        idsede: typeof sede === 'object' ? sede.id : 'null',
        pread: paytraking.address,
        position: typeof paytraking.position === 'object' ? `${paytraking.position.longitude} ${paytraking.position.latitude}` : paytraking.position,
        time: typeof paytraking.time === 'object' ? moment(paytraking.time.toDate().toISOString()).locale('es').format('LL') : 'null',
        hour: typeof paytraking.time === 'object' ? moment(paytraking.time.toDate().toISOString()).locale('es').format('LTS') : 'null',
        temperature: paytraking.temperature,
        event: paytraking.action === 'in' ? 'Entrada' : 'Salida',
        type: paytraking.action === 'in' ? <GpsFixedIcon style={{ color: '#21bf73' }} /> : <GpsFixedIcon style={{ color: 'red' }} />,
      });
    } catch (err) {
      console.log('sucedio error en tracking company');
    }
  });

  return (
    <div style={{ maxWidth: '100%' }}>
      {/* <Row className='p-3 ml-auto'>
        <div className='m-1'>
          <span>Fecha de inicio:</span>
          <br />
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        <div className='m-1'>
          <span>Fecha de final: </span>
          <br />
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
      </Row> */}
      <MaterialTable
        localization={{
          pagination: {
            labelDisplayedRows: '{from}-{to} of {count}',
            labelRowsPerPage: '{20}',
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
        title='Seguimiento'
        columns={columns}
        data={data}
        options={{
          pageSize: 10,
          sorting: false,
          actionsColumnIndex: -1,
          exportButton: true,
          /*
          exportCsv: (columns) => {
            alert('You should develop a code to export ' + columns + ' rows');
          },*/
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
}

function ApointWorkerTableRow({ isAuth, workerSubCompany = [], workerTrakingSubCompany = [] }) {
  const data = [];
  const [state, setState] = React.useState({
    columns: [
      {
        title: 'Fotografía',
        field: 'Registro',
        render: (rowData) => (
          !rowData.img ? (
            <BrokenImageIcon alt='nophoto' style={{ fontSize: 70, color: '#a6a6a6'}} />
          ) : (
            <img
              alt='traking'
              style={{ borderRadius: '150px', width: '70px', height: '70px', objectFit: 'cover' }}
              src={rowData.img}
            />
          )
        ),
      },
      { title: 'Nombre', field: 'name' },
      { title: 'Identificación', field: 'identification' },
      { title: 'Dirección', field: 'address' },
      { title: 'Teléfono', field: 'celphone' },
      { title: 'Id', field: 'idsede', hidden: true },
      { title: 'Registro', field: 'time' },
      { title: 'Temp', field: 'temperature' },
      { title: 'Track', field: 'type' },
    ],
  });

  workerTrakingSubCompany.forEach((trakingperson) => {
    try {
      const worker = workerSubCompany[trakingperson.identification];
      data.push({
        name: `${worker.name} ${worker.lastname}`,
        identification: worker.identification,
        address: worker.address.length > 0 ? worker.address : 'null',
        celphone: worker.celphone.length > 0 ? worker.celphone : 'null',
        idsede: worker.sede.id.length > 0 ? worker.sede.id : 'null',
        temperature: trakingperson.temperature.length > 0 ? trakingperson.temperature : 'null',
        time: typeof trakingperson.time === 'object' ? moment(trakingperson.time.toDate().toISOString()).format('MMMM Do YYYY, h:mm:ss a') : 'null',
        img: trakingperson.urlImg,
        type: trakingperson.action === 'in' ? <GpsFixedIcon color='primary' alt='in' /> : <GpsFixedIcon style={{ color: 'red' }} alt='out' />,
      });
    } catch (err) {
    }
  });

  return (
    <div style={{ maxWidth: '100%' }}>
      <ThemeProvider theme={theme}>
        <MaterialTable
          theme={(theme) => createMuiTheme({
            ...theme,
            palette: {
              ...theme.palette,
              primary: {
                main: green[500],
              },
            },
          })}
          icons={tableIcons}
          title='Control de Ingreso'
          columns={state.columns}

          data={data}
          //onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
          localization={{
            pagination: {
              labelDisplayedRows: '{from}-{to} of {count}',
            },
            toolbar: {
              nRowsSelected: '{0} row(s) selected',
            },
            header: {
              actions: 'actions',
            },
            body: {
              emptyDataSourceMessage: 'No hay registros',
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
    workerdata: state.firestore.data.worker,
    workerSubCompany: state.firestore.data.workerSubCompany,
    workerTrakingSubCompany: state.firestore.ordered.workerTrakingSubCompany,
    workerTrakingCompany: state.firestore.ordered.workerTrakingCompany,
    clients: state.firestore.ordered.clients,
  };
};
export default {
  WorkerTableRow: connect(mapStateProps, null)(WorkerTableRow),
  ApointWorkerTableRow: connect(mapStateProps, null)(ApointWorkerTableRow),
  CompanyTrackingTable: connect(mapStateProps, null)(CompanyTrackingTable),
};

