import { SubCompanyAdmin } from './SubCompanyAdmin';

const subCompanyCreateController = (data:any) => {
    console.log(data);
    const idCompany = data.company;
    const dataSave = data.content;
    const email = dataSave.email;
    const password = dataSave.password;
    const displayName = 'subcompany';
    const SubCompany = new SubCompanyAdmin();
    return SubCompany.registerWithEmailAndPassword(email,password,displayName)
    .then((user) => {
        return SubCompany.saveFireStoreData(dataSave,idCompany, user.uid)
    });
}
const subCompanyDeletedController = (data:any) => {
    const subCompanyId = data.subCompanyId;
    const companyId = data.companyId;
    const SubCompany = new SubCompanyAdmin();
    return SubCompany.deleteEmail(subCompanyId)
    .then(() => {
        return SubCompany.deleteFireStoreData(companyId, subCompanyId)
    })
}
export { subCompanyCreateController, subCompanyDeletedController };