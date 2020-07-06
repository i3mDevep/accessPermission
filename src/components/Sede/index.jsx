import React from 'react';
import { Container, Alert, Row } from 'react-bootstrap';
import { IoIosAlert } from 'react-icons/io';
import PointAttentionModal from './PointAttention/PointAttentionModal';
import PointCreateNewCard from './PointAttention/PointCreateNewCard';
import PointAttentionCardSedes from './PointAttention/PointAttentionCardSedes';
import EditModalPointAttention from './EditPointAttention/EditModalPointAttention';

const SedeComponent = ({ workers, subCompanies, submit, modalShow, response, loading, initEditModalShow, onHide, onClickNewSede, onClickDeleted, onClickEdit, modalEditShow, onHideEdit }) => {
  return (
    <Container fluid>
      {!subCompanies.length ? (
        <Alert variant='info' className='w-100'>
          <IoIosAlert size='30' />
          {' '}
          <small>
            Registra una sede o punto de venta
          </small>
        </Alert>
      ) : ''}
      <PointAttentionModal
        submit={submit}
        show={modalShow}
        response={response}
        loading={loading}
        onHide={onHide}
        listWorker={workers}
      />
      {modalEditShow && <EditModalPointAttention show={modalEditShow} onHide={onHideEdit} init={initEditModalShow} />}
      <Row>
        <PointCreateNewCard onClick={onClickNewSede} />
        {
          subCompanies.map((subCompany) => (
            <PointAttentionCardSedes
              key={subCompany.id}
              subCompid={subCompany.id}
              onClickDeleted={onClickDeleted}
              onClickEdit={onClickEdit}
              {...subCompany}
            />
          ))
        }
      </Row>
    </Container>

  );
};

export default SedeComponent;
