import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Metrics from '../../../components/Metrics/Metrics';

const MetricsContainer = ({ totalsCompanies = [] }) => {

  return (
    <>
      <Metrics totalsCompanies={totalsCompanies} />
    </>
  );

};

const mapStateProps = (state) => {

  return {
    isAuth: state.auth.isAuth,
    requesting: state.firestore.status.requesting.totalsCompanies,
    totalsCompanies: state.firestore.ordered.totalsCompanies,
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
        storeAs: 'totalsCompanies',
      },
    ];
  }),
)(MetricsContainer);
