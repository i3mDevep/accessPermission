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

const Metrics = ({ data = [], blocked = false, totalsCompanies = [] }) => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Card className={classes.root} noValidate autoComplete='off'>
        <CardContent>
          <form className={classes.root}>
            <div>
              { blocked && !totalsCompanies.length && (
                <Alert severity='warning'>Debes tener por lo menos una sede creada</Alert>
              )}
              <Autocomplete
                disabled={blocked}
                freeSolo
                id='free-solo-2-demo'
                disableClearable
                options={totalsCompanies.map((option) => option.namesubcompany)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label='Busque una sede'
                    margin='normal'
                    variant='outlined'
                    value={value}
                    onChange={handleChange}
                    InputProps={{ ...params.InputProps, type: 'search' }}
                  />
                )}
              />
            </div>
          </form>
        </CardContent>
      </Card>
      <br />
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
              <MyChartRadar /*data={data} *//>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card>
            <CardContent>
              <Typography className={classes.title} color='textSecondary' gutterBottom>
                Tasa de retorno diario
              </Typography>
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

