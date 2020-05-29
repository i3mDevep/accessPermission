import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Michael Atehortua', 15931231231, 26, 2, 1),
  createData('Steven Henano', 23712312312, 40, 3, 2),
  createData('Andres Moreno', 26231231231, 16, 4, 1),
  createData('Mateo Montoya', 3054534534, 37, 7, 4),
  createData('Felipe Cardona', 35653453453, 19, 1, 1),
];

export function TableData() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style = {{ width:"100%",padding:"20px"}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow style={{backgroundColor:"#45046a"}}>
            <TableCell style = {{color:"#fff"}}>Name</TableCell>
            <TableCell align="center" style = {{color:"#fff"}} >Identification</TableCell>
            <TableCell align="right" style = {{color:"#fff"}} >Years</TableCell>
            <TableCell align="right" style = {{color:"#fff"}} >In</TableCell>
            <TableCell align="right" style = {{color:"#fff"}} >Exit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
