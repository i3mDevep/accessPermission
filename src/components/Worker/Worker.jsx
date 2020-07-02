import React from 'react';
import { Container } from 'reactstrap';
import Tables from '../Tables/LayoutTable/Tables';
import CardInfo from '../CardInfo/CardInfo';

const Worker = ({ onClickDeleteWorker, onClickEditWorker }) => {
  return (
    <Container fluid>
      <CardInfo.CardInfoWorker />
      <Tables.WorkerTableRow
        onClickEditWorker={onClickEditWorker}
        onClickDeleteWorker={onClickDeleteWorker}
      />
    </Container>
  );
};

export default Worker;
