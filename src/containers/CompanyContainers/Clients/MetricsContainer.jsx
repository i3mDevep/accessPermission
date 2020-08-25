import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';
import Metrics from '../../../components/Metrics/Metrics';

const MetricsContainer = ({ totalsCompanies = [], sendData }) => {

  console.log('Container', sendData);
  return (
    <>
      <Metrics sendData={sendData} totalsCompanies={totalsCompanies} />
    </>
  );

};

const mapStateProps = (state) => {
  console.log(state);
  return {
    isAuth: state.auth.isAuth,
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
            doc: props.isAuth.uid,
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
)(MetricsContainer);
