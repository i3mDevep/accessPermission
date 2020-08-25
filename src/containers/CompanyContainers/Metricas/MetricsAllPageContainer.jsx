import React, { useState } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';
import Metrics from '../../../components/Metrics/Metrics';

const MetricsAllPageContainer = ({ totalsCompanies = [], pruebaId }) => {
console.log('ensayando', pruebaId);
  return (
    <>
      <Metrics sendData={(data) => console.log('estoy en container', data)} totalsCompanies={totalsCompanies} />
    </>
  );

};

const mapStateProps = (state) => {
  console.log(state);
  return {
    isAuth: state.auth.isAuth,
    pruebaId: 'MXA9fvru09N6AV6N9udpHfaFyMg1',
    requesting: state.firestore.status.requesting.totalsCompanies,
    totalsCompanies: state.firestore.ordered.totalsCompanies,
    totalForDay: state.firestore.data.totalForDay,
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
      { collection: 'business',
        doc: props.isAuth.uid,
        subcollections: [
          {
            collection: 'subcompanies',
            doc: props.pruebaId,
            subcollections: [
              {
                collection: 'totalForDay',
                //where: [['date', '>=', moment().startOf('day').toDate()], ['date', '<=', moment().endOf('day').toDate()]],
              },
            ],
          },
        ],
        storeAs: 'totalForDayEnsayo',
      },
    ];
  }),
)(MetricsAllPageContainer);
