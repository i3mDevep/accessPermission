import React, { useState } from 'react';
import SedeContainer from '../../containers/CompanyContainers/SedeContainer';
import ModalUpdatePlan from '../../components/ModalUpdatePlan';

const Sedes = () => {
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const handleClose = () => {
    setOpenModalUpdate(false);
  };
  const handleOpen = () => {
    setOpenModalUpdate(true);
  };
  return (
    <>
      <ModalUpdatePlan open={openModalUpdate} handleClose={handleClose} />
      <h3 className='text-center m-3'>Puntos de venta</h3>
      <SedeContainer modalUpdate={handleOpen} />
    </>
  );
};

export default Sedes;
