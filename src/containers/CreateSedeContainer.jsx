import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Card, Container, Alert, Button, Row } from 'react-bootstrap';
import { IoIosAlert, IoIosAdd } from 'react-icons/io';
import { LoopCircleLoading } from 'react-loadingg';
import PointAttentionModal from '../components/PointAttention/PointAttentionModal';
import PointAttentionCard from '../components/PointAttention/PointAttentionCard';
import PointCreateNewCard from '../components/PointAttention/PointCreateNewCard';

const CreateSedeContainer = ({ isAuth, subCompanies = [], requesting }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }
  const [modalShow, setModalShow] = useState(false);
  const [response, setResponse] = useState('');

  const handlerOnSubmit = ({
    namesubcompany,
    email,
    password,
    cellphone,
    address,
    city,
    nameperson,
    estate,
    identification,
  }) => {
    const dataSubCompany = {
      company: isAuth.uid,
      content: {
        namesubcompany,
        email,
        password,
        cellphone,
        address,
        city,
        nameperson,
        estate,
        identification,
      },
    };
    const createSubCompany = firebase
      .functions().httpsCallable('createSubCompany');
    createSubCompany(dataSubCompany)
      .then((response) => {
        setResponse(response);
      });
  };

  return (

    <Container fluid>
      {!subCompanies.length ? (
        <Alert variant='info' className='w-100'>
          <IoIosAlert size='30' />{' '}
          <small>
            Registra una sede o punto de venta
          </small>
        </Alert>
      ) : ''}
      <Card style={{ width: '18%' }}>
        <PointAttentionModal
          onSubmit={handlerOnSubmit}
          show={modalShow}
          res={response}
          onHide={() => setModalShow(false)}
        />
      </Card>

      <Row>
        <PointCreateNewCard onClick={() => setModalShow(true)} />
        {
          subCompanies.map((subCompany) => (
            <PointAttentionCard
              key={subCompany.id}
              {...subCompany}
            />
          ))
        }
      </Row>
    </Container>

  );
};
const mapStateProps = (state) => {
  console.log(state);
  return {
    isAuth: state.auth.isAuth,
    subCompanies: state.firestore.ordered.subcompanycreate,
    requesting: state.firestore.status.requesting.subcompanycreate,
  };
};

export default compose(
  connect(mapStateProps, null),
  firestoreConnect((props) => {
    return [
      { collection: 'business',
        doc: props.isAuth.uid,
        subcollections: [
          {
            collection: 'subcompanies',
          },
        ],
        storeAs: 'subcompanycreate',
      },
    ];
  }),
)(CreateSedeContainer);
