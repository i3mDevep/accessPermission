import React, { useState } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { deleteWorker } from '../../store/actions/deleteWorkerAction';
import Worker from '../../components/Worker/Worker';

const WorkerContainer = ({ deleteWorker, isAuth }) => {
  const [show, setShow] = useState(false);
  const [init, setInit] = useState('');

  const handlerDeleteWorker = (rowData) => {
    return new Promise((resolve, reject) => {
      deleteWorker({ companyId: isAuth.uid, subCompanyId: rowData.idsede, identification: rowData.identification, gender: rowData.gender })
        .then(() => resolve())
        .catch((err) => reject(err));
    });

  };
  const handlerEditWorker = (rowData) => {
    setShow(true);
    setInit(rowData);
  };
  return (
    <Worker init={init} show={show} onHide={() => setShow(false)} onClickDeleteWorker={handlerDeleteWorker} onClickEditWorker={handlerEditWorker} />
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
      },
    ];
  }),
)(WorkerContainer);
