/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';

const updateTotalsWorker = (currentTime, idBusiness, currentContent, passContent) => {
  const db = firebase.firestore();
  return new Promise((resolve, reject) => {
    db.runTransaction((transaction) => {
      const documentRef = db.doc(`business/${idBusiness}/resum/totalsWorker`);
      return transaction.get(documentRef)
        .then((mdoc) => {
          const Men = mdoc.get('Men.value');
          const Women = mdoc.get('Women.value');
          if (passContent.gender === 'Mujer' && currentContent.gender === 'Hombre') {
            transaction.update(documentRef, {
              Men: {
                value: Men + 1,
                time: currentTime,
              },
              Women: {
                value: Women - 1,
                time: currentTime,
              },
            });
          }
          if (passContent.gender === 'Hombre' && currentContent.gender === 'Mujer') {
            transaction.update(documentRef, {
              Men: {
                value: Men - 1,
                time: currentTime,
              },
              Women: {
                value: Women + 1,
                time: currentTime,
              },
            });
          }
        });
    })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

export const editWorker = (idBusiness, currentContent, passContent) => {
  //console.log(passContent);
  const currentTime = firebase.firestore.FieldValue.serverTimestamp();
  return (dispatch) => {
    dispatch({ type: 'UPDATE_REQUEST_WORKER' });
    const db = firebase.firestore();
    if (passContent.idsede !== 'Not Assigned') {
      if (currentContent.sede.id === passContent.idsede) {
        return db.doc(`business/${idBusiness}/subcompanies/${currentContent.sede.id}/worker/${currentContent.identification}`).update({
          ...currentContent,
          time: currentTime,
        })
          .then(() => {
            return db.doc(`business/${idBusiness}/worker/${currentContent.identification}`).update({
              ...currentContent,
              time: currentTime,
            });
          })
          .then(() => {
            if (currentContent.gender !== passContent.gender) {
              return updateTotalsWorker(currentTime, idBusiness, currentContent, passContent);
            }
            return 0;
          })
          .then(() => {
           // console.log('update arriba');
            dispatch({ type: 'UPDATE_WORKER_SUCCESS' });
          })
          .catch((err) => {
           // console.log('update arriba error');
            dispatch({ type: 'UPDATE_WORKER_ERROR', err });
          });
      }

      return db.doc(`business/${idBusiness}/subcompanies/${passContent.idsede}/worker/${currentContent.identification}`).delete()
        .then(() => {
          return db.doc(`business/${idBusiness}/subcompanies/${currentContent.sede.id}/worker/${currentContent.identification}`).set({
            ...currentContent,
          });
        })
        .then(() => {
          return db.doc(`business/${idBusiness}/worker/${currentContent.identification}`).update({
            ...currentContent,
          });
        })
        .then(() => {
          if (currentContent.gender !== passContent.gender) {
            return updateTotalsWorker(currentTime, idBusiness, currentContent, passContent);
          }
          return 0;
        })
        .then(() => {
         // console.log('update');

          dispatch({ type: 'UPDATE_WORKER_SUCCESS' });
        })
        .catch((err) => {
         // console.log('error', err);
          dispatch({ type: 'UPDATE_WORKER_ERROR', err });
        });
    }
    return db.doc(`business/${idBusiness}/worker/${currentContent.identification}`).update({
      ...currentContent,
      time: currentTime,
    })
      .then(() => {
        if (currentContent.sede.id !== 'Not Assigned') {
          return db.doc(`business/${idBusiness}/subcompanies/${currentContent.sede.id}/worker/${currentContent.identification}`).set({
            ...currentContent,
            time: currentTime,
          });
        }
        return 0;
      }).then(() => {
        if (currentContent.gender !== passContent.gender) {
          return updateTotalsWorker(currentTime, idBusiness, currentContent, passContent);
        }
        return 0;
      })
      .then(() => {
        //console.log('update 2');
        dispatch({ type: 'UPDATE_WORKER_SUCCESS' });
      })
      .catch((err) => {
       // console.log('update error 2', err);
        dispatch({ type: 'UPDATE_WORKER_ERROR', err });
      });
  };
};
