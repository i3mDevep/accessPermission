/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';

export const addUser = (bussines, info) => {
  console.log(info);
  return (dispatch) => {
    const db = firebase.firestore();
    db.collection('business_collection').doc(bussines).collection('users').doc(info.identification)
      .set({
        ...info,
      })
      .then(() => {
        dispatch({ type: 'CREATE_RETRO_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_RETRO_ERROR' }, err);
      });
  };
};
