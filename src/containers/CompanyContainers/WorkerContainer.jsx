import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import firebase from 'firebase/app';
import { deleteWorker } from '../../store/actions/deleteWorkerAction';
import { editWorker } from '../../store/actions/editWorkerAction';
import 'firebase/storage';
import Worker from '../../components/Worker/Worker';

const WorkerContainer = ({ deleteWorker, editWorker, isAuth, subCompanies }) => {
  const [show, setShow] = useState(false);
  const [init, setInit] = useState('');
  const [photos, setPhoto] = useState({});

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
  const handlerEditOnSubmit = (init, content) => {
    setShow(false);
    editWorker(isAuth.uid, content, init);
  };

  useEffect(() => {
    firebase.storage().ref().child(isAuth.displayName).listAll()
      .then((result) => {
        const urls = {};
        result.prefixes.forEach((ref, index) => {
          return ref.child('photoURL').getDownloadURL()
            .then((url) => {
              urls[ref.name] = url;
              if (result.prefixes.length - 1 === index) {
                setPhoto(urls);
              }
            });
        });
      });
  }, []);

  return (
    <Worker 
      photos={photos} 
      onSubmit={handlerEditOnSubmit} 
      sedes={subCompanies} 
      init={init}
      show={show} 
      onHide={() => setShow(false)} 
      onClickDeleteWorker={handlerDeleteWorker} 
      onClickEditWorker={handlerEditWorker} />
  );
};

const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    subCompanies: state.firestore.ordered.subcompany,
  };
};

const mapDispatchToPros = (dispatch) => {
  return {
    deleteWorker: (data) => dispatch(deleteWorker(data)),
    editWorker: (idBusiness, currentContent, passContent) => dispatch(editWorker(idBusiness, currentContent, passContent)),
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
      { collection: 'business',
        doc: props.isAuth.uid,
        subcollections: [
          {
            collection: 'subcompanies',
          },
        ],
        storeAs: 'subcompany',
      },
    ];
  }),
)(WorkerContainer);
