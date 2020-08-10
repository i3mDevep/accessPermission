import React from 'react';
import { Row } from 'reactstrap';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import CardChart from '../CardChart/CardChart';
import { MyChartBar, MyChartRadar, MyChartMix } from '../Charts/Charts';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  title: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: '100%',
  },
}));
const drawerWidth = '100%';

const ListCardsChart = ({ totals }) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  if (!totals) {
    return (
      <Row>
        <CardChart />
        <CardChart />
        <CardChart />
      </Row>
    );
  }
  const { Men, Women } = totals;
  const dataChartRadar = {
    labels: ['Hombres', 'Mujeres'],
    datasets: [
      {
        data: [Men.value, Women.value],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  return (
    <>
      <CssBaseline />
      <main className={classes.content}>
        <Container maxWidth='lg' className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={7}>
              <Paper className={fixedHeightPaper}>
                <Typography className={classes.title} color='textSecondary' gutterBottom>
                  Histórico de entradas y salidas
                </Typography>
                <MyChartMix />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={5}>
              <Paper className={fixedHeightPaper}>
                <Typography className={classes.title} color='textSecondary' gutterBottom>
                  Porcentaje de Hombres y Mujeres
                </Typography>
                <MyChartRadar data={dataChartRadar} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>

      {/*  <Row>
          <CardChart title='Semana' titleheader='Total'>
        <MyChartBar color='#32325d' />
      </CardChart>
        <CardChart title='Género' titleheader='Total'>
          <MyChartRadar data={dataChartRadar} />
        </CardChart>*/}
      {/*  <CardChart title='Año' titleheader='Total'>
        <MyChartMix color='#ff1e56' />
  </CardChart>
      </Row>*/}
    </>
  );
};

const mapToProps = (state) => {
  return {
    totals: state.firestore.data.totals,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapToProps, null)(ListCardsChart);
