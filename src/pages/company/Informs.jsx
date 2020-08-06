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
      <WorkerCard modalUpdate={handleOpen} title='Empleados registrados' description='empleados actuales' image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdlcGr4z9WmjGSyyAdTKq0JPRBP_slPFvxqA&usqp=CAU' />
      <WorkerTrackingCard modalUpdate={handleOpen} title='Control empleados' description='seguimiento de empleados' image='https://www.constructshow.com/content/informa/construct-show/en/register/_jcr_content/par_page/column_control/par-col-1/column_control_12856/par-col-1/image.img.png/1559654426259.png' />
    </Container>
  );

};

export default Informs;
