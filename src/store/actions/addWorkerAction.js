/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';

export const addWorker = (idBusiness, idSubcompany, content) => {
  return (dispatch) => {
    const db = firebase.firestore();
    const docRef = `business/${idBusiness}/worker/${content.identification}`;
    return db.doc(docRef).get()
      .then((doc) => {
        if (!doc.exists) {
          return db.collection('business').doc(idBusiness).collection('subcompanies').doc(idSubcompany)
            .collection('worker')
            .doc(content.identification)
            .set({
              ...content,
            });
        }
        throw new Error('Not allow overwritten!');
      })
      .then(() => {
        return db.collection('business').doc(idBusiness).collection('worker').doc(content.identification)
          .set({
            ...content,
          });
      })
      .then(() => {
        return db.runTransaction((transaction) => {
          const documentRef = db.doc(`business/${idBusiness}/resum/totalsWorker`);
          return transaction.get(documentRef)
            .then((mdoc) => {
              const currentTime = firebase.firestore.FieldValue.serverTimestamp();
              const { gender } = content;
              switch (gender) {
                case 'Hombre':
                  transaction.update(documentRef, {
                    Worker: {
                      value: mdoc.get('Worker.value') + 1,
                      time: currentTime },
                    Men: {
                      value: mdoc.get('Men.value') + 1,
                      time: currentTime,
                    },
                  });
                  break;
                case 'Mujer':
                  transaction.update(documentRef, {
                    Worker: {
                      value: mdoc.get('Worker.value') + 1,
                      time: currentTime },
                    Women: {
                      value: mdoc.get('Women.value') + 1,
                      time: currentTime,
                    },
                  });
                  break;
              }
            });
        });
      })
      .then(() => {
        dispatch({ type: 'CREATE_WORKER_SUCCESS' });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: 'CREATE_WORKER_ERROR', err });
      });
  };
};
