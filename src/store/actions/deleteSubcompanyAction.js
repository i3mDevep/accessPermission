/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';
import 'firebase/auth';

export const deleteSubCompany = (data) => {
  return (dispatch) => {
    dispatch({ type: 'REQUEST_SUBCOMPANY_DELETE' });
    const deteleSubCompany = firebase.functions().httpsCallable('deteleSubCompany');
    deteleSubCompany(data)
      .then((response) => {
        console.log(response);
        dispatch({ type: 'DELETE_SUBCOMPANY_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'DELETE_SUBCOMPANY_ERROR', err: err.message });
      });
  };
};
