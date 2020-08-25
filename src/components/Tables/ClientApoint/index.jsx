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
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import ImageSearch from '@material-ui/icons/ImageSearch';
import TablePagination from '@material-ui/core/TablePagination';
import { green, grey, red, purple } from '@material-ui/core/colors';
import { Form, Col, Card, Button, ListGroup, Row, Container, Alert, Modal } from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
  ThumbUpAltIcon: forwardRef((props, ref) => <SaveIcon {...props} ref={ref} />),
  ThumbDownAltIcon: forwardRef((props, ref) => <SaveIcon {...props} ref={ref} />),
  AccountCircleIcon: forwardRef((props, ref) => <AccountCircleIcon {...props} ref={red} />),
};

export default function TableTraingClients({ trackingClients = [], onClickUpBought, onClickOffBought }) {
  const data = [];
  const columns = [
    { title: 'Nombre', field: 'name' },
    { title: 'Identificación', field: 'identification' },
    { title: 'Género', field: 'gender' },
    { title: 'Teléfono', field: 'cellphone' },
    { title: 'Registro', field: 'time' },
    { title: 'Id', field: 'id', hidden: true },
    { title: 'Sale', field: 'sale', hidden: true },
  ];

  //console.log('recibo', trackingClients);
  trackingClients.forEach((trackingClients) => {
    try {
      data.push({
        id: trackingClients.id,
        sale: trackingClients.sale,
        name: trackingClients.name,
        identification: trackingClients.identification,
        gender: trackingClients.gender,
        cellphone: trackingClients.cellphone,
        time: typeof trackingClients.time === 'object' ? moment(trackingClients.time.toDate().toISOString()).locale('es').format('LLLL') : 'null',

      });
    } catch (err) {
    }
  });

  return (
    <MaterialTable
      title='Registro de Clientes'
      columns={columns}
      data={data}
      icons={tableIcons}
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
      }}
      localization={{
        pagination: {
          labelDisplayedRows: '{from}-{to} of {count}',
        },
        toolbar: {
          nRowsSelected: '{0} row(s) selected',
        },
        header: {
          actions: 'Compra',
        },
        body: {
          emptyDataSourceMessage: 'No hay registros',
          filterRow: {
            filterTooltip: 'Filter',
          },
        },
      }}
      actions={[
        (rowData) => {
          if (rowData.sale === undefined) {
            return { icon: (() => <ThumbUpAltIcon style={{ color: '#8888' }} />), disable: true, onClick: (event, rowData) => { onClickUpBought(rowData); } }; 
          }
          if (rowData.sale === false) {
            return { icon: (() => <ThumbUpAltIcon style={{ color: '#8888' }} />), disable: true, onClick: (event, rowData) => { onClickUpBought(rowData); } } ;
          }
          return { icon: (() => <ThumbUpAltIcon style={{ color: '#21bf73' }} />), disable: true, onClick: (event, rowData) => { onClickUpBought(rowData); } } ;
        },
        (rowData) => {
          if (rowData.sale === undefined) {
            return { icon: (() => <ThumbDownAltIcon style={{ color: '#8888' }} />), disable: true, onClick: (event, rowData) => onClickOffBought(rowData) };
          }
          if (rowData.sale === false) {
            return { icon: (() => <ThumbDownAltIcon style={{ color: '#cf1b1b' }} />), disable: true, onClick: (event, rowData) => onClickOffBought(rowData) };
          }

          return { icon: (() => <ThumbDownAltIcon style={{ color: '#8888' }} />), disable: true, onClick: (event, rowData) => onClickOffBought(rowData) };

        },
      ]}

    />
  );
}
