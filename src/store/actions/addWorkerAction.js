/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';
import { showAlert } from './sweetAlertActions';

export const addWorker = (idBusiness, idSubcompany, content, data64) => {
  const currentTime = firebase.firestore.FieldValue.serverTimestamp();
  return (dispatch) => {
    dispatch({ type: 'REQUEST_WORKER' });
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
              time: currentTime,
            })
            .then(() => {
              return db.collection('business').doc(idBusiness).collection('worker').doc(content.identification)
                .set({
                  ...content,
                  time: currentTime,
                });
            })
            .then(() => {
              return db.runTransaction((transaction) => {
                const documentRef = db.doc(`business/${idBusiness}/resum/totalsWorker`);
                return transaction.get(documentRef)
                  .then((mdoc) => {
                    const { gender } = content;
                    const Worker = mdoc.get('Worker.value') + 1;
                    const Men = mdoc.get('Men.value') + 1;
                    const Women = mdoc.get('Women.value') + 1;
                    switch (gender) {
                      case 'Hombre':
                        transaction.update(documentRef, {
                          Worker: {
                            value: Worker,
                            time: currentTime },
                          Men: {
                            value: Men,
                            time: currentTime,
                          },
                        });
                        break;
                      case 'Mujer':
                        transaction.update(documentRef, {
                          Worker: {
                            value: Worker,
                            time: currentTime },
                          Women: {
                            value: Women,
                            time: currentTime,
                          },
                        });
                        break;
                    }
                  });
              });
            });
        } if (doc.data().sede.value === 'Not Assigned') {
          throw new Error('Esta persona ya se encuentra registra, sin embargo, no tiene ninguna sede asiganda, si desea asignarle vaya a la pagina generador qr y seleccione editar sobre el empleado deseado');
        }
        throw new Error('Esta persona ya se encuentra registrada!');
      })
      .then(() => {
        const config = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: content.name, email: content.email, img: data64 }),
        };
        fetch(
          'https://us-central1-coronavirus-control.cloudfunctions.net/apiReset/createWorker',
          config,
        );
      })
      .then(() => {
        showAlert({
          type: 'success',
          timeout: 2500,
          title: 'Exitoso!',
          content: 'Empleado Registrado !!!',
          showCancel: false,
        })(dispatch);
        dispatch({ type: 'CREATE_WORKER_SUCCESS' });
      })
      .catch((err) => {
        console.log(err);
        showAlert({
          type: 'error',
          timeout: 9500,
          title: 'Opss!',
          content: err.message,
          showCancel: false,
        })(dispatch);
        dispatch({ type: 'CREATE_WORKER_ERROR', err });
      });
  };
};
/*

          return db.collection('business').doc(idBusiness).collection('subcompanies').doc(idSubcompany)
            .collection('worker')
            .doc(content.identification)
            .set({
              ...content,
              time: currentTime,
            })
            .then(() => {
              return db.collection('business').doc(idBusiness).collection('worker').doc(content.identification)
                .set({
                  ...content,
                  time: currentTime,
                });
            })
            .then(() => {
              return db.runTransaction((transaction) => {
                const documentRef = db.doc(`business/${idBusiness}/resum/totalsWorker`);
                return transaction.get(documentRef)
                  .then((mdoc) => {
                    const { gender } = content;
                    const Men = mdoc.get('Men.value');
                    const Women = mdoc.get('Women.value');

                    if (doc.data().gender === 'Mujer' && gender === 'Hombre') {
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
                    if (doc.data().gender === 'Hombre' && gender === 'Mujer') {
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
              });
            });
*/