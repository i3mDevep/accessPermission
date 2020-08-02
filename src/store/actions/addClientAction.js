/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';
import { showAlert } from './sweetAlertActions';
import 'firebase/storage';

export const addClient = (idBusiness, content) => {
  console.log(idBusiness, content);
  const currentTime = firebase.firestore.FieldValue.serverTimestamp();
  return (dispatch) => {

    const db = firebase.firestore().collection('business').doc(idBusiness).collection('clients');
    dispatch({ type: 'REQUEST_CLIENT' });
    return db.doc(content.identification).set({ ...content, time: currentTime })
      .then((result) => {
        return db.doc(content.identification).collection('traking')
          .add({
            // idenfification: content.idenfification,
            // temperature: content.temperature,
            gps: ' Site Web',
            time: currentTime });
      })
      .then(() => {
        showAlert({
          type: 'success',
          timeout: 2500,
          title: 'Exitoso!',
          content: 'Empleado Registrado !!!',
          showCancel: false,
        })(dispatch);
        dispatch({ type: 'CREATE_CLIENT_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_CLIENT_ERROR', err });
        showAlert({
          type: 'error',
          timeout: 9500,
          title: 'Opss!',
          content: err.message,
          showCancel: false,
        });
      });
  };
};
