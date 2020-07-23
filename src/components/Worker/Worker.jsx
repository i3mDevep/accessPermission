import React from 'react';
import { Container } from 'reactstrap';
import Tables from '../Tables/Tables';
import CardInfo from '../CardInfo/CardInfo';
import EditWorkerModal from './EditWorkerModal';

const Worker = ({ photos, onClickDeleteWorker, onClickEditWorker, show, onHide, init, sedes, onSubmit }) => {
  return (
    <Container fluid>
      <CardInfo.CardInfoWorker />
      <Tables.WorkerTableRow
        photos={photos}
        onClickEditWorker={onClickEditWorker}
        onClickDeleteWorker={onClickDeleteWorker}
      />
      { show && <EditWorkerModal onSubmit={onSubmit} sedes={sedes} init={init} show={show} onHide={onHide} /> }
    </Container>
  );
};

export default Worker;
