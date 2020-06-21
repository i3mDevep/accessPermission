import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import { connect } from 'react-redux';
import { Card, Container, CardDeck, Button } from 'react-bootstrap';
import { IoIosAdd } from 'react-icons/io';
import PointAttentionModal from '../../components/PointAttention/PointAttentionModal';
import PointAttentionCard from '../../components/PointAttention/PointAttentionCard';

const CreateSede = ({ isAuth }) => {
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
    alert('create subcompany');
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
    const createSubCompany = firebase.functions().httpsCallable('createSubCompany');
    createSubCompany(dataSubCompany)
      .then((result) => {
        setError('');
      })
      .catch((error) => {
        console.error(error);
        setError(error.code);
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
          error={error}
          loading={loading}
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
