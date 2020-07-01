import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import Table from '../../components/Tables/LayoutTable/Tables';

const ApointWorkerContainer = ({ requesting }) => {
  if (requesting) {
    return <LoopCircleLoading />;
  }
  return (
    <Table.ApointWorkerTableRow />
  );
};
const mapStateProps = (state) => {
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
        subcollections: [
          {
            collection: 'subcompanies',
            doc: props.isAuth.uid,
            subcollections: [
              { collection: 'worker' },
            ],
          },
        ],
        storeAs: 'workerSubcompanyFilter',
      },
    ];
  }),
)(ApointWorkerContainer);
