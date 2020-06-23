import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
<<<<<<< HEAD
import { Card, Container, Row } from 'react-bootstrap';
=======
import { Card, Container, Alert, Button, Row } from 'react-bootstrap';
import { IoIosAlert, IoIosAdd } from 'react-icons/io';
>>>>>>> 17711126b83c0a7dad5b8bb35424be034eb0a8c9
import { LoopCircleLoading } from 'react-loadingg';
import PointAttentionModal from '../components/PointAttention/PointAttentionModal';
import PointAttentionCard from '../components/PointAttention/PointAttentionCard';
import PointCreateNewCard from '../components/PointAttention/PointCreateNewCard';

const CreateSedeContainer = ({ isAuth, subCompanies = [], requesting }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const createSubCompany = firebase
      .functions().httpsCallable('createSubCompany');
    createSubCompany(dataSubCompany)
      .then((response) => {
        setResponse(response);
        console.log(response);
        if (response.data.result === true) {
          setModalShow(false);
        }
      }).finally(() => setLoading(false));
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
          submit={handlerOnSubmit}
          show={modalShow}
          response={response}
          loading={loading}
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
