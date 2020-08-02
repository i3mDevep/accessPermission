/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';
import { showAlert } from './sweetAlertActions';
import 'firebase/storage';

const saveClient = (idBusiness, content, db) => {
  return new Promise((resolve, reject) => {
    //const docRef = `business/${idBusiness}/clients/${content.identification}`;
    const currentTime = firebase.firestore.FieldValue.serverTimestamp();
    db.doc(content.identification).get()
      .then((doc) => {
        if (!doc.exists) {
          console.log('el documento No existe');
          return db.doc(content.identification).set({ ...content, time: currentTime });

        }
        console.log('el documento  existe');

      })
      .catch((e) => reject(e));
  });
};

export const addClient = (idBusiness, content) => {
  const currentTime = firebase.firestore.FieldValue.serverTimestamp();
  const docRef = `business/${idBusiness}/clients/${content.identification}/tracking`;
  return (dispatch) => {
    const db = firebase.firestore().collection('business').doc(idBusiness).collection('clients');
    dispatch({ type: 'REQUEST_CLIENT' });
    return new Promise((resolve, reject) => {
      db.doc(content.identification).get()
        .then((doc) => {
          if (!doc.exists) {
            console.log('el documento No existe');
            return db.doc(content.identification).set({ ...content, time: currentTime }).then(() => {
              return firebase.firestore().collection(docRef).add({ ...content, time: currentTime });
            });
          }
          console.log('el documento  existe');
          return firebase.firestore().collection(docRef).add({ ...content, time: currentTime });

        })
        .then(() => {
          showAlert({
            type: 'success',
            timeout: 2500,
            title: 'Exitoso!',
            content: 'Cliente Registrado !!!',
            showCancel: false,
          })(dispatch);
          dispatch({ type: 'CREATE_CLIENT_SUCCESS' });
          resolve('melo!');
        })
        .catch((e) => reject(e));
    });

    /*
    return saveClient(idBusiness, content, db)
      .then(() => {
        showAlert({
          type: 'success',
          timeout: 2500,
          title: 'Exitoso!',
          content: 'Cliente Registrado !!!',
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
      });*/
  };
};

export const updateTraking = (idBusiness, content) => {
  const currentTime = firebase.firestore.FieldValue.serverTimestamp();
  return (dispatch) => {
    const db = firebase.firestore().collection('business').doc(idBusiness).collection('clients')
      .doc(content.identification)
      .collection('traking');
    dispatch({ type: 'REQUEST_CLIENT' });
    return db.set({ ...content, time: currentTime })
      .then(() => {
        showAlert({
          type: 'success',
          timeout: 2500,
          title: 'Exitoso!',
          content: 'Cliente Registrado !!!',
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
