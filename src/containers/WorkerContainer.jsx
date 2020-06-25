import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Worker from '../components/Worker/Worker';

const WorkerContainer = () => {
  return (
    <Worker />
  );
};

const mapStateProps = (state) => {
  console.log(state);
  return {
    isAuth: state.auth.isAuth,
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
            collection: 'resum',
            doc: 'totalsWorker',
          },
        ],
        storeAs: 'totalsWorker',
      },
      { collection: 'business',
        doc: props.isAuth.uid,
        subcollections: [
          {
            collection: 'worker',
          },
        ],
        storeAs: 'worker',
      //limit: 10,
      },
    ];
  }),
)(WorkerContainer);
