import React from 'react';
import { Container } from 'reactstrap';
import Tables from '../Tables/LayoutTable/Tables';
import CardInfo from '../CardInfo/CardInfo';

const Worker = ({ onClickDeleteWorker }) => {
  return (
    <Container fluid>
      <CardInfo.CardInfoWorker />
      <Tables.WorkerTableRow onClickDeleteWorker={onClickDeleteWorker} />
    </Container>
  );
};

export default Worker;
