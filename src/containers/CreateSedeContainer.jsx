import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Card, Container, CardDeck, Button } from 'react-bootstrap';
import { IoIosAdd } from 'react-icons/io';
import PointAttentionModal from '../components/PointAttention/PointAttentionModal';
import PointAttentionCard from '../components/PointAttention/PointAttentionCard';
import PointAttentionConector from '../components/PointAttention/PointAttentionConector';

const CreateSedeContainer = ({ isAuth, subCompanies=[] }) => {
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
      <Card>
        <Card.Header>
          <Button onClick={() => setModalShow(true)} style={{ padding: '3px' }}>
            <IoIosAdd size='30' />
            Crear Nueva Sede
          </Button>
        </Card.Header>
      </Card>
      <CardDeck>
        {
          subCompanies.map((subCompany) => (
            <PointAttentionCard
              key={subCompany.id}
              {...subCompany}
            />
          ))
        }

        <PointAttentionModal
          onSubmit={handlerOnSubmit}
          show={modalShow}
          res={response}
          onHide={() => setModalShow(false)}
        />
      </CardDeck>
    </Container>
  );
};
const mapStateProps = (state) => {
  console.log(state)
  return {
    isAuth: state.auth.isAuth,
    subCompanies: state.firestore.ordered.subcompanycreate,
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
