import React from 'react';
import WorkerContainer from '../../containers/CompanyContainers/WorkerContainer';

const WorkerPage = () => {
  return (
    <>
      <h3 className='text-center m-3'>Listado de empleados</h3>
      <WorkerContainer />
    </>
  );
};

export default WorkerPage;
