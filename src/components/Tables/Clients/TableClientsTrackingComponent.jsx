import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 240,
  },
});

const TableClientsTrackingComponent = ({ tracking }) => {

  const classes = useStyles();

  return (
    <div
      style={{
        padding: 10,
        fontSize: 100,
        borderRadius: 5,
        textAlign: 'center',
        color: 'white',
        backgroundImage: 'linear-gradient(#120136, #01579b)',
      }}
    >
      <TableContainer component={Paper}>
        <Table className={classes.table} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Localizacion</TableCell>
              <TableCell align='center'>Temperatura</TableCell>
              <TableCell align='right'>Tiempo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tracking.map((row, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <TableRow key={`${row.identification}-${index}`}>
                <TableCell component='th' scope='row'>
                  {row.gps}
                </TableCell>
                <TableCell align='center'>{row.temperature}</TableCell>
                <TableCell align='right'>{typeof row.time === 'object' ? moment(row.time.toDate().toISOString()).locale('es').format('MMMM Do YYYY, h:mm:ss a') : 'null'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableClientsTrackingComponent;