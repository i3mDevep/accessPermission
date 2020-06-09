import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Workspace from '../components/Workspace/WorkSpace';

const WorkspaceContainer = () => (
  <Workspace />
);

const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateProps, null),
  firestoreConnect((props) => {
    return [
      { collection: 'business_collection',
        doc: props.isAuth.email,
        subcollections: [
          {
            collection: 'data',
            doc: 'total',
          },
        ],
        storeAs: 'total',
      },
      { collection: 'business_collection',
        doc: props.isAuth.email,
        subcollections: [
          {
            collection: 'users',
          },
        ],
        storeAs: 'users',
        //limit: 10,
      },
    ];
  }),
)(WorkspaceContainer);
