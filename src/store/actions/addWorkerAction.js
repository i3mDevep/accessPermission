/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';
import { showAlert } from './sweetAlertActions';
import 'firebase/storage';

const ImageSave = async (identification, imageSrc, idBusiness) => {

  const storageRef = firebase.storage().ref(`${idBusiness}`);
  const fetch = async () => {
    return storageRef.child(`/${identification}/`).putString(imageSrc, 'data_url');
  };
  return new Promise((resolve, reject) => {
    fetch()
      .then((result) => {
        resolve(result.ref.getDownloadURL());
      })
      .catch(() => resolve(''));
  });
};

const saveDataWorker = (idBusiness, idSubcompany, content, imageSrc, db) => {

  return new Promise((resolve, reject) => {
    const docRef = `business/${idBusiness}/worker/${content.identification}`;
    const currentTime = firebase.firestore.FieldValue.serverTimestamp();

    db.doc(docRef).get()
      .then((doc) => {
        if (!doc.exists) {
          return ImageSave(content.identification, imageSrc, idBusiness)
            .then((url) => {
              //console.log(url);
              const addWorker = [{}];
              addWorker.push(
                db.doc(`business/${idBusiness}/subcompanies/${idSubcompany}/worker/${content.identification}`)
                  .set({
                    ...content,
                    urlImg: url,
                    time: currentTime,
                  }),
              );
              addWorker.push(
                db.doc(docRef).set({
                  ...content,
                  urlImg: url,
                  time: currentTime,
                }),
              );
              return Promise.all(addWorker);
            })
            .then(() => {
              resolve();
              return 0;
            })
            .catch((err) => {
              reject(err);
            });
        }
        if (doc.data().sede.value === 'Not Assigned') {
          throw new Error('Esta persona ya se encuentra registra, sin embargo, no tiene ninguna sede asiganda, si desea asignarle vaya a la pagina generador qr y seleccione editar sobre el empleado deseado');
        }
        throw new Error('Esta persona ya se encuentra registrada!');
      })
      .catch((e) => reject(e));
  });
};

export const addWorker = (idBusiness, idSubcompany, content, data64, imageSrc) => {

  const currentTime = firebase.firestore.FieldValue.serverTimestamp();

  return (dispatch) => {
    dispatch({ type: 'REQUEST_WORKER' });
    const db = firebase.firestore();
    return saveDataWorker(idBusiness, idSubcompany, content, imageSrc, db)
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
      })
      .then(() => {
        //console.log('cuarto then');
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
