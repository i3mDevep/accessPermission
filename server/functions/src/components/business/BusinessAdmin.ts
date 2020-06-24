import * as admin from 'firebase-admin';

class BusinessAdmin {
    registerWithEmailAndPassword(email:string,password:string,displayName:string){
      return admin.auth().createUser({
          disabled: false,
          displayName: displayName,
          email: email,
          password: password
      })
    }
    customeAttr(uid:any){
      return admin.auth().setCustomUserClaims(uid, {business: true})
    }
    saveFireStoreData(
        uuid:string,
        company:string,
        email:string,
        password:string,
        celphone:string,
        city:string,
        address:string
        ){
      return admin.firestore().collection('business').doc(uuid).set({
          uuid: uuid,
          company: company,
          email: email,
          password: password,
          celphone: celphone,
          city: city,
          address: address,
          time: admin.firestore.FieldValue.serverTimestamp()
      })
    }
    createFirestoreResum(uuid:string){
      const currentTime = admin.firestore.FieldValue.serverTimestamp();
      return admin.firestore().doc(`business/${uuid}/resum/totals`).set({
        Users: { value: 0, time: currentTime },
        Men: { value: 0, time: currentTime },
        Women: { value: 0, time: currentTime },
        Children: { value: 0, time: currentTime },
        Tracking: { input: 0, output: 0 }
      })
    }
}
export { BusinessAdmin };