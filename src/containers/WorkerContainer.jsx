import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { deleteWorker } from '../store/actions/deleteWorkerAction';
import Worker from '../components/Worker/Worker';

const WorkerContainer = ({ deleteWorker, isAuth }) => {
  const handlerDeleteWorker = (event, rowData) => {
    confirm(`You want to delete ${rowData.idsede}`);
    deleteWorker({ companyId: isAuth.uid, subCompanyId: rowData.idsede, identification: rowData.identification, gender: rowData.gender });
  };
  return (
    <Worker onClickDeleteWorker={handlerDeleteWorker} />
  );
};

const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToPros = (dispatch) => {
  return {
    deleteWorker: (data) => dispatch(deleteWorker(data)),
  };
};

export default compose(
  connect(mapStateProps, mapDispatchToPros),
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
