import React from 'react';
import { Container } from 'reactstrap';
import Tables from '../Tables/LayoutTable/Tables';
import CardInfo from '../CardInfo/CardInfo';

const Worker = () => {
  return (
    <Container fluid>
      <CardInfo.CardInfoWorker />
      <Tables.WorkerTableRow />
    </Container>
  );
};

export default Worker;
