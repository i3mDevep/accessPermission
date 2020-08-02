import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import { Container, Button, Card, Row, Col, CardDeck } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import Table from '../../components/Tables/Tables';

const ApointWorkerContainer = ({ requesting }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }

  return (
    <>
      <Container>
        <Row>
          <CardDeck>
            <Link to='/control'>
              <Card className='text-center' body style={{ width: '15rem' }}>
                <Button variant='danger' linl='/control'>Registro de Empleados</Button>
              </Card>
            </Link>
            <Link to='/clientpoint'>
              <Card className='text-center' body style={{ width: '15rem' }}>
                <Button variant='danger'>Registro de Clientes</Button>
              </Card>
            </Link>
          </CardDeck>
        </Row>
        <br />
        <Table.ApointWorkerTableRow />
      </Container>
    </>
  );
};

const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    requesting: state.firestore.status.requesting.workerSubcompanyFilter,
    workerTrakingSubCompany: state.firestore.ordered.workerTrakingSubCompany,
  };
};

export default compose(
  connect(mapStateProps, null),
  firestoreConnect((props) => {
    return [
      { collection: 'business',
        doc: props.isAuth.companyId,
        subcollections: [
          {
            collection: 'subcompanies',
            doc: props.isAuth.uid,
            subcollections: [
              { collection: 'worker' },
            ],
          },
        ],
        storeAs: 'workerSubCompany',
      },
      { collection: 'business',
        doc: props.isAuth.companyId,
        subcollections: [
          {
            collection: 'subcompanies',
            doc: props.isAuth.uid,
            subcollections: [
              { collection: 'trakingworker' },
            ],
          },
        ],
        storeAs: 'workerTrakingSubCompany',
      },
    ];
  }),
)(ApointWorkerContainer);
