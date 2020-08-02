/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import { Container, Button } from 'react-bootstrap';
import TableClientsContainer from '../CompanyContainers/Clients/TableClientsContainer';
import ClientPointAttetion from '../../components/ClientPointAttention/ClientPointAttetion';
import { addClient } from '../../store/actions/addClientAction';

const ClienPointContainer = ({ requesting, isAuth, addClient }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const onHide = () => setShow(false);

  const onSubmit = (content) => {
    addClient(isAuth.companyId, content);
  };

  return (
    <>
      <Container fluid>
        <ClientPointAttetion
          show={show}
          onHide={onHide}
          onSubmit={onSubmit}
        />
        <Button onClick={handleShow} variant='primary'>Registrar</Button>
        <br />
        <TableClientsContainer />
      </Container>
    </>
  );
};

const mapStateProps = (state) => {
  console.log(state);
  return {
    isAuth: state.auth.isAuth,
    requesting: state.firestore.status.requesting.clients,
    clients: state.firestore.ordered.clients,

  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch)
  return {
    addClient: (idBusiness, content) => dispatch(addClient(idBusiness, content)),
    showAlert: (alertProps) => dispatch(showAlert(alertProps)),
  };
};

export default compose(
  connect(mapStateProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [
      { collection: 'business',
        doc: props.isAuth.companyId,
        subcollections: [
          {
            collection: 'clients',
          },
        ],
        storeAs: 'clients',
      },
    ];
  }),
)(ClienPointContainer);
