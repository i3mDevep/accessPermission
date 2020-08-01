/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';
import { showAlert } from './sweetAlertActions';
import 'firebase/storage';

export const addClient = (idBusiness, content) => {
  console.log(idBusiness, content);
  const currentTime = firebase.firestore.FieldValue.serverTimestamp();
  const db = firebase.firestore().collection('business').doc(idBusiness).collection('clients');
  return db.doc(content.identification).set({ ...content, time: currentTime })
    .then((result) => {
      return db.doc(content.identification).collection('traking')
        .add({
          idenfification: content.idenfification,
          temperature: content.temperature,
          gps: ' Site Web',
          time: currentTime });
    })
    .then(() => {
      console.log('exito');
      showAlert({
        type: 'success',
        timeout: 2500,
        title: 'Exitoso!',
        content: 'Empleado Registrado !!!',
        showCancel: false,
      });
    })
    .catch((err) => {
      console.log('then33', err);
    });

};
