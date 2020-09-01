import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { MyChartRadar } from '../Charts/Charts';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
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

const CardForMonthMetrics = ({ dateSearchMonth, totalForMonthFilter = [] }) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    dateSearchMonth(date);
  };
  let dataChartRadar = {
    labels: ['No hay registros para este día'],
    datasets: [
      {
        data: [100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  try {
    const { sales_women, sales_men, Women, Men } = totalForMonthFilter[0];
    dataChartRadar = {
      labels: ['No marcado', 'Si', 'No'],
      datasets: [
        {
          data: [(parseInt(Women, 10) + parseInt(Men, 10)-(parseInt(sales_men, 10) + parseInt(sales_women, 10))), sales_women, sales_men],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
  } catch (e) {
    console.error(e);
  }

  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item sm={6}>
              <Typography className={classes.title} color='textSecondary' gutterBottom>
                Tasa de retorno Mensual
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify='space-around'>
                  <KeyboardDatePicker
                    margin='normal'
                    id='date-picker-dialog1'
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
    </>
  );
};
const mapStateProps = (state) => {
  return {
    requesting: state.firestore.status.requesting.totalForMonthFilter,
    totalForMonthFilter: state.firestore.ordered.totalForMonthFilter,
  };
};

export default connect(mapStateProps, null)(CardForMonthMetrics);

