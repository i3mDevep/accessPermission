/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';
import { showAlert } from './sweetAlertActions';
import 'firebase/storage';

export const addClient = (idBusiness, content) => {
  console.log(content)
  const currentTime = firebase.firestore.FieldValue.serverTimestamp();
  const docRef = `business/${idBusiness}/clients/${content.identification}/tracking`;
  return (dispatch) => {
    const db = firebase.firestore().collection('business').doc(idBusiness).collection('clients');
    dispatch({ type: 'REQUEST_CLIENT' });
    return new Promise((resolve, reject) => {
      db.doc(content.identification).get()
        .then((doc) => {
          //  if (!doc.exists) {
          //console.log('el documento No existe');
          return db.doc(content.identification).set({ ...content, time: currentTime }).then(() => {
            return firebase.firestore().collection(docRef)
              .add({
                gps: content.idSubcompany,
                idSubcompany: content.idSubcompany,
                address: content.address,
                identification: content.identification,
                temperature: content.temperature,
                cause: content.cause,
                time: currentTime });
          });
          /*}
         // console.log('el documento  existe');
          return firebase.firestore().collection(docRef)
            .add({
              gps: content.idSubcompany,
              idSubcompany: content.idSubcompany,
              identification: content.identification,
              temperature: content.temperature,
              cause: content.cause,
              time: currentTime,
            });*/

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
  };
};
