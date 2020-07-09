/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';

export const addTraking = (idBusiness, idSubcompany, traking) => {
  console.log(traking);
  const currentTime = firebase.firestore.FieldValue.serverTimestamp();
  return (dispatch) => {
    dispatch({type: 'CREATE_TRAKING_SUCCESS'});
    const db = firebase.firestore();
    const docRef = `business/${idBusiness}/worker/${content.identification}`;
    return db.collection('business').doc(idBusiness).collection('trakingworkers')
  }

};
