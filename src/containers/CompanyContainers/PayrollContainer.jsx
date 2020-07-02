import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import Table from '../../components/Tables/LayoutTable/Tables';

const PayrollContainer = ({ requesting }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }
  return (
    <Table.PayRollTable />
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
            collection: 'worker',
          },
        ],
        storeAs: 'worker',
      },
      { collection: 'business',
        doc: props.isAuth.uid,
        subcollections: [
          {
            collection: 'trakingworker',
          },
        ],
        storeAs: 'workerTrakingCompany',
      },
    ];
  }),
)(PayrollContainer);
