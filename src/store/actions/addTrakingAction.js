/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';
import { showAlert } from './sweetAlertActions';
import 'firebase/storage';

export const addTraking = (idBusiness, idSubcompany, content, imageSrc) => {
  const currentTime = firebase.firestore.FieldValue.serverTimestamp();
  const db = firebase.firestore().collection('business').doc(idBusiness);
  const storageRef = firebase.storage().ref(`${idBusiness}/traking`);
  let globalId = '';
  let globalUrl = '';

  return db.collection('trakingworker')
    .add({
      ...content,
      time: currentTime,
    })
    .then((result) => {
      console.log('complete track Comp ')
      globalId = result.id;
      return storageRef.child(result.id).putString(imageSrc, 'data_url');
    })
    .then((result) => {
      return result.ref.getDownloadURL();
    })
    .then((url) => {
      globalUrl = url;
      console.log('complete track Comp url')
      return db.collection('trakingworker')
        .doc(globalId)
        .update({
          urlImg: url,
        });
    })
    .then((url) => {
      console.log('complete track Sub')
      return db.collection('subcompanies').doc(idSubcompany)
        .collection('trakingworker')
        .doc(globalId)
        .set({
          ...content,
          urlImg: globalUrl,
          time: currentTime,
        });
    })
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
