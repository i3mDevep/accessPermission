/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';
import { showAlert } from './sweetAlertActions';

export const addTraking = (idBusiness, idSubcompany, content, dispatch) => {
  const currentTime = firebase.firestore.FieldValue.serverTimestamp();
  const db = firebase.firestore();
  return db.collection('business').doc(idBusiness)
    .collection('trakingworker').doc()
    .set({
      ...content,
      time: currentTime,
    })
    .then(() => {
      console.log('Document successfully written!');
      return db.collection('business').doc(idBusiness)
        .collection('subcompanies').doc(idSubcompany)
        .collection('trakingworker')
        .doc()
        .set({
          ...content,
          time: currentTime,
        });
    })
    .then(() => {
      dispatch({ type: 'CREATE_TRAKING_SUCCESS' });
      showAlert({
        type: 'success',
        timeout: 2500,
        title: 'Exitoso!',
        content: 'Empleado Registrado !!!',
        showCancel: false,
      });
      console.log('Alertt!');
    })
    .catch((err) => {
      showAlert({
        type: 'error',
        timeout: 9500,
        title: 'Opss!',
        content: err.message,
        showCancel: false,
      });
      dispatch({ type: 'CREATE_TRAKING_ERROR', err });
    });
};
