import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import SedeContainer from '../../containers/CompanyContainers/SedeContainer';
import ModalUpdatePlan from '../../components/ModalUpdatePlan';

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

const Sedes = () => {
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const classes = useStyles();
  const handleClose = () => {
    setOpenModalUpdate(false);
  };
  const handleOpen = () => {
    setOpenModalUpdate(true);
  };
  return (
    <>
      <Typography className='text-center' variant='h5' component='h5'>
        Administrador de Sedes
      </Typography>
      <div className={classes.root}>
        <Alert severity='warning'>Recuerde que las credenciales creadas en este módulo son el acceso a la App y a la dashboard asignada a cáda sede!</Alert>
      </div>
      <ModalUpdatePlan open={openModalUpdate} onClose={handleClose} />
      <SedeContainer modalUpdate={handleOpen} />
    </>
  );
};

export default Sedes;
