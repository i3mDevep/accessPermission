import * as admin from 'firebase-admin';

class SubCompanyAdmin {
    registerWithEmailAndPassword(email:string,password:string,displayName:string){
        return admin.auth().createUser({
            disabled: false,
            displayName: displayName,
            email: email,
            password: password
        })
    }
    saveFireStoreData(content:any,companyId:string,idSubCompany:string){
      return admin.firestore().collection(`business/${companyId}/subcompanies`).doc(idSubCompany).set({
          ...content,
          time: admin.firestore.FieldValue.serverTimestamp()
      })
    }
    deleteFireStoreData(companyId:string, subCompanyId:string){
        return admin.firestore().collection(`business/${companyId}/subcompanies`).doc(subCompanyId).delete();
    }
    deleteEmail(idEmail:string){
        return admin.auth().deleteUser(idEmail);
    }
}

export { SubCompanyAdmin };