import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchComponentContainer from '../../containers/CompanyContainers/Metricas/SearchComponentContainer';
import CardForDayMetricsContainer from '../../containers/CompanyContainers/Metricas/CardForDayMetricsContainer';
import CardForMonthMetricsContainer from '../../containers/CompanyContainers/Metricas/CardForMonthMetricsContainer ';

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

const MetricsPage = () => {
  const classes = useStyles();
  const [idSubCompany, setIdSubcompany] = useState('');
  const [selecteDate, setSelectDate] = useState(new Date());
  const [selecteDateMonth, setSelectDateMonth] = useState(new Date());

  return (
    <>
      <Typography className='text-center' variant='h5' component='h5'>
        Métricas
      </Typography>
      <SearchComponentContainer sendData={(data) => setIdSubcompany(data.data.id)} />
      <Grid container className={classes.root} spacing={2}>
        <Grid item sm={6}>
          <CardForDayMetricsContainer idSubCompany={idSubCompany} dateFilter={selecteDate} dateSearch={(date) => setSelectDate(date)} />
        </Grid>
        <Grid item sm={6}>
          <CardForMonthMetricsContainer idSubCompany={idSubCompany} dateFilterMonth={selecteDateMonth} dateSearchMonth={(date) => setSelectDateMonth(date)} />
        </Grid>
      </Grid>
      <br />

    </>
  );

};

export default MetricsPage;
