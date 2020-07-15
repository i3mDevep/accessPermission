/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';

export const addTraking = (idBusiness, idSubcompany, content) => {
  console.log(idBusiness, idSubcompany, content);
  const currentTime = firebase.firestore.FieldValue.serverTimestamp();
  const db = firebase.firestore();
  const docRef = 'trakingworker';
  return db.collection('business').doc(idBusiness)
    .collection('trakingworker')
    .set({
      ...content,
      time: currentTime,
    })
    .then(() => {
      console.log('Document successfully written!');
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });

};
