import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import AuthPointAttention from '../../components/AuthPointAttention/AuthPointAttention';

const AuthContainer = ({ workerList, requesting }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }
  return (
    <AuthPointAttention workers={workerList} />
  );
};
const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    workerList: state.firestore.ordered.subcompany,
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
            collection: 'worker',
          },
        ],
        storeAs: 'workerList',
      },
    ];
  }),
)(AuthContainer);