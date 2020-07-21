/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';
import { showAlert } from './sweetAlertActions';
import 'firebase/storage';
import { displayName } from 'qrcode.react';

export const addTraking = (idBusiness, idSubcompany, content, dispatch) => {
  const currentTime = firebase.firestore.FieldValue.serverTimestamp();
  const db = firebase.firestore();
  return db.collection('business').doc(idBusiness)
    .collection('trakingworker')
    .add({
      ...content,
      time: currentTime,
    })
    .then((result) => {
     // dispatch({ type: 'CREATE_TRAKING_ERROR', err });
      firebase.storage().ref().child(`${idBusiness}/${content.identification}/traking/${result.id}`).putString(content.imageSrc, 'data_url');
      return db.collection('business').doc(idBusiness)
        .collection('subcompanies').doc(idSubcompany)
        .collection('trakingworker')
        .add({
          ...content,
          time: currentTime,
        });
    }, console.log('Alertt!'))
    .catch((err) => {
     // dispatch({ type: 'CREATE_TRAKING_ERROR', err });
      showAlert({
        type: 'error',
        timeout: 9500,
        title: 'Opss!',
        content: err.message,
        showCancel: false,
      });
    });
};
