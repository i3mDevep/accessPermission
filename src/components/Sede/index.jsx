import React from 'react';
import { Card, Container, Alert, Row } from 'react-bootstrap';
import { IoIosAlert } from 'react-icons/io';
import PointAttentionModal from './PointAttention/PointAttentionModal';
import PointAttentionCard from './PointAttention/PointAttentionCard';
import PointCreateNewCard from './PointAttention/PointCreateNewCard';

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
      <Card style={{ width: '18%' }}>
        <PointAttentionModal
          submit={submit}
          show={modalShow}
          response={response}
          loading={loading}
          onHide={onHide}
        />
      </Card>

      <Row>
        <PointCreateNewCard onClick={onClickNewSede} />
        {
          subCompanies.map((subCompany) => (
            <PointAttentionCard
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
