import React from 'react';
import { Container } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import PayrollContainer from '../../containers/CompanyContainers/TrackingContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
}));

const Payroll = () => {

  const classes = useStyles();


  return (
    <Container fluid>
      <Typography className='text-center' variant='h5' component='h5'>
        Seguimiento de empleados
      </Typography>
      <div className={classes.root}>
        <Alert severity='info'>En este módulo usted puede observar en tiempo real el registro de ingreso y la salida de sus empleados!</Alert>
      </div>
      <br />
      <PayrollContainer />
    </Container>
  ) ;
};

export default Payroll;
