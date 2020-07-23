import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { LoopCircleLoading } from 'react-loadingg';
import Table from '../../components/Tables/Tables';

const TrackingContainer = ({ requestingWorker, requestingWorkerTrakingCompany }) => {
  //Condicion de vida  o muerte sino comienzaa a combinar datos de una sesion con otra datos //
  if (requestingWorker || requestingWorkerTrakingCompany) {
    return (
      <div>
        <LoopCircleLoading />
        <p>Cargando datos...</p>
      </div>
    );
  }
  return (
    <Table.CompanyTrackingTable />
  );
};
const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    requestingWorker: state.firestore.status.requesting.worker,
    requestingWorkerTrakingCompany: state.firestore.status.requesting.workerTrakingCompany,
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
            collection: 'trakingworker',
            orderBy: ['time', 'desc'],
          },
        ],
        storeAs: 'workerTrakingCompany',
      },
      { collection: 'business',
        doc: props.isAuth.uid,
        subcollections: [
          {
            collection: 'worker',
          },
        ],
        storeAs: 'worker',
      },
    ];
  }),
)(TrackingContainer);
