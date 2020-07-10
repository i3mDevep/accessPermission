/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';

export const addTraking = (idBusiness, traking) => {
  console.log(traking);
  const currentTime = firebase.firestore.FieldValue.serverTimestamp();
  return (dispatch) => {
    const db = firebase.firestore();
    const docRef = `business/${idBusiness}/trakingworker`;
    return db.collection(docRef).add(traking).set({
      ...traking,
      time: currentTime,
    })
      .then(() => {
        dispatch({ type: 'CREATE_TRAKING_SUCCESS' });
        console.log(correcto);
      })
      .catch((error) => {
        alert('error');
      });
  };

};
