import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import Table from '../../components/Tables/Tables';

const ApointWorkerContainer = ({ requesting }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }

  return (
    <>
      <Table.ApointWorkerTableRow />
    </>
  );
};

const mapStateProps = (state) => {
  console.log(state);
  return {
    isAuth: state.auth.isAuth,
    requesting: state.firestore.status.requesting.workerSubcompanyFilter,
    workerTrakingSubCompany: state.firestore.ordered.workerTrakingSubCompany,
  };
};

export default compose(
  connect(mapStateProps, null),
  firestoreConnect((props) => {
    return [
      { collection: 'business',
        doc: props.isAuth.companyId,
        subcollections: [
          {
            collection: 'subcompanies',
            doc: props.isAuth.uid,
            subcollections: [
              { collection: 'worker' },
            ],
          },
        ],
        storeAs: 'workerSubCompany',
      },
      { collection: 'business',
        doc: props.isAuth.companyId,
        subcollections: [
          {
            collection: 'subcompanies',
            doc: props.isAuth.uid,
            subcollections: [
              { collection: 'trakingworker' },
            ],
          },
        ],
        storeAs: 'workerTrakingSubCompany',
      },
    ];
  }),
)(ApointWorkerContainer);
