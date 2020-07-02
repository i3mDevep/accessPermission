import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import Table from '../../components/Tables/LayoutTable/Tables';

const PayrollContainer = ({ requesting, onClickDeleteWorker }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }
  return (
    <Table.WorkerTableRow onClickDeleteWorker={onClickDeleteWorker} />
  );
};
const mapStateProps = (state) => {
  console.log(state);
  return {
    isAuth: state.auth.isAuth,
    requesting: state.firestore.status.requesting.workerSubcompanyFilter,
  };
};

export default compose(
  connect(mapStateProps, null),
  firestoreConnect((props) => {
    return [
      { collection: 'business',
        doc: props.isAuth.companyId,
        storeAs: 'payroll',
      },

    ];
  }),
)(PayrollContainer);