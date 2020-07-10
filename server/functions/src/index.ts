import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { businessCreateController } from './components/business/BusinessController';
import { subCompanyCreateController, subCompanyDeletedController } from './components/subcompany/SubCompanyController';

const express = require('express');
const cors = require('cors');

admin.initializeApp({
  credential:   admin.credential.cert(require('../key/firebase_adminsdk.json')),
  databaseURL: "https://coronavirus-control.firebaseio.com"
});
admin.firestore().settings({ timestampsInSnapshots: true })
//apiReset.post('/createBusiness').form({"email":"pruebadesdeaca@gmail.com","password":"camilofeo9","displayName":"michael","company":"i3m","celphone":"3206408264","address":"Cra 76","city":"Medellin"})
const app = express();
app.use(cors());

app.post('/createBusiness',(req:any, res:any, next:any) => {
  return businessCreateController(req).then(() => {
    return res.status(200).json({
      result: true
    })
  }).catch((error) => {
    return next(new Error(error.toString()))
  })
})

app.use((error:any, req:any, res:any, next:any) => {
  if(error){
    console.error(error)
    return res.status(500).json({
      result: false,
      responseError: `${error.message}`
    })
  }
  return null;
})

export const apiReset = functions.https.onRequest(app);
export const createSubCompany = functions.https.onCall((data, context) => {
  if (!context.auth) return {status: 'error', code: 401, message: 'Not signed in'}
  return subCompanyCreateController(data)
  .then(() => {
    return { result : true, status: 'success', code: 200 }
  })
  .catch(error => {
    return { result: false, status: 'error', code: 500, message: error.code}
  });
})
//deteleSubCompany({"subCompanyId":"nP8iiqHDhbVUt5xOWPeqKqHD7O22","companyId":"v9RuHhTMGhhzgzJn3jPyZp0pELY2"})
export const deteleSubCompany = functions.https.onCall((data, context) => {
  if (!context.auth) return {status: 'error', code: 401, message: 'Not signed in'}
  return subCompanyDeletedController(data)
  .then(() => {
    return { result : true, status: 'success', code: 200 }
  })
  .catch(error => {
    return { result: false, status: 'error', code: 500, message: error.code}
  });
})

//getUser({"company":"prueba","content":{name: "subempresa","email":"empresaprueba@gmail.com","password":"camilofeo9"}})
/* Prueba de primer version esto se quitara */

export const onUserCreate =
  functions.firestore.document('business_collection/{emailId}/users/{userId}').onCreate((snap, context) => {

    const newValue = snap.data();

    return admin.firestore().runTransaction(transaction => {
      const documentRef = admin.firestore().doc(`business_collection/${context.params.emailId}/data/total`);
      return transaction.get(documentRef).then(mdoc => {
        const count = newValue.gender === 'female' ? 1 : 0;
        const currentTime = admin.firestore.FieldValue.serverTimestamp();
        const timeFemale = count === 1 ? currentTime : mdoc.get('totalWomen.time');
        const timeMale = count === 0 ? currentTime : mdoc.get('totalMen.time');

        // Ser menor implica age < 13 //
        const countChildren = newValue.age < 13 ? 1 : 0;
        const timeChildren = countChildren === 1 ? currentTime : mdoc.get('totalChildren.time');

        transaction.update(documentRef, {
          totalUsers: { value: mdoc.get('totalUsers.value') + 1, time: currentTime },
          totalMen: { value: mdoc.get('totalMen.value') + 1 - count, time: timeMale },
          totalWomen: { value: mdoc.get('totalWomen.value') + count, time: timeFemale },
          totalChildren: { value: mdoc.get('totalChildren.value') + countChildren, time: timeChildren },
        });
      })
    }).then(function () {
    }).catch(function (error) {
    });
  });


export const onCompanyCreate =
  functions.firestore.document('business_collection/{emailId}').onCreate((snap, context) => {
    const currentTime = admin.firestore.FieldValue.serverTimestamp();
    const docData = {
      totalUsers: { value: 0, time: currentTime },
      totalMen: { value: 0, time: currentTime },
      totalWomen: { value: 0, time: currentTime },
      totalChildren: { value: 0, time: currentTime },
      totalTracking: { input: 0, output: 0 },
    }
    return admin.firestore().
      collection('business_collection').
      doc(context.params.emailId).
      collection('data').doc('total').set(docData)
      .then(() => console.log('Welcome!'))
      .catch((err) => console.log(err));
  });


  export const onTrackingNew =
  functions.firestore.document('business_collection/{emailId}/users/{userId}/tracking/{trackingId}').onCreate((snap, context) => {
    // aca ingresa la hora y el action //

    return admin.firestore().runTransaction(transaction => {
      const documentRef = admin.firestore().doc(`business_collection/${context.params.emailId}/data/total`);
      return transaction.get(documentRef).then(mdoc => {
        const count = snap.data().action  === 'IN' ? 1:0;

        transaction.update(documentRef, {
          totalTracking: {
            input: mdoc.get('totalTracking.input') + count,
            output: mdoc.get('totalTracking.output') + 1 - count},
        });
      })
    }).then(function () {
    }).catch(function (error) {
    });
  });
