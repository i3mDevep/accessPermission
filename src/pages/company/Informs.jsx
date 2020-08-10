import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
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
      <ModalUpdatePlan open={openModalUpdate} handleClose={handleClose} />
      <WorkerCard modalUpdate={handleOpen} title='Clientes' description='Descargue la base clientes registrados' />
      <WorkerCard modalUpdate={handleOpen} title='Empleados registrados' description='Descargue la base de datos de empleados registrados' />
      <WorkerTrackingCard modalUpdate={handleOpen} title='Control empleados' description='Seleccione un rango de fechas no mayor a 30 días. Pulsando el botón descargar usted podrá descargar el registro de entrada y salida de sus empleados para el calculo de nómina' />
    </Container>
  );

};

export default Informs;
