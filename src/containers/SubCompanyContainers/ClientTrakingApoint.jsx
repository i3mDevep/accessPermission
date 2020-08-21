/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import firebase from 'firebase/app';
import TableTraingClients from '../../components/Tables/ClientApoint/index';
import 'firebase/storage';

import { addBought } from '../../store/actions/addBoughtAction';

const ClienTrakingApoint = ({ requesting, isAuth, trackingClients, addBought }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }

  const onClickOffBought = (content) => {
    console.log(content);
    firebase.firestore().doc(`business/${isAuth.companyId}/subcompanies/${isAuth.uid}/trackingClients/${content.id}`)
      .set({ sale: false }, { merge: true });
  };

  const onClickUpBought = (content) => {
    console.log(content);
    firebase.firestore().doc(`business/${isAuth.companyId}/subcompanies/${isAuth.uid}/trackingClients/${content.id}`)
      .set({ sale: true }, { merge: true });
  };

  return (
    <>
      <CssBaseline />
      <Container>
        <TableTraingClients trackingClients={trackingClients} onClickOffBought={onClickOffBought} onClickUpBought={onClickUpBought} />
      </Container>
    </>
  );
};

const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    requesting: state.firestore.status.requesting.trackingClients,
    trackingClients: state.firestore.ordered.trackingClients,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBought: (idBusiness, content) => dispatch(addBought(idBusiness, content)),
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
            collection: 'subcompanies',
            doc: props.isAuth.uid,
            subcollections: [
              {
                collection: 'trackingClients',
                orderBy: ['time', 'desc'],
              },
            ],
          },
        ],
        storeAs: 'trackingClients',
      },
    ];
  }),
)(ClienTrakingApoint);
