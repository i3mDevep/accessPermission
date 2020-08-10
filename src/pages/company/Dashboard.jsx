import React from 'react';
import { Container } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import GetAppIcon from '@material-ui/icons/GetApp';
import Link from '@material-ui/core/Link';
import ListCardsChart from '../../components/ListCardsChart/ListCardsChart';
import TableClientsContainer from '../../containers/CompanyContainers/Clients/TableClientsContainer';
import CardsClientsContainer from '../../containers/CompanyContainers/Clients/CardsClientsContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Container fluid>

      <div className={classes.root}>

        <Alert severity='info'>
          {' '}
          No olvides desargar nuestra
          <Link variant='caption' href='https://play.google.com/store/apps/details?id=com.ardobot.ardocontrol'>
            {' '}
            App
            {' '}
          </Link>
          y ver nuetros videos
          {' '}
          <Link variant='caption' href='https://www.youtube.com/watch?v=4rSPQAS7ADQ'>Tutoriales </Link>
          {' '}
        </Alert>

      </div>

      <h3 className='text-center m-3'>Panel de control</h3>
      <CardsClientsContainer />
      <ListCardsChart />
      <TableClientsContainer />
    </Container>
  );
};

export default Dashboard;
