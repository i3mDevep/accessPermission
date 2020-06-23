/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';

export const deleteSubcompany = (idBusiness, idSubcompany) => {
  return (dispatch) => {
    const db = firebase.firestore();
    db.collection('business').doc(idBusiness).collection('subcompanies').doc(idSubcompany)
      .delete({
        ...content,
      })
      .then(() => {
        dispatch({ type: 'DELETE_WORKER_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'DELETE_WORKER_ERROR' }, err);
      });
  };
};
