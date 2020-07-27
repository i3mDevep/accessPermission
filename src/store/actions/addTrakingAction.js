/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';
import { showAlert } from './sweetAlertActions';
import 'firebase/storage';

export const addTraking = (idBusiness, idSubcompany, content, imageSrc) => {

  const currentTime = firebase.firestore.FieldValue.serverTimestamp();
  return (dispatch) => {
    const db = firebase.firestore().collection('business').doc(idBusiness);
    const storageRef = firebase.storage().ref(`${idBusiness}/traking`);
    let globalId = '';
    let globalUrl = '';
    dispatch({ type: 'REQUEST_TRAKING' });
    return db.collection('trakingworker').add({ ...content, time: currentTime })
      .then((result) => {
        globalId = result.id;
        return storageRef.child(result.id).putString(imageSrc, 'data_url');
      })
      .then((result) => {
        return result.ref.getDownloadURL();
      })
      .then((url) => {
        globalUrl = url;
        return db.collection('trakingworker')
          .doc(globalId)
          .update({
            urlImg: url,
          });
      })
      .then(() => {
        return db.collection('subcompanies').doc(idSubcompany)
          .collection('trakingworker')
          .doc(globalId)
          .set({
            ...content,
            urlImg: globalUrl,
            time: currentTime,
          });
      })
      .then(() => {
        showAlert({
          type: 'success',
          timeout: 2500,
          title: 'Exitoso!',
          content: 'Empleado Registrado !!!',
          showCancel: false,
        })(dispatch);
        dispatch({ type: 'CREATE_TRAKING_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_TRAKING_ERROR', err });
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
