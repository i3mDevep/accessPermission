/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';
import 'firebase/auth';

export const deleteSubcompany = (idBusiness, idSubcompany) => {
  return (dispatch) => {
    const deteleSubCompany = firebase.functions().httpsCallable('deteleSubCompany');
    deteleSubCompany(dataSubCompany)
      .then((response) => {
        
        if (response.data.result === true) {
          setModalShow(false);
        }
      }).finally(() => setLoading(false));
  };
};
