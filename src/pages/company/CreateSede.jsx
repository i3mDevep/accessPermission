import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { connect } from 'react-redux';
import { Card, Container, CardDeck, Button } from 'react-bootstrap';
import { IoIosAdd } from 'react-icons/io';
import PointAttentionModal from '../../components/PointAttention/PointAttentionModal';
import PointAttentionCard from '../../components/PointAttention/PointAttentionCard';

const CreateSede = ({ isAuth }) => {
  const [modalShow, setModalShow] = useState(false);
  const [res, setResponse] = useState();

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
      .then((res) => {
        setResponse(res);
      });

  };


  return (
    <Container fluid>
      <Card>
        <Card.Header>
          <Button onClick={() => setModalShow(true)} style={{ padding: '3px' }}>
            <IoIosAdd size='30' />
            {' '}
            Crear Nueva Sede
            {' '}
          </Button>
        </Card.Header>
      </Card>

      <CardDeck>
        <PointAttentionCard
          name='prueba'
          city='medelin'
          tlephone='324234'
        />
        <PointAttentionCard
          name='prueba'
          city='medelin'
          tlephone='324234'
        />
        <PointAttentionModal
          onSubmit={handlerOnSubmit}
          show={modalShow}
          res={res}
          onHide={() => setModalShow(false)}
        />
      </CardDeck>
    </Container>
  );
};
const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateProps, null)(CreateSede);
