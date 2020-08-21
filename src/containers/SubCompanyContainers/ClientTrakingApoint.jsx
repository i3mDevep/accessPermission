/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TableTraingClients from '../../components/Tables/ClientApoint/index';

import { addBought } from '../../store/actions/addBoughtAction';

const ClienTrakingApoint = ({ requesting, isAuth, trackingClients, addBought }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }

  const onClickOffBought = (content) => {
    console.log(isAuth)
    addBought(content);
  };

  const onClickUpBought = (content) => {
    addBought(content);
    //console.log('onClickUpBought', content);
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
  //console.log('stado', state);
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
              { collection: 'trackingClients' },
            ],
          },
        ],
        storeAs: 'trackingClients',
      },
    ];
  }),
)(ClienTrakingApoint);
