import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import { WorkerCard, WorkerTrackingCard } from '../../components/InformsComponent';
import ModalUpdatePlan from '../../components/ModalUpdatePlan';

const Informs = () => {
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const handleClose = () => {
    setOpenModalUpdate(false);
  };
  const handleOpen = () => {
    setOpenModalUpdate(true);
  };

  return (
    <Container fluid style={{ height: '100%', overflow: 'hiden', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <h3 className='text-center m-3'>Informes</h3>
      <ModalUpdatePlan open={openModalUpdate} onClose={handleClose} />
      <Grid container spacing={2} style={{ justifyContent: 'center' }}>
        <Grid item sm={10} md={5}>
          <WorkerCard modalUpdate={handleOpen} title='Clientes registrados' description='Descargue la base clientes registrados' image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL2DW6wKqJM8B8Wnh5GLJ4GY97Lfn3kQFsEw&usqp=CAU' />
        </Grid>
        <Grid item sm={10} md={5}>
          <WorkerCard modalUpdate={handleOpen} title='Empleados registrados' description='Descargue la base de datos de empleados registrados' image='https://darvideo.tv/wp-content/uploads/2019/10/1-3.jpg' />
        </Grid>
        <WorkerTrackingCard modalUpdate={handleOpen} title='Control empleados' description='Seleccione un rango de fechas no mayor a 30 días. Pulsando el botón descargar usted podrá descargar el registro de entrada y salida de sus empleados para el calculo de nómina' image='https://cdn2.iconfinder.com/data/icons/office-and-business-special-set-3/260/61-256.png' />
      </Grid>
    </Container>
  );

};

export default Informs;
