import React, { useState } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Alert from '@material-ui/lab/Alert';
import moment from 'moment';
import Metrics from '../../../components/Metrics/Metrics';

const MetricsAllPageContainer = ({ idSubcompamy = '' }) => {
  console.log(idSubcompamy);
  if (!idSubcompamy) {
    return <Alert severity='warning'>Seleccione una Sede</Alert>;
  }
  return (
    <>
      <Metrics />
    </>
  );

};

const mapStateProps = (state, { idSubcompamy }) => {
  console.log(state);
  return {
    idsub: idSubcompamy.length > 0 ? idSubcompamy : 'No tengo ID',
    isAuth: state.auth.isAuth,
    requesting: state.firestore.status.requesting.totalsCompanies,
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
            doc: props.idsub,
            subcollections: [
              {
                collection: 'totalForDay',
                //where: [['date', '>=', moment().startOf('day').toDate()], ['date', '<=', moment().endOf('day').toDate()]],
              },
            ],
          },
        ],
        storeAs: 'totalForDay',
      },
    ];
  }),
)(MetricsAllPageContainer);
