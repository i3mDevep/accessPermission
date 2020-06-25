/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';

export const deleteWorker = (data) => {

  const { companyId, subCompanyId, identification, gender } = data;

  return (dispatch) => {
    dispatch({ type: 'REQUEST_WORKER_DELETE' });
    return firebase.firestore().doc(`business/${companyId}/worker/${identification}`).delete()
      .then(() => {
        return firebase.firestore().doc(`business/${companyId}/subcompanies/${subCompanyId}/worker/${identification}`).delete();
      })
      .then(() => {
        return firebase.firestore().runTransaction((transaction) => {
          const documentRef = firebase.firestore().doc(`business/${companyId}/resum/totalsWorker`);
          return transaction.get(documentRef)
            .then((mdoc) => {

              const Worker = mdoc.get('Worker.value') - 1;
              const Men = mdoc.get('Men.value') - 1;
              const Women = mdoc.get('Women.value') - 1;
              const timeWorker = mdoc.get('Worker.time');
              const timeMen = mdoc.get('Men.time');
              const timeWomen = mdoc.get('Women.time');

              switch (gender) {
                case 'Hombre':
                  transaction.update(documentRef, {
                    Worker: {
                      value: Worker,
                      time: timeWorker },
                    Men: {
                      value: Men,
                      time: timeMen,
                    },
                  });
                  break;
                case 'Mujer':
                  transaction.update(documentRef, {
                    Worker: {
                      value: Worker,
                      time: timeWorker },
                    Women: {
                      value: Women,
                      time: timeWomen,
                    },
                  });
                  break;
              }
            });
        });
      });
  };
};
