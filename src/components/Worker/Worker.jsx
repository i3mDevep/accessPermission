import React from 'react';
import { Container } from 'reactstrap';
import Tables from '../Tables/LayoutTable/Tables';
import CardInfo from '../CardInfo/CardInfo';
import EditWorkerModal from './EditWorkerModal';

const Worker = ({ onClickDeleteWorker, onClickEditWorker, show, onHide, init, sedes, onSubmit }) => {
  return (
    <Container fluid>
      <CardInfo.CardInfoWorker />
      <Tables.WorkerTableRow
        onClickEditWorker={onClickEditWorker}
        onClickDeleteWorker={onClickDeleteWorker}
      />
      { show && <EditWorkerModal onSubmit={onSubmit} sedes={sedes} init={init} show={show} onHide={onHide} /> }
    </Container>
  );
};

export default Worker;
