import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { MyChartMix, MyChartRadar } from '../Charts/Charts';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      //width: '25ch',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      flexGrow: 1,
    },
  },
}));

const monthData = [
  { month: 'Enero', year: 1994 },
  { month: 'Febrero', year: 1972 },
  { month: 'Marzo', year: 1974 },
];

const Metrics = ({ data = [] }) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const dataChartRadar = {
    labels: ['Total', 'Si', 'No'],
    datasets: [
      {
        data: ['', 5, 6],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item sm={6}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <Typography className={classes.title} color='textSecondary' gutterBottom>
                    Tasa de retorno mensual
                  </Typography>
                </Grid>
                <Grid item sm={6}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify='space-around'>
                      <KeyboardDatePicker
                        margin='normal'
                        id='date-picker-dialog'
                        label='Mes y Año'
                        format='dd/MM/yyyy'
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
              <MyChartRadar data={dataChartRadar} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <Typography className={classes.title} color='textSecondary' gutterBottom>
                    Tasa de retorno diaria
                  </Typography>
                </Grid>
                <Grid item sm={6}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify='space-around'>
                      <KeyboardDatePicker
                        margin='normal'
                        id='date-picker-dialog'
                        label='Seleccione una fecha'
                        views={['year', 'month']}
                        format='dd/MM/yyyy'
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
              <MyChartRadar /*data={data} */ />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br />
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item sm={6}>
              <Typography className={classes.title} color='textSecondary' gutterBottom>
                Historico
              </Typography>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify='space-around'>
                  <KeyboardDatePicker
                    margin='normal'
                    id='date-picker-dialog'
                    label='Seleccione una fecha'
                    format='MM/dd/yyyy'
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>

          </Grid>
          <MyChartMix /*data={data} */ />
        </CardContent>
      </Card>

    </>
  );
};

export default Metrics;

