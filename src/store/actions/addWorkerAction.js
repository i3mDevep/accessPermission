/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';

export const addWorker = (idBusiness, idSubcompany, content) => {
  return (dispatch) => {
    const db = firebase.firestore();
    db.collection('business').doc(idBusiness).collection('subcompanies').doc(idSubcompany)
      .collection('worker')
      .add({
        ...content,
      })
      .then(() => {
        dispatch({ type: 'CREATE_WORKER_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_WORKER_ERROR' }, err);
      });
  };
};
