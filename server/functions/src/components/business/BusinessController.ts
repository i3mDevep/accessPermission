import { BusinessAdmin } from './BusinessAdmin';

const businessCreateController = (request:any) => {
    console.log(request.body);
    const data = request.body;
    const Business = new BusinessAdmin();
    return Business.registerWithEmailAndPassword(
        request.body.email,request.body.password,request.body.displayName)
        .then((result) => {
            const resultPromise = [{}];
            resultPromise.push(Business.customeAttr(result.uid));
            resultPromise.push(Business.createFirestoreResum(result.uid));
            resultPromise.push(Business.saveFireStoreData(result.uid,data.company,data.email,data.password,data.celphone,data.city,data.address));
            return Promise.all(resultPromise);
        })
}
export { businessCreateController };