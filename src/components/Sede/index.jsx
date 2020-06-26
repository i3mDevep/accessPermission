import React from 'react';
import { Container, Alert, Row } from 'react-bootstrap';
import { IoIosAlert } from 'react-icons/io';
import PointAttentionModal from './PointAttention/PointAttentionModal';
import PointCreateNewCard from './PointAttention/PointCreateNewCard';
import PointAttentionCardSedes from './PointAttention/PointAttentionCardSedes';

const SedeComponent = ({ subCompanies, submit, modalShow, response, loading, onHide, onClickNewSede, onClickDeleted }) => {
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
      />

      <Row>
        <PointCreateNewCard onClick={onClickNewSede} />
        {
          subCompanies.map((subCompany) => (
            <PointAttentionCardSedes
              key={subCompany.id}
              subCompid={subCompany.id}
              onClickDeleted={onClickDeleted}
              {...subCompany}
            />
          ))
        }
      </Row>
    </Container>

  );
};

export default SedeComponent;
